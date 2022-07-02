import fetch from 'node-fetch';
import React, { useState, useEffect } from 'react';
import '../pull_data.css';
import { FaBed, FaBath } from 'react-icons/fa';
/*eslint-disable*/
const PropertiesByCity = (props) => {
  const [getProperties, setProperties] = useState([]);
  const properties = async (props) => {
    const response = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="${props.city}"`);
    const getData = await response.text();
    const parsedData = JSON.parse(getData);
    const keyName = Object.entries(parsedData);
    setProperties(keyName);
  };
  useEffect(() => {
    properties(props);
  }, []);

  return (
    <div className="map__wrapper">
      {getProperties.map(([key, value]) => {
        try {
          return (
            <div key={key} className="listing__wrapper">
              <div key={key} className="property__main-photo">
                <img key={key} src={value.records[0].Photo.PropertyPhoto[0].PhotoURL} />
                <h1 key={key}>{new Intl.NumberFormat('en-US', { 
                  style: 'currency', 
                  currency: 'USD' 
                }).format(value.records[0].Price).slice(0, -3)}</h1>
                <h1 key={key}>{value.records[0].Address.StreetNumber} {value.records[0].Address.StreetName}</h1>
                <p key={key}>{value.records[0].Address.City}</p>
              </div>
              <div key={key} className="listing__info">
                <div key={key} className="listing__info-bedbath">
                  {value.records[0].Building.BedroomsTotal}&nbsp;
                  <FaBed size={15} />
                  <p className="listing__info-bedbath-bottom">Bedrooms</p>
                </div>
                <div key={key} className="listing__info-bedbath">
                  {value.records[0].Building.BathroomTotal}&nbsp;
                  <FaBath size={15} />
                  <p className="listing__info-bedbath-bottom">Bathrooms</p>
                </div>
              </div>
            </div>
          );
        } catch (error) {
          return (<p> </p>)
        }
      }
    )}
    </div>
  );
};

export default PropertiesByCity;
