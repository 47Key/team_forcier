import React, { useState, useEffect } from 'react';
import styles from '../styles/Properties.module.css';

const PropertiesByCity = ({ properties }) => {
  const [getProperties, setProperties] = useState([]);
  useEffect(() => {
    setProperties(properties);
  })
  return (
    <div className={styles.mapwrap}>
      {getProperties.map(([key, value]) => {
        try {
          return (
            <div key={key} className={styles.listwrap}>
              <div className={styles.propphoto}>
                <img src={value.records[0].Photo.PropertyPhoto[0].PhotoURL} />
              </div>
              <div className={styles.listinfo}>
                <div className={styles.listinfotop}>
                  <p>{value.records[0].Address.City}</p>
                  <h1>{new Intl.NumberFormat('en-US', { 
                  style: 'currency', 
                  currency: 'USD' 
                  }).format(value.records[0].Price).slice(0, -3)}</h1>
                </div>
                <div className={styles.listinfobot}>
                  <h1>{value.records[0].Address.StreetNumber} {value.records[0].Address.StreetName}</h1>
                </div>
                <div>
                  <div className={styles.listinfobb}>
                    <h1>{value.records[0].Building.BedroomsTotal}</h1>
                    <p>Bedrooms</p>
                  </div>
                  <div className={styles.listinfobb}>
                    <h1>{value.records[0].Building.BathroomTotal}</h1>
                    <p>Bathrooms</p>
                  </div>
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
