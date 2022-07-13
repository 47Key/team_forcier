import React, { useState, useEffect } from 'react';
import styles from '../styles/Properties.module.css';
import Image from 'next/image'

const FeaturedProperties = ({ properties }) => {
  const [getProperties, setProperties] = useState([]);
  useEffect(() => {
    setProperties(properties);
  }, [])
  return (
    <div className={styles.featuredmapwrap}>
      <div className={styles.featuredproptitle}>
        <h1>FEATURED PROPERTIES</h1>
      </div>
      {getProperties.map(([key, value]) => {
        try {
          return (
            <div key={key} className={styles.featuredlistwrap}>
              <div className={styles.featuredpropphoto}>
                {/* <img src={value.mainPhoto} /> */}
                <Image src={value.mainPhoto} width={1000} height={400} />
              </div>
              <div className={styles.featuredlistinfo}>
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
          );
        } catch (error) {
          return (<p> </p>)
        }
      }
    )}
    </div>
  );
};

export default FeaturedProperties;