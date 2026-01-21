// netlify/functions/schedule-meeting.js
// Place this file in: netlify/functions/schedule-meeting.js

const nodemailer = require('nodemailer');

// Helper function to create ICS calendar file
function createICSFile(eventDetails) {
  const {
    startDate,
    endDate,
    summary,
    description,
    location,
    organizerEmail,
    attendeeEmail,
    attendeeName
  } = eventDetails;

  const formatICSDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Axis Horizon//Meeting Scheduler//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:${Date.now()}@axishorizon.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${summary}
DESCRIPTION:${description}
LOCATION:${location}
ORGANIZER;CN=Axis Horizon:mailto:${organizerEmail}
ATTENDEE;CN=${attendeeName};RSVP=TRUE:mailto:${attendeeEmail}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder: ${summary} in 15 minutes
END:VALARM
END:VEVENT
END:VCALENDAR`;

  return ics;
}

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, subject, budget, message, meetingDate, meetingTime, meetingType } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name, E-Mail und Nachricht sind erforderlich' })
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Ungültige E-Mail-Adresse' })
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Prepare meeting details if date/time provided
    let meetingInfo = '';
    let icsAttachment = null;
    let meetingLink = '';

    if (meetingDate && meetingTime) {
      const startDateTime = new Date(`${meetingDate}T${meetingTime}`);
      const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour duration

      // Generate meeting link based on platform
      if (meetingType === 'google-meet') {
        meetingLink = 'Google Meet (Link wird nach Bestätigung erstellt)';
      } else if (meetingType === 'zoom') {
        meetingLink = 'Zoom (Link wird separat gesendet)';
      } else if (meetingType === 'teams') {
        meetingLink = 'Microsoft Teams (Link wird separat gesendet)';
      }

      const formattedDate = new Date(meetingDate).toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      meetingInfo = `
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">📅 Meeting Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Datum:</strong> ${formattedDate}</li>
            <li style="margin-bottom: 10px;"><strong>Uhrzeit:</strong> ${meetingTime} Uhr</li>
            <li style="margin-bottom: 10px;"><strong>Plattform:</strong> ${meetingType}</li>
            <li style="margin-bottom: 10px;"><strong>Link:</strong> ${meetingLink}</li>
          </ul>
        </div>
      `;

      // Create ICS file
      const icsContent = createICSFile({
        startDate: startDateTime,
        endDate: endDateTime,
        summary: `Meeting mit ${name}`,
        description: `Meeting-Anfrage über Kontaktformular.\n\nBetreff: ${subject || 'Nicht angegeben'}\n\nBudget: ${budget || 'Nicht angegeben'}\n\nNachricht: ${message}`,
        location: meetingLink,
        organizerEmail: 'info@axishorizon.com',
        attendeeEmail: email,
        attendeeName: name,
      });

      icsAttachment = {
        filename: 'meeting.ics',
        content: icsContent,
        contentType: 'text/calendar; method=REQUEST',
      };
    }

    // Email to company (info@axishorizon.com)
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@axishorizon.com',
      subject: `🔔 Neue Kontaktanfrage${meetingDate ? ' mit Terminwunsch' : ''} von ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
            .info-row { margin-bottom: 15px; padding: 10px; background-color: #f9fafb; border-left: 3px solid #2563eb; }
            .label { font-weight: bold; color: #1f2937; display: block; margin-bottom: 5px; }
            .value { color: #4b5563; }
            .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">Neue Kontaktanfrage</h2>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="info-row">
                <span class="label">E-Mail:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="info-row">
                <span class="label">Betreff:</span>
                <span class="value">${subject || 'Nicht angegeben'}</span>
              </div>
              <div class="info-row">
                <span class="label">Budget:</span>
                <span class="value">${budget || 'Nicht angegeben'}</span>
              </div>
              <div class="info-row">
                <span class="label">Nachricht:</span>
                <p style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap;">${message}</p>
              </div>
              ${meetingInfo}
            </div>
            <div class="footer">
              <p>Diese E-Mail wurde automatisch über das Kontaktformular auf axishorizon.com generiert.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: icsAttachment ? [icsAttachment] : [],
    };

    // Email to client (confirmation)
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Vielen Dank für Ihre Kontaktaufnahme - Axis Horizon',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
            .message-box { background-color: #f9fafb; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0; }
            .footer { background-color: #1f2937; color: white; padding: 30px; text-align: center; border-radius: 0 0 8px 8px; }
            .footer a { color: #60a5fa; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Vielen Dank für Ihre Nachricht!</h1>
            </div>
            <div class="content">
              <p>Sehr geehrte(r) ${name},</p>
              <p>wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
              
              <h3>Ihre Anfrage:</h3>
              <p><strong>Betreff:</strong> ${subject || 'Nicht angegeben'}</p>
              ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
              
              <div class="message-box">
                <strong>Ihre Nachricht:</strong><br/>
                <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
              </div>
              
              ${meetingInfo}
              
              ${meetingDate ? '<p><strong>📎 Eine Kalendereinladung ist dieser E-Mail beigefügt.</strong> Bitte fügen Sie diese zu Ihrem Kalender hinzu.</p>' : ''}
              
              <p>Wir freuen uns auf den Austausch mit Ihnen!</p>
              
              <p>Mit freundlichen Grüßen,<br/>Ihr Axis Horizon Team</p>
            </div>
            <div class="footer">
              <p style="margin: 0 0 10px 0;"><strong>Axis Horizon</strong></p>
              <p style="margin: 5px 0;">Vulkanstraße 12 C<br/>10365 Berlin</p>
              <p style="margin: 5px 0;">
                📞 <a href="tel:+4915212384897">+49 1521 2384897</a><br/>
                ✉️ <a href="mailto:info@axishorizon.com">info@axishorizon.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: icsAttachment ? [icsAttachment] : [],
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(clientMailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'E-Mail erfolgreich gesendet!' 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return user-friendly error message
    let errorMessage = 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'E-Mail-Konfigurationsfehler. Bitte kontaktieren Sie den Administrator.';
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    };
  }
};