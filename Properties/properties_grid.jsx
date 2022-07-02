import { useEffect, useState, React } from 'react';
import PropertiesByCity from './Parameters/pull_city';
import Properties from './pull_data';
import './properties.css';
/* eslint-disable */
export default function PropertyGrid() {
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
    <div className="property-grid__wrapper">
      <div className="property-options__container">
        <h1>Search by City</h1>
        <div className="property-options__container-city">
          <button className="property-options__container-city-button" value="Default" onClick={handleOnChange}>All</button>
          <button className="property-options__container-city-button" value="Windsor" onClick={handleOnChange}>Windsor</button>
          <button className="property-options__container-city-button" value="Tecumseh" onClick={handleOnChange}>Tecumseh</button>
          <button className="property-options__container-city-button" value="Lasalle" onClick={handleOnChange}>Lasalle</button>
          <button className="property-options__container-city-button" value="Amherstburg" onClick={handleOnChange}>Amherstburg</button>
          <button className="property-options__container-city-button" value="Essex" onClick={handleOnChange}>Essex</button>
        </div>
      </div>
      {defaultContentVisible && 
      <div className="properties-wrapper">
        <Properties id={3}/>
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
        <Properties id={20}/>
      </div>
      }
      {windsorContentVisible && 
      <div className="properties-wrapper">
        <PropertiesByCity city={"Windsor"} />
      </div>
      }
      {tecumsehContentVisible &&
      <div className="properties-wrapper">
        <PropertiesByCity city={"Tecumseh"} />
      </div>
      }
      {lasalleContentVisible && 
      <div className="properties-wrapper">
        <PropertiesByCity city={"Lasalle"} />
      </div>
      }
      {amherstburgContentVisible && 
      <div className="properties-wrapper">
        <PropertiesByCity city={"Amherstburg"} />
      </div>
      }
      {essexContentVisible && 
      <div className="properties-wrapper">
        <PropertiesByCity city={"Essex"} />
      </div>
      }
      </div>
    );
  }
  