import React, { useState } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

export const getStaticProps = async () => {
  const res = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Windsor"`);
  const getData = await res.text();
  const parsedData = JSON.parse(getData);
  const keyName = Object.entries(parsedData);
  console.log([keyName]);

  return {
    props: { properties: [keyName] }
  }

}

const PropertiesByCity = ({ properties }) => {
  console.log(properties);
  return (
    <div className="map__wrapper">
      {properties.map(([key, value]) => {
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
