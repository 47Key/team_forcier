import Link from "next/link";
import styles from '../styles/Home.module.css';
import React from "react";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a className={`${styles.navItem} ${active ? styles.active : ""}`}>
        {text}
      </a>
    </Link>
  );
};

export default NavItem;