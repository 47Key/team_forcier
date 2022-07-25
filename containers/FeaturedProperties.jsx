import React, { useState, useEffect } from 'react';
import styles from '../styles/Properties.module.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
// import Image from 'next/image'

const FeaturedProperties = ({ properties }) => {
  const [getProperties, setProperties] = useState([]);
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (window.innerWidth > 800) {
      if (direction == 'left') {
        current.scrollLeft -= (window.innerWidth * 0.9);
      } else {
        current.scrollLeft += (window.innerWidth * 0.9);
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
                  </div>
                  <div className={styles.moreinfobuttonwrap}>
                    <button className={styles.moreinfobutton}>More Info</button>
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
        <BsArrowLeftShort className={styles.featuredscrollbutton} onClick={() => scroll('left')} size={40} />
        <BsArrowRightShort className={styles.featuredscrollbutton} onClick={() => scroll('right')} size={40} />
      </div>
    </div>
  );
};

export default FeaturedProperties;