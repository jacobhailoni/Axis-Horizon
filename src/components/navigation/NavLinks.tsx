import Link from "next/link";
import React from "react";

const NavLinks = () => {
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

export default NavLinks;
