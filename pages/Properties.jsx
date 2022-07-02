import React, { useEffect, useState } from 'react';
import PropertiesByCity from './pull-city';
// import Properties from './pull_data';
import styles from '../styles/Properties.module.css';

export const getStaticProps = async () => {
  const responseWin = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Windsor"`);
  const getDataWin = await responseWin.text();
  const parsedDataWin = JSON.parse(getDataWin);
  const keyNameWin = Object.entries(parsedDataWin);

  const responseTec = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Tecumseh"`);
  const getDataTec = await responseTec.text();
  const parsedDataTec = JSON.parse(getDataTec);
  const keyNameTec = Object.entries(parsedDataTec);

  const responseEss = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Essex"`);
  const getDataEss = await responseEss.text();
  const parsedDataEss = JSON.parse(getDataEss);
  const keyNameEss = Object.entries(parsedDataEss);

  const responseLas = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Lasalle"`);
  const getDataLas = await responseLas.text();
  const parsedDataLas = JSON.parse(getDataLas);
  const keyNameLas = Object.entries(parsedDataLas);

  const responseAmh = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Amherstburg"`);
  const getDataAmh = await responseAmh.text();
  const parsedDataAmh = JSON.parse(getDataAmh);
  const keyNameAmh = Object.entries(parsedDataAmh);
  
  return {
    props: { 
      propertiesWin: keyNameWin,
      propertiesTec: keyNameTec, 
      propertiesEss: keyNameEss, 
      propertiesLas: keyNameLas, 
      propertiesAmh: keyNameAmh,  
    }
  }
}

export default function PropertyGrid({ propertiesWin, propertiesTec, propertiesLas, propertiesAmh, propertiesEss }) {
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
        {/* <Properties id={3}/>
        <Properties id={4}/>
        <Properties id={5}/>
        <Properties id={6}/>
        <Properties id={7}/>
        <Properties id={8}/>
        <Properties id={9}/>
        <Properties id={13}/>
        <Properties id={14}/>
        <Properties id={15}/>
        <Properties id={16}/>
        <Properties id={17}/>
        <Properties id={18}/>
        <Properties id={19}/>
        <Properties id={20}/> */}
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
  