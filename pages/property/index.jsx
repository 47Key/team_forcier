import React, { useState } from 'react';
import { FaBed, FaBath, FaWindowClose } from 'react-icons/fa';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styles from '../../styles/Properties.module.css';
import { NavBar } from '../../containers/Navbar';

export const getStaticProps = async () => {
//   const id = React.useParams();
  const response = await fetch(`https://teamforcier-default-rtdb.firebaseio.com/IndividualProperty.json?orderBy="listingId"&equalTo="22008990"`);
  const getData = await response.text();
  const parsedData = JSON.parse(getData);
  const indPropDetails = Object.entries(parsedData);

  return {
    props: { 
      indPropDetails: indPropDetails,
    },
  }
}


const IndividualProperty = ({ indPropDetails }) => {
//   const [modalOpen, setModalOpen] = useState(false);

//   function openModal() {
//     setModalOpen(true);
//   }
//   function closeModal() {
//     setModalOpen(false);
//   }

  // const scrollRef = React.useRef(null);
  // const scroll = (direction) => {
  // const { current } = scrollRef;
  //   if (direction === 'left') {
  //     current.scrollLeft -= 300;
  //   } else {
  //     current.scrollLeft += 300;
  //   }
  // };

  const data = indPropDetails;
  console.log(data[0]);
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(data.price);

  // const [mainPicture, setMainPicture] = useState(data.mainPhoto);


  return (
    <div className={styles.indListAppWrap}>
      <div className={styles.indListWrap}>
        <div className={styles.indListInfo}>
          <img src={data.mainPicture} />
          <div className={styles.indListPhotoRow}
          // ref={scrollRef}
          >
            {/* {data.otherPhotos.map((otherPhotos, key) => <img key={key} id="img-tray" onClick={() => setMainPicture(otherPhotos)} src={otherPhotos} />)} */}
          </div>
          <div className="img-tray__scroll">
            <BsArrowLeftShort className={styles.indListScrollArrow} id="scroll-left" />
            <BsArrowRightShort className={styles.indListScrollArrow} id="scroll-right" />
          </div>
          <div className={styles.indListInfoDet}>
            <div className={styles.indListInfoProp}>
              <h1>{price.slice(0, -3)}</h1>
              <h2>{data.address}</h2>
              <h2>{data.city}</h2>
              <p>MLS#{data.listingId}</p>
            </div>
            <div className={styles.indListInfoBedbath}>
              <div className={styles.indListBedbath}>
                <FaBed className={styles.indListIcon} size={25} />
                <p id={styles.indListBbVal}>{data.bedroomsTotal}</p>
                <h1 id={styles.indListBbTitle}>Beds</h1>
              </div>
              <div className={styles.indListBedBath}>
                <FaBath className={styles.indListIcon} size={25} />
                <p id={styles.indListBbVal}>{data.bathroomsTotal}</p>
                <h1 id={styles.indListBbTitle}>Baths</h1>
              </div>
            </div>
            <div className={styles.indListInfBtnWrap}>
            <button type="button" className={styles.indListInfBtn}>
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
            {/* <iframe
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
              /> */}
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
                <p>{data.bedroomsTotal}</p>
              </div>
              <div id={styles.indListLine}>
                <hr id={styles.indListBreak}/>
              </div>
              <div className={styles.indListPropDetInd}>
                <h4>Bathrooms</h4>
                <p>{data.bathroomsTotal}</p>
              </div>
              <div id={styles.indListLine}>
                <hr id={styles.indListBreak}/>
              </div>
              <div className={styles.indListPropDetInd}>
                <h4>Interior Features</h4>
                <div className={styles.indListPropDetIndHead}>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Applicances</h5>
                    <p>{data.appliances}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Flooring</h5>
                    <p>{data.flooring}</p>
                  </div>
                </div>
              </div>
              <div id={styles.indListLine}>
                <hr id={styles.indListBreak}/>
              </div>
              <div className={styles.indListPropDetInd}>
                <h4>Building Features</h4>
                <div className={styles.indListPropDetIndHead}>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Exterior Finish</h5>
                    <p>{data.exteriorFinish}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Foundation</h5>
                    <p>{data.foundationType}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Pool</h5>
                    <p>{data.pool}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Zoning</h5>
                    <p>{data.zoning}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Features</h5>
                    <p>{data.features}</p>
                  </div>
                </div>
              </div>
              <div id={styles.indListLine}>
                <hr id={styles.indListBreak}/>
              </div>
              <div className={styles.indListPropDetInd}>
                <h4>Heating & Cooling</h4>
                <div className={styles.indListPropDetIndHead}>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Heating Type</h5>
                    <p>{data.heatingType}</p>
                  </div>
                  <div className={styles.indListPropDetIndSub}>
                    <h5>Cooling Type</h5>
                    <p>{data.coolingType}</p>
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