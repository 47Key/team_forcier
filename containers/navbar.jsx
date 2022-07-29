import React, { useEffect, useState } from 'react';
import Navlink from '../components/Navlink';
import styles from '../styles/Home.module.css';
import { FiMenu, FiXCircle } from 'react-icons/fi';
import Link from 'next/link';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(true);
      return (
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <h1>Team Forcier</h1>
            </Link>
          </div>
          <div className={styles.dropdown}>
            {dropdown ? 
            <FiMenu className={styles.dropDownIcon} onClick={() => {setDropdown(false)}}size={50} />
            :           
            <div className={styles.navLinks}>
              <Navlink href="/" title="Featured Properties" />
              <Navlink href="/" title="All Properties" />
              <Navlink href="/" title="About us" />
              <div className={styles.dropDownClose}>
                <FiXCircle className={styles.dropDownIcon} onClick={() => {setDropdown(true)}} size={20} />
              </div>
            </div>
            }
          </div>
        </div>
      );
  }


export default NavBar;
