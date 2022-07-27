import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { FiMenu, FiXCircle } from 'react-icons/fi';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 800) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }, [])    
      return (
        <div className={styles.navbar}>
          <div className={styles.logo}>
              <h1>Team Forcier</h1>
          </div>
          <div className={styles.dropdown}>
            {dropdown ? 
            <FiMenu className={styles.dropDownIcon} onClick={() => {setDropdown(false)}}size={50} />
            :           
            <div className={styles.navLinks}>
              <p>Featured Properties</p>
              <p>All Properties</p>
              <p>About us</p>
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
