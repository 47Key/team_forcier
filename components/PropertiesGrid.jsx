import React, { useEffect, useState } from 'react';
import PropertiesByCity from './pull-city';
import PropertiesDefault from './pull_data';
import styles from '../styles/Properties.module.css';

export default function PropertyGrid({ propertiesWin, propertiesTec, propertiesLas, propertiesAmh, propertiesEss, propertiesDef }) {
  const [city, setCity] = useState('Default');

  const [defaultContentVisible, setDefaultContentVisible] = useState(true);
  const [windsorContentVisible, setWindsorContentVisible] = useState(false);
  const [amherstburgContentVisible, setAmherstburgContentVisible] = useState(false);
  const [lasalleContentVisible, setLasalleContentVisible] = useState(false);
  const [tecumsehContentVisible, setTecumsehContentVisible] = useState(false);
  const [essexContentVisible, setEssexContentVisible] = useState(false);

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
      {defaultContentVisible && 
      <div className={styles.propwrap}>
        <PropertiesDefault properties={propertiesDef} />
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
    );
  }
  