import React, { useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fName: "",
    eAddress: "",
    ysubject: "",
    ybudget: "",
    yMessage: "",
    meetingType: "google-meet",
  });

  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Format date and time from selectedDateTime
      let meetingDate = "";
      let meetingTime = "";

      if (selectedDateTime) {
        meetingDate = selectedDateTime.toISOString().split("T")[0];
        meetingTime = selectedDateTime
          .toTimeString()
          .split(" ")[0]
          .substring(0, 5);
      }

      const response = await fetch("/.netlify/functions/schedule-meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fName,
          email: formData.eAddress,
          subject: formData.ysubject,
          budget: formData.ybudget,
          message: formData.yMessage,
          meetingDate: meetingDate,
          meetingTime: meetingTime,
          meetingType: formData.meetingType,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns bald bei Ihnen.",
        });
        setFormData({
          fName: "",
          eAddress: "",
          ysubject: "",
          ybudget: "",
          yMessage: "",
          meetingType: "google-meet",
        });
        setSelectedDateTime(null);
        router.push("/thank-you");
      } else {
        setStatus({
          type: "error",
          message:
            data.error ||
            "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message:
          "Anfrage fehlgeschlagen. Bitte versuchen Sie es später erneut. Fehler: " +
          (error instanceof Error ? error.message : "Unbekannter Fehler"),
      });
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="contact-section style-four pt-0">
        <div className="anim-icons">
          <div className="image-1">
            <img src="assets/images/icons/section-bg-shape6.png" alt="Image" />
          </div>
        </div>
        <div className="outer-box">
          <div
            className="bg bg-image"
            style={{
              backgroundImage:
                "url(assets/images/icons/section-bg-shape13.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="content-column col-lg-6 col-xl-6">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title wow fadeInUp">
                      <img
                        className="icon-img"
                        src="assets/images/icons/sub-title-shape.png"
                        alt="Image"
                      />
                      Jetzt Kontakt aufnehmen
                    </span>
                    <h2 className="title wow fadeInUp">
                      Erfolg ist Teamarbeit{" "}
                      <span className="color1">
                        lassen Sie uns ihn gemeinsam erreichen
                      </span>
                    </h2>
                  </div>
                  <div className="contact-info">
                    <h6 className="email">info@axishorizonglobal.de</h6>
                    <h3 className="phone">+49 1521 2384897</h3>
                  </div>
                </div>
              </div>
              <div className="form-column col-lg-6 col-xl-6">
                <div className="inner-column">
                  <div className="contact-form wow fadeInLeft">
                    <div>
                      <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                          <label htmlFor="fName">Name *</label>
                          <input
                            type="text"
                            id="fName"
                            name="fName"
                            placeholder="Ihr vollständiger Name"
                            value={formData.fName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <label htmlFor="eAddress">E-Mail-Adresse *</label>
                          <input
                            type="email"
                            id="eAddress"
                            name="eAddress"
                            placeholder="Ihre E-Mail-Adresse"
                            value={formData.eAddress}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <label htmlFor="ysubject">Betreff</label>
                          <input
                            type="text"
                            id="ysubject"
                            name="ysubject"
                            placeholder="Worum geht es?"
                            value={formData.ysubject}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <label htmlFor="ybudget">Ihr Budget</label>
                          <input
                            type="text"
                            id="ybudget"
                            name="ybudget"
                            placeholder="Geschätztes Budget"
                            value={formData.ybudget}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-12">
                          <label htmlFor="yMessage">Nachricht *</label>
                          <textarea
                            name="yMessage"
                            id="yMessage"
                            placeholder="Beschreiben Sie Ihr Projekt"
                            rows={2}
                            value={formData.yMessage}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>

                        {/* Meeting Scheduler Section */}
                        <div className="form-group col-lg-12">
                          <div
                            style={{
                              borderTop: "1px solid #e5e7eb",
                              paddingTop: "20px",
                              marginTop: "10px",
                              marginBottom: "15px",
                            }}
                          >
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                marginBottom: "15px",
                                display: "block",
                              }}
                            >
                              📅 Termin vereinbaren (Optional)
                            </label>
                          </div>
                        </div>

                        <div className="form-group col-lg-12">
                          <label htmlFor="meetingDateTime">
                            Datum & Uhrzeit wählen
                          </label>
                          <DatePicker
                            onKeyDown={(e) => {
                              e.preventDefault(); // Prevents all keyboard input
                            }}
                            selected={selectedDateTime}
                            onChange={(date: Date | null) =>
                              setSelectedDateTime(date)
                            }
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            timeCaption="Uhrzeit"
                            dateFormat="dd.MM.yyyy HH:mm"
                            minDate={new Date()}
                            placeholderText="Klicken Sie, um Datum & Uhrzeit auszuwählen"
                            className="form-control"
                            wrapperClassName="datepicker-wrapper"
                            calendarClassName="custom-calendar"
                            locale="de"
                          />
                        </div>
                        <div className="form-group col-lg-12">
                          <label htmlFor="meetingType">Meeting-Plattform</label>
                          <select
                            id="meetingType"
                            name="meetingType"
                            value={formData.meetingType}
                            onChange={handleChange}
                            style={{
                              width: "100%",
                              padding: "12px 20px",
                              border: "1px solid #e5e7eb",
                              borderRadius: "5px",
                              fontSize: "14px",
                              backgroundColor: "#fff",
                              cursor: "pointer",
                            }}
                          >
                            <option value="google-meet">Google Meet</option>
                            <option value="zoom">Zoom</option>
                            <option value="teams">Microsoft Teams</option>
                          </select>
                        </div>

                        {/* Status Message */}
                        {status.message && (
                          <div className="form-group col-lg-12">
                            <div
                              style={{
                                padding: "15px 20px",
                                borderRadius: "5px",
                                marginBottom: "15px",
                                backgroundColor:
                                  status.type === "success"
                                    ? "#d1fae5"
                                    : "#fee2e2",
                                border: `1px solid ${status.type === "success" ? "#10b981" : "#ef4444"}`,
                                color:
                                  status.type === "success"
                                    ? "#065f46"
                                    : "#991b1b",
                              }}
                            >
                              {status.message}
                            </div>
                          </div>
                        )}

                        <div className="form-group col-lg-12">
                          <button
                            type="button"
                            onClick={handleSubmit}
                            className="theme-btn btn-style-four"
                            disabled={loading}
                            style={{
                              opacity: loading ? 0.6 : 1,
                              cursor: loading ? "not-allowed" : "pointer",
                            }}
                          >
                            <span className="btn-title">
                              {loading ? "Wird gesendet..." : "Anfrage senden"}
                            </span>
                            <span className="dot-box">
                              <span className="dot-item"></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
