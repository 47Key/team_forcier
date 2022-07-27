import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { FaBed, FaBath, FaWindowClose } from 'react-icons/fa';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styles from '../../styles/Properties.module.css';
// import Modal from 'react-modal';
import { Navbar } from '../../containers/Navbar';
import './IndividualProperty.css';

const IndividualProperty = () => {
  const [modalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
  const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
//   const location = useLocation();
//   const preData = location.state;
  const price = preData.Price;
  const priceAfterFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
  const data = {
    mainPhoto: preData.Photo.PropertyPhoto[0].LargePhotoURL,
    otherPhotos: preData.Photo.PropertyPhoto,
    address: `${preData.Address.StreetNumber} ${preData.Address.StreetName}`,
    bathroomTotal: preData.Building.BathroomTotal,
    bedroomTotal: preData.Building.BedroomsTotal,
    price: priceAfterFormat.slice(0, -3),
    city: preData.Address.City,
    description: preData.PublicRemarks,
    listingID: preData.ListingID,
    buildingSqFt: preData.Building.TotalFinishedArea,
    propertyType: preData.PropertyType,
    buildingType:
    `${preData.Building.Type} ${preData.Building.ConstructionStyleAttachment}`,
    stories: preData.Building.StoriesTotal,
    title: preData.OwnershipType,
    landSize: preData.Land.SizeTotalText,
    buildDate: preData.Building.ConstructedDate,
    parkingType:
    `${preData.ParkingSpaces.Parking[0].Name} ${preData.ParkingSpaces.Parking[1].Name}`,
    latitude: preData.Address.Latitude,
    longitude: preData.Address.Longitude,
    interiorFeatures: {
      appliances: preData.Building.Appliances,
      flooring: preData.Building.FlooringType,
      fireplace: preData.Building.FireplacePresent,
    },
    buildingFeatures: {
      exteriorFinish: preData.Building.ExteriorFinish,
      heatingType:
      `${preData.Building.HeatingType} ${preData.Building.HeatingFuel}`,
      coolingType: preData.Building.CoolingType,
      foundationType: preData.Building.FoundationType,
      features: preData.Features,
      pool: preData.PoolType,
    zoning: preData.ZoningDescription,
    },
  };
  const [mainPicture, setMainPicture] = useState(data.mainPhoto);
  return (
    <div className={styles.indListAppWrap}>
      <Navbar />
      {/* <Modal
        className="individual-listing__modal"
        isOpen={modalOpen}
        onClose={closeModal}
        >
        <div className="modal-content">
          <div className="modal-content__header">
            <h2>Book a Viewing</h2>
            <FaWindowClose id="modal-close" onClick={closeModal} size={25} />
          </div>
          <div className="modal-content__details">
            <p id="modal-details">You are requesting more information about: {data.address}</p>
            <input id="modal-details__input" placeholder="First Name" />
            <input id="modal-details__input" placeholder="Last Name" />
            <input id="modal-details__input" placeholder="Phone Number" />
            <input id="modal-details__input" placeholder="Email Address" />
            <div className="modal__submit-button__wrapper">
              <button type="submit" className="modal__submit-button">SUBMIT</button>
            </div>
          </div>
        </div>
      </Modal> */}
      <div className={styles.indListWrap}>
        <div className={styles.indListInfo}>
          <img src={mainPicture} />
          <div className={styles.indListPhotoRow} ref={scrollRef}>
            {data.otherPhotos.map((otherPhotos, key) => <img key={key} id="img-tray" onClick={() => setMainPicture(otherPhotos.LargePhotoURL)} src={otherPhotos.LargePhotoURL} />)}
          </div>
          <div className="img-tray__scroll">
            <BsArrowLeftShort className={styles.indListScrollArrow} id="scroll-left" onClick={() => scroll('left')} />
            <BsArrowRightShort className={styles.indListScrollArrow} id="scroll-right" onClick={() => scroll('right')} />
          </div>
          <div className={styles.indListInfoDet}>
            <div className={styles.indListInfoProp}>
              <h1>{priceAfterFormat.slice(0, -3)}</h1>
              <h2>{data.address}</h2>
              <h2>{data.city}</h2>
              <p>MLS#{data.listingID}</p>
            </div>
            <div className={styles.indListInfoBedbath}>
              <div className={styles.indListBedbath}>
                <FaBed className={styles.indListIcon} size={25} />
                <p id={styles.indListBbVal}>{data.bedroomTotal}</p>
                <h1 id={styles.indListBbTitle}>Beds</h1>
              </div>
              <div className={styles.indListBedBath}>
                <FaBath className={styles.indListIcon} size={25} />
                <p id={styles.indListBbVal}>{data.bathroomTotal}</p>
                <h1 id={styles.indListBbTitle}>Baths</h1>
              </div>
            </div>
            <div className={styles.indListInfBtnWrap}>
            <button type="button" className={styles.indListInfBtn} onClick={openModal}>
                Schedule a Viewing
              </button>
            </div>
          </div>
          <div className={styles.indListInfDetBtmWrap}>
            <div className={styles.indListInfDetBtm}>
              <h1 id={styles.indListDesc}>Overview</h1>
              <p>{data.description}</p>
            </div>
            <div id={styles.indListLine}>
              <hr />
            </div>
            <div className={styles.indListInfDetBtmSum}>
              <div
                id={styles.indListDesInfo}
                className={styles.indListPropDet}
                >
                <h3>Property Type</h3>
                <p>{data.propertyType}</p>
              </div>
              <div
                id={styles.indListDesInfo}
                className={styles.indListPropDet}
                >
                <h3>Building Type</h3>
                <p>{data.buildingType}</p>
              </div>
              <div
                id={styles.indListDesInfo}
                className={styles.indListPropDet}
                >
                <h3>Storeys</h3>
                <p>{data.stories}</p>
              </div>
              <div
                id={styles.indListDesInfo}
                className={styles.indListPropDet}
                >
                <h3>Title</h3>
                <p>{data.title}</p>
              </div>
              <div
                id={styles.indListDesInfo}
                className={styles.indListPropDet}
                >
                <h3>Land Size</h3>
                <p>{data.landSize}</p>
              </div>
              <div
                id={styles.indListDesInfo}
                className={styles.indListPropDet}
                >
                <h3>Year Built</h3>
                <p>{data.buildDate}</p>
              </div>
              <div
                id={styles.indListDesInfo}
                className={styles.indListPropDet}
                >
                <h3>Parking Type</h3>
                <p>{data.parkingType}</p>
              </div>
            </div>
          </div>
          <div className={styles.indListInfDetBtm}>
            <iframe
              title="property-map"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDplpVKhZszhYAMTaGKLlTqPhXSX2YVCbI
              &q=${data.latitude}, ${data.longitude}
              &zoom=18
              &center=${data.latitude}, ${data.longitude}`}
              />
          </div>
          <div className={styles.indListInfDetBtm}>
            <div className={styles.indListInfDetBtmDesc}>
              <h1>Building Features</h1>
            </div>
            <div
              id={styles.indListBuildDesc}
              className={styles.indListInfDetBtmSum}
              >
              <div className={styles.indListPropDetInd}>
                <h4>Bedrooms</h4>
                <p>{data.bedroomTotal}</p>
              </div>
              <div id={styles.indListLine}>
                <hr />
              </div>
              <div className={styles.indListPropDetInd}>
                <h4>Bathrooms</h4>
                <p>{data.bathroomTotal}</p>
              </div>
              <div id={styles.indListLine}>
                <hr />
              </div>
              <div className={styles.indListPropDetInd}>
                <h4>Interior Features</h4>
                <div className={styles.indListPropDetIndHead}>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Applicances</h5>
                    <p>{data.interiorFeatures.appliances}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Flooring</h5>
                    <p>{data.interiorFeatures.flooring}</p>
                  </div>
                </div>
              </div>
              <div id={styles.indListLine}>
                <hr />
              </div>
              <div className={styles.indListPropDetInd}>
                <h4>Building Features</h4>
                <div className={styles.indListPropDetIndHead}>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Exterior Finish</h5>
                    <p>{data.buildingFeatures.exteriorFinish}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Foundation</h5>
                    <p>{data.buildingFeatures.foundationType}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Pool</h5>
                    <p>{data.buildingFeatures.pool}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Zoning</h5>
                    <p>{data.buildingFeatures.zoning}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Features</h5>
                    <p>{data.buildingFeatures.features}</p>
                  </div>
                </div>
              </div>
              <div id="line">
                <hr />
              </div>
              <div className={styles.indListPropDetInd}>
                <h4>Heating & Cooling</h4>
                <div className={styles.indListPropDetIndHead}>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Heating Type</h5>
                    <p>{data.buildingFeatures.heatingType}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Cooling Type</h5>
                    <p>{data.buildingFeatures.coolingType}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default IndividualProperty;