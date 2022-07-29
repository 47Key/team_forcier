import React, { useState, useEffect } from 'react';
import styles from '../styles/Properties.module.css';
import Link from 'next/link';

const PropertiesByCity = ({ properties }) => {
  const [getProperties, setProperties] = useState([]);
  useEffect(() => {
    setProperties(properties);
  }, [])
  return (
    <div className={styles.mapwrap}>
      {getProperties.map(([key, value]) => {
        try {
          return (
            <Link href={`/property/${value.listingId}`}>
              <div key={key} className={styles.listwrap}>
                <div className={styles.propphoto}>
                  <img src={value.photo} />
                </div>
                <div className={styles.listinfo}>
                  <div className={styles.listinfotop}>
                    <p>{value.city}</p>
                    <h1>{new Intl.NumberFormat('en-US', { 
                    style: 'currency', 
                    currency: 'USD' 
                    }).format(value.price).slice(0, -3)}</h1>
                  </div>
                  <div className={styles.listinfobot}>
                    <h1>{value.address}</h1>
                  </div>
                  <div className={styles.listinfowrap}>
                    <div className={styles.listinfobb}>
                      <h1>{value.bedroomsTotal}</h1>
                      <p>Bedrooms</p>
                    </div>
                    <div className={styles.listinfobb}>
                      <h1>{value.bathroomsTotal}</h1>
                      <p>Bathrooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
