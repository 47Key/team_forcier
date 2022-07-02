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
                <h1>{new Intl.NumberFormat('en-US', { 
                  style: 'currency', 
                  currency: 'USD' 
                }).format(value.records[0].Price).slice(0, -3)}</h1>
                <h1>{value.records[0].Address.StreetNumber} {value.records[0].Address.StreetName}</h1>
                <p>{value.records[0].Address.City}</p>
              </div>
              <div className={styles.listinfo}>
                <div className={styles.listinfobb}>
                  {value.records[0].Building.BedroomsTotal}&nbsp;
                  <p className={styles.listinfobbbottom}>Bedrooms</p>
                </div>
                <div className={styles.listinfobb}>
                  {value.records[0].Building.BathroomTotal}&nbsp;
                  <p className={styles.listinfobbbottom}>Bathrooms</p>
                </div>
              </div>
            </div>
          );
        } catch (error) {
          return (<p> non </p>)
        }
      }
    )}
    </div>
  );
};

export default PropertiesByCity;
