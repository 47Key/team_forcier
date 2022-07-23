//////////////////////////////////////////////////////////
///////////// getStaticProps Implementation //////////////
//////////////////////////////////////////////////////////

// export const getStaticProps = async () => {
//   const responseDef = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="$key"&limitToFirst=1`);
//   const getDataDef = await responseDef.text();
//   const parsedDataDef = JSON.parse(getDataDef);
//   const keyNameDef = Object.entries(parsedDataDef);

//   const responseWin = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Windsor"`);
//   const getDataWin = await responseWin.text();
//   const parsedDataWin = JSON.parse(getDataWin);
//   const keyNameWin = Object.entries(parsedDataWin);

//   const responseTec = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Tecumseh"`);
//   const getDataTec = await responseTec.text();
//   const parsedDataTec = JSON.parse(getDataTec);
//   const keyNameTec = Object.entries(parsedDataTec);

//   const responseEss = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Essex"`);
//   const getDataEss = await responseEss.text();
//   const parsedDataEss = JSON.parse(getDataEss);
//   const keyNameEss = Object.entries(parsedDataEss);

//   const responseLas = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Lasalle"`);
//   const getDataLas = await responseLas.text();
//   const parsedDataLas = JSON.parse(getDataLas);
//   const keyNameLas = Object.entries(parsedDataLas);

//   const responseAmh = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Amherstburg"`);
//   const getDataAmh = await responseAmh.text();
//   const parsedDataAmh = JSON.parse(getDataAmh);
//   const keyNameAmh = Object.entries(parsedDataAmh);
  
//   return {
//     props: { 
//       propertiesWin: keyNameWin,
//       propertiesTec: keyNameTec, 
//       propertiesEss: keyNameEss, 
//       propertiesLas: keyNameLas, 
//       propertiesAmh: keyNameAmh,
//       propertiesDef: keyNameDef,  
//     }
//   }
// }




/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////// NAVBAR CWMARISH DROPDOWN EXTRA //////////// 
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////



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



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////// FEATPROP EXTRA CODE B4 CHANGE ///////////// 
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import styles from '../styles/Properties.module.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
// import Image from 'next/image'

const FeaturedProperties = ({ properties }) => {
  const [getProperties, setProperties] = useState([]);
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction == 'left') {
        current.scrollLeft -= 1250;
    } else {
        current.scrollLeft += 1250;
    }
  };
  
  useEffect(() => {
    setProperties(properties);
  }, []);
  
  return (
    <div className={styles.featuredpropwrapper}>
      <div className={styles.featuredproptitle}>
        <h1>FEATURED PROPERTIES</h1>
      </div>
      <div className={styles.featuredpropgallery}>
        <div className={styles.featuredpropcontainer} ref={scrollRef}>
          {getProperties.map(([key, value]) => {
            try {
              return (
                <div key={key} className={styles.featuredlistwrap}>
                  <div className={styles.featuredpropphoto}>
                    <img src={value.mainPhoto} />
                    {/* <Image src={value.mainPhoto} width={1000} height={400} /> */}
                  </div>
                  <div className={styles.featuredlistinfo}>
                    <div className={styles.featuredlistinfotop}>
                      <p>{value.city}</p>
                      <h1 id="price">{new Intl.NumberFormat('en-US', { 
                      style: 'currency', 
                      currency: 'USD' 
                      }).format(value.price).slice(0, -3)}</h1>
                    </div>
                    <div className={styles.featuredlistinfobot}>
                      <h1>{value.address}</h1>
                    </div>
                    <div className={styles.featuredlistinfowrap}>
                      <div className={styles.featuredlistinfobb}>
                        <h1>{value.bedroomsTotal}</h1>
                        <p>Bedrooms</p>
                      </div>
                      <div className={styles.featuredlistinfobb}>
                        <h1>{value.bathroomsTotal}</h1>
                        <p>Bathrooms</p>
                      </div>
                    </div>
                    <div className={styles.moreinfobuttonwrap}>
                      <button className={styles.moreinfobutton}>More Info</button>
                    </div>
                  </div>
                </div>
              );
            } catch (error) {
              return (<p> </p>)
            }
          },
        )}
        </div>
        {/* <button>View all Properties</button> */}
      </div>
      <div className={styles.scrollarrow}>
        <BsArrowLeftShort className={styles.featuredscrollbutton} type='button' onClick={() => scroll('left')} size={40} />
        <BsArrowRightShort size={40} className={styles.featuredscrollbutton} onClick={() => scroll('right')}/>
      </div>
    </div>
  );
};

export default FeaturedProperties;