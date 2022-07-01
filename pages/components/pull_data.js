import fetch from 'node-fetch';
import React from 'react';
import { FaBed, FaBath } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const getStaticProps = async (props) => {
  const response = await fetch(`https://key47-51636.firebaseio.com/Properties/${props.id}.json`);
  const data = await response.text();
  const parsedData = JSON.parse(data);
  const base = parsedData.records[0];

  return {
    props: { data: base }
  };
}



export default class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: 'Loading...',
      address: '',
      bathroomTotal: '',
      bedroomTotal: '',
      price: '',
      id: props.id,
      city: '',
    };
  }
/* eslint-disable */
  async componentDidMount() {
    const base = getStaticProps(this.state.id);
    const price = base.Price;
    const priceAfterFormat = 
        new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD' 
      }).format(price)
    this.setState({
      totalObject: base,
      mainPhoto: base.Photo.PropertyPhoto[0].PhotoURL,
      address: base.Address.StreetNumber + " " + base.Address.StreetName,
      bathroomTotal: base.Building.BathroomTotal,
      bedroomTotal: base.Building.BedroomsTotal,
      price: priceAfterFormat.slice(0, -3),
      city: base.Address.City,
      listingID: base.ListingID,
    });
  }
  render() {
    return (
      <Link to={`property/${this.state.listingID}`} state={this.state.totalObject}>
      <div className="listing__wrapper">
        <div className="property__main-photo">
          <img src={this.state.mainPhoto}/>
          <h1>{this.state.price}</h1>
          <h1>{this.state.address}</h1>
          <p>{this.state.city}</p>
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
      </Link>
    );
  }
}
