import React from 'react';
import Properties from './pull_data';
import './properties.css';
/* eslint-disable */
const DisplayProperties = () => (
  <div className="property-options">
      <select className="property-button" name="Location">
        <option value="Sort_by_City">Sort by City</option>
        <option value="Windsor">Windsor</option>
        <option value="Tecumseh">Tecumseh</option>
        <option value="Lasalle">Lasalle</option>
        <option value="Amherstburg">Amherstburg</option>
        <option value="Essex">Essex</option>
      </select>
    <div className="properties-wrapper section__padding">
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
    </div>
  </div>
);

export default DisplayProperties;
