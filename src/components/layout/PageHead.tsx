import Head from "next/head";
import React from "react";

interface PageHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const PageHead: React.FC<PageHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType,
  noindex,
}) => {
  const pageTitle = title ?? "Axis Horizon Global";
  const pageDescription =
    description ??
    "Strategische Marketingberatung, digitales Marketing und Performance Marketing fuer messbares Unternehmenswachstum.";
  const pageKeywords = keywords ?? "";
  const pageOgImage = ogImage ?? "/assets/images/logo.png";
  const pageOgType = ogType ?? "website";
  const robotsValue = noindex ? "noindex,follow" : "index,follow";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {pageKeywords ? <meta name="keywords" content={pageKeywords} /> : null}
      <meta name="robots" content={robotsValue} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:site_name" content="Axis Horizon Global" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={pageOgType} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:locale" content="de_DE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
      <link
        rel="shortcut icon"
        href="/assets/images/favicon.png"
        type="image/x-icon"
      />
    </Head>
  );
};

export default PageHead;
