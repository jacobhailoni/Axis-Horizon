import React from "react";
import Link from "next/link";

const MobileMenu: React.FC = () => {
  return (
    <ul className="navigation">
      <li>
        <Link href="/">Startseite</Link>
      </li>
      <li>
        <Link href="/about">Ueber uns</Link>
      </li>
      <li>
        <Link href="/services">Dienstleistungen</Link>
      </li>
      <li>
        <Link href="/contact">Kontakt</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
