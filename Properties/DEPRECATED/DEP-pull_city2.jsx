import fetch from 'node-fetch';
import React from 'react';
import './pull_data.css';
import { FaBed, FaBath } from 'react-icons/fa';

export default class PropertiesByCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: '',
      address: 'Loading...',
      bathroomTotal: '',
      bedroomTotal: '',
      price: '',
      id: props.id,
      city: props.city,
      isThere: true,
    };
  }
/* eslint-disable */
  async componentDidMount() {
    const response = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="${this.state.city}"`);
    const data = await response.text();
    const parsedData = JSON.parse(data);
    const keyName = Object.keys(parsedData);
    if (parsedData[keyName[this.state.id]] == undefined) {
      this.setState({isThere: false});
    } else {
    const base = parsedData[keyName[this.state.id]].records[0];
    this.setState({
      mainPhoto: base.Photo.PropertyPhoto[0].PhotoURL,
      address: base.Address.AddressLine1,
      bathroomTotal: base.Building.BathroomTotal,
      bedroomTotal: base.Building.BedroomsTotal,
      price: base.Price,
    });
  }
}
  
  render() {
    if (this.state.isThere) {
    return (
      <div className="listing__wrapper">
        <div className="property__main-photo">
          <img src={this.state.mainPhoto} />
          <h1>{this.state.price}</h1>
          <h1>{this.state.address}</h1>
        </div>
        <div className="listing__info">
          <p className="listing__info-bedbath">
            {this.state.bedroomTotal}&nbsp;
            <FaBed size={15}/>
            <p className="listing__info-bedbath-bottom">Bedrooms</p>
          </p>
          <p className="listing__info-bedbath">
            {this.state.bathroomTotal}&nbsp;
            <FaBath size={15}/> 
            <p className="listing__info-bedbath-bottom">Bathrooms</p>
          </p>
        </div>
      </div>
      );
    } else {
      return (<p> </p>)
    }
  }
}
