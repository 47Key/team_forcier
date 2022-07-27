import React, { useEffect, useState } from 'react';
import PropertiesByCity from '../components/pull-city';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styles from '../styles/Properties.module.css';

export default function PropertyGrid({ propertiesWin, propertiesTec, propertiesLas, propertiesAmh, propertiesEss, propertiesDef }) {
  const [city, setCity] = useState('Default');
  const scrollRef = React.useRef(null);

  const [defaultContentVisible, setDefaultContentVisible] = useState(true);
  const [windsorContentVisible, setWindsorContentVisible] = useState(false);
  const [amherstburgContentVisible, setAmherstburgContentVisible] = useState(false);
  const [lasalleContentVisible, setLasalleContentVisible] = useState(false);
  const [tecumsehContentVisible, setTecumsehContentVisible] = useState(false);
  const [essexContentVisible, setEssexContentVisible] = useState(false);

  const scrollAll = (direction) => {
    const { current } = scrollRef;

    if (window.innerWidth > 800) {
      if (direction == 'left') {
        current.scrollLeft -= (window.innerWidth * 0.5);
      } else {
        current.scrollLeft += (window.innerWidth * 0.5);
      }
    } else if (window.innerWidth <= 800) {
      if (direction == 'left') {
          current.scrollLeft -= (window.innerWidth);
      } else {
          current.scrollLeft += (window.innerWidth);
      }
    }
  };

  useEffect(() => {
    city === 'Default' ? setDefaultContentVisible(true) : setDefaultContentVisible(false);
    city === 'Windsor' ? setWindsorContentVisible(true) : setWindsorContentVisible(false);
    city === 'Tecumseh' ? setTecumsehContentVisible(true) : setTecumsehContentVisible(false);
    city === 'Lasalle' ? setLasalleContentVisible(true) : setLasalleContentVisible(false);
    city === 'Amherstburg' ? setAmherstburgContentVisible(true) : setAmherstburgContentVisible(false);
    city === 'Essex' ? setEssexContentVisible(true) : setEssexContentVisible(false);
  }, [city]);

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={styles.propgridwrap}>
      <div className={styles.propoptcontainer}>
        <h1>Search by City</h1>
        <div className={styles.propoptcity}>
          <button className={styles.propoptbutton} value="Default" onClick={handleOnChange}>All</button>
          <button className={styles.propoptbutton} value="Windsor" onClick={handleOnChange}>Windsor</button>
          <button className={styles.propoptbutton} value="Tecumseh" onClick={handleOnChange}>Tecumseh</button>
          <button className={styles.propoptbutton} value="Lasalle" onClick={handleOnChange}>Lasalle</button>
          <button className={styles.propoptbutton} value="Amherstburg" onClick={handleOnChange}>Amherstburg</button>
          <button className={styles.propoptbutton} value="Essex" onClick={handleOnChange}>Essex</button>
        </div>
      </div>
      <div className={styles.propGridScrollWrapper} ref={scrollRef}>
        <div className={styles.propGridScrollContainer}>
          {defaultContentVisible && 
            <div className={styles.propwrap}>
              <PropertiesByCity properties={propertiesDef} />
            </div>
          }
          {windsorContentVisible && 
            <div className={styles.propwrap}>
              <PropertiesByCity properties={propertiesWin} />
            </div>
          }
          {tecumsehContentVisible &&
            <div className={styles.propwrap}>
              <PropertiesByCity properties={propertiesTec} />
            </div>
          }
          {lasalleContentVisible && 
            <div className={styles.propwrap}>
              <PropertiesByCity properties={propertiesLas} />
            </div>
          }
          {amherstburgContentVisible && 
            <div className={styles.propwrap}>
              <PropertiesByCity properties={propertiesAmh} />
            </div>
          }
          {essexContentVisible && 
            <div className={styles.propwrap}>
              <PropertiesByCity properties={propertiesEss} />
            </div>
          }
        </div>
      </div>
      <div className={styles.scrollarrow}>
        <BsArrowLeftShort className={styles.featuredscrollbutton} onClick={() => scrollAll('left')} size={40} />
        <BsArrowRightShort className={styles.featuredscrollbutton} onClick={() => scrollAll('right')} size={40} />
      </div>
      </div>
    );
  }
  