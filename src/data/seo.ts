import { ParsedUrlQuery } from "querystring";
import { policies } from "./policies";
import { serviceDetails } from "./services";

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const siteUrl = "https://axishorizonglobal.com";

const baseKeywords = [
  "Marketing Beratung",
  "Strategisches Marketing",
  "Digitales Marketing",
  "Marketing Agentur",
  "Markenstrategie",
  "Unternehmenswachstum",
  "Internationale Marketingberatung",
  "Marketing Strategie Entwicklung",
  "Go-to-Market Strategie",
  "Branding & Positionierung",
  "Performance Marketing",
  "Online Marketing Beratung",
  "Business Development Marketing",
  "Marketing fuer Unternehmen",
  "Skalierung von Geschaeftsmodellen",
  "Global Marketing Consulting",
  "Internationales Marketing",
  "Markteintritt Strategie",
  "Internationale Markenpositionierung",
  "B2B Marketing Beratung",
  "Wachstum internationaler Maerkte",
  "Marketing fuer Startups",
  "Marketing fuer KMU",
  "Marketing fuer Scale-ups",
  "Marketing fuer internationale Unternehmen",
  "Strategisches Marketing fuer Geschaeftsfuehrer",
  "Nachhaltiges Wachstum",
  "Messbare Marketingergebnisse",
  "Datengestuetztes Marketing",
  "Klare Marketingstrategie",
  "Skalierbare Marketingloesungen",
  "Axis Horizon Global",
  "Axis Horizon Marketing",
  "Axis Horizon Consulting",
  "Axis Horizon Global Marketing",
];

const extraKeywords = [
  "Marketingagentur Berlin",
  "Marketingberatung Berlin",
  "Marketingberatung Deutschland",
  "Performance Marketing Agentur",
  "Marketing Strategie Beratung",
  "Digitale Marketingstrategie",
  "Wachstum durch Marketing",
];

const defaultKeywords = mergeKeywords(baseKeywords, extraKeywords);

const defaultDescription =
  "Strategische Marketingberatung, digitales Marketing und Performance Marketing fuer messbares Unternehmenswachstum.";

const keywordsFor = (...custom: string[]) =>
  mergeKeywords(baseKeywords, extraKeywords, custom);

const pageMetaByPath: Record<
  string,
  { title: string; description: string; keywords?: string; noindex?: boolean }
> = {
  "/": {
    title: "Axis Horizon Global | Marketing Beratung & Strategisches Marketing",
    description:
      "Strategische Marketingberatung fuer Unternehmen, Startups und KMU. Klare Positionierung, digitales Marketing und Performance Marketing fuer Wachstum.",
    keywords: keywordsFor(
      "Marketing Beratung",
      "Strategisches Marketing",
      "Performance Marketing",
      "Axis Horizon Global",
    ),
  },
  "/about": {
    title: "Ueber uns | Axis Horizon Global",
    description:
      "Lernen Sie Axis Horizon Global kennen: Marketing Agentur fuer strategisches Marketing, Markenstrategie und skalierbares Wachstum.",
    keywords: keywordsFor(
      "Marketing Agentur",
      "Markenstrategie",
      "Unternehmenswachstum",
      "Axis Horizon Global",
    ),
  },
  "/services": {
    title: "Dienstleistungen | Axis Horizon Global",
    description:
      "Strategisches Marketing, digitales Marketing, Branding und Performance Marketing. Skalierbare Marketingloesungen fuer Unternehmen.",
    keywords: keywordsFor(
      "Strategisches Marketing",
      "Digitales Marketing",
      "Branding & Positionierung",
      "Performance Marketing",
      "Skalierbare Marketingloesungen",
    ),
  },
  "/contact": {
    title: "Kontakt | Axis Horizon Global",
    description:
      "Kontaktieren Sie uns fuer Marketing Beratung, Go-to-Market Strategie und internationale Markenpositionierung.",
    keywords: keywordsFor(
      "Marketing Beratung",
      "Go-to-Market Strategie",
      "Internationale Markenpositionierung",
      "Marketing Agentur",
    ),
  },
  "/thank-you": {
    title: "Danke | Axis Horizon Global",
    description:
      "Vielen Dank fuer Ihre Anfrage. Wir melden uns zeitnah bei Ihnen.",
    keywords: keywordsFor("Marketing Beratung", "Axis Horizon Global"),
    noindex: true,
  },
};

export function getSeoMeta(params: {
  pathname: string;
  asPath?: string;
  query?: ParsedUrlQuery;
}): SeoMeta {
  const rawPath = params.asPath ?? params.pathname;
  const cleanPath = rawPath.split("?")[0].split("#")[0];

  if (params.pathname === "/[slug]") {
    const slugValue = params.query?.slug;
    const slug =
      typeof slugValue === "string"
        ? slugValue
        : Array.isArray(slugValue)
          ? slugValue[0]
          : undefined;

    if (slug) {
      const service = serviceDetails.find((item) => item.slug === slug);
      if (service) {
        const description = truncate(service.overview[0] ?? "", 155);
        return {
          title: `${service.title} | Axis Horizon Global`,
          description: description || defaultDescription,
          keywords: mergeKeywords(
            baseKeywords,
            extraKeywords,
            [service.title, "Digitales Marketing", "Performance Marketing"],
          ),
          canonical: buildCanonical(cleanPath),
          ogImage: buildOgImage(),
          ogType: "article",
        };
      }

      const policy = policies.find((item) => item.slug === slug);
      if (policy) {
        return {
          title: `${policy.title} | Axis Horizon Global`,
          description:
            policy.title === "Impressum"
              ? "Impressum der Axis Horizon Global mit allen rechtlichen Angaben."
              : policy.title === "Datenschutzerklaerung"
                ? "Datenschutzerklaerung der Axis Horizon Global."
                : policy.title === "Allgemeine Geschaeftsbedingungen (AGB)"
                  ? "Allgemeine Geschaeftsbedingungen der Axis Horizon Global."
                  : policy.title === "Cookie-Einstellungen"
                    ? "Informationen zu Cookies und Einwilligungseinstellungen."
                    : defaultDescription,
          keywords: mergeKeywords(baseKeywords, extraKeywords, [policy.title]),
          canonical: buildCanonical(cleanPath),
          ogImage: buildOgImage(),
          ogType: "article",
        };
      }
    }
  }

  const pageMeta = pageMetaByPath[cleanPath];
  if (pageMeta) {
    return {
      title: pageMeta.title,
      description: pageMeta.description,
      keywords: pageMeta.keywords ?? defaultKeywords,
      canonical: buildCanonical(cleanPath),
      ogImage: buildOgImage(),
      ogType: "website",
      noindex: pageMeta.noindex,
    };
  }

  return {
    title: "Axis Horizon Global",
    description: defaultDescription,
    keywords: defaultKeywords,
    canonical: buildCanonical(cleanPath),
    ogImage: buildOgImage(),
    ogType: "website",
  };
}

function mergeKeywords(...keywordGroups: string[][]): string {
  const combined = keywordGroups.flatMap((group) => group || []);
  const unique = Array.from(
    new Set(
      combined
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
    ),
  );
  return unique.join(", ");
}

function buildCanonical(path: string): string {
  if (!path || path === "/") {
    return siteUrl;
  }
  return `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

function buildOgImage(): string {
  return `${siteUrl}/assets/images/logo.png`;
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength - 3).trim()}...`;
}
