import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import NavItem from '../components/NavItem';
import Link from "next/link";
// import Image from "next/image";
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';



const MENU_LIST = [
  { text: "All Properties", href: "/" },
  { text: "Contact Us", href: "/" },
  { text: "Home Evaluation", href: "/" },
];

const NavBar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
      <div className={styles.navbar}>
          <nav className={`${styles.navItem} ${navActive ? styles.active : ""}`}>
            <Link href={"/"}>
              <a onClick={() => setActiveIdx(-1)}>
                <h1>CodeWithMarish</h1>
              </a>
            </Link>
            <div className={`${styles.menuIcon} ${navActive ? styles.active : styles.inactive}`} onClick={() => setNavActive(!navActive)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={`${styles.menu} ${navActive ? styles.active : ""}`}>
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }} key={menu.href}>
                  <NavItem text={menu.text} href={menu.href} active={idx === activeIdx} 
                  />
                </div>
              ))}
            </div>
          </nav>
      </div>
  );
};

export default NavBar;
