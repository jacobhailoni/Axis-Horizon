import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/layout/Footer";
import Footer3 from "../components/layout/Footer3";
import Header3 from "../components/layout/Header3";
import PageHead from "../components/layout/PageHead";
import { getSeoMeta } from "../data/seo";

interface LayoutProps {
  children: React.ReactNode;
  HeaderStyle?: string;
  FooterStyle?: string;
  styleMode?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  HeaderStyle,
  FooterStyle,
  styleMode,
}) => {
  const [searchToggle, setSearchToggled] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  const seo = getSeoMeta({
    pathname: router.pathname,
    asPath: router.asPath,
    query: router.query,
  });

  const handleToggle = () => setSearchToggled(!searchToggle);

  useEffect(() => {
    if (styleMode === "Dark") {
      document.body.classList.add("dark-mode");
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.removeAttribute('data-theme');
    }
  }, [styleMode]);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) setScroll(scrollCheck);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scroll]);

  const handleOpen = () => document.body.classList.add("mobile-menu-visible");
  const handleRemove = () => document.body.classList.remove("mobile-menu-visible");

  return (
    <>

    <PageHead
      title={seo.title}
      description={seo.description}
      keywords={seo.keywords}
      canonical={seo.canonical}
      ogImage={seo.ogImage}
      ogType={seo.ogType}
      noindex={seo.noindex}
    />
    <div className="page-wrapper" id="top">
        {(!HeaderStyle || HeaderStyle === "three") && (
          <Header3
            handleOpen={handleOpen}
            handleRemove={handleRemove}
            searchToggle={searchToggle}
            handleToggle={handleToggle}
            scroll={scroll}
          />
        )}
        {children}
        {!FooterStyle && <Footer />}
        {FooterStyle === "three" && <Footer3 />}
    </div>

    </>
  );
};

export default Layout;
