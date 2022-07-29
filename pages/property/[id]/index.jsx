import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaWindowClose } from 'react-icons/fa';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styles from '../../../styles/Properties.module.css';
import '../../../styles/Home.module.css';
import NavBar from '../../../containers/Navbar'; 
// import { useRouter } from 'next/router';

// const check = () => {
//   // const router = useRouter()
//   console.log(useRouter());
// }
// check(); 

export const getStaticProps = async () => {
//   const id = React.useParams();
  const response = await fetch(`https://teamforcier-default-rtdb.firebaseio.com/IndividualProperty.json?orderBy="listingId"&equalTo="22009233"`);
  const getData = await response.json();
  const indPropDetails = Object.entries(getData);

  return {
    props: { 
      indProp: indPropDetails,
    }
  }
}


const IndividualProperty = ({ indProp }) => {
  const [data, setData] = useState([]);
  const [mainPhoto, setMainPhoto] = useState([]);
  const [otherPhotos, setOtherPhotos] = useState([]);
  const preData = indProp[0][1];
  
  // set data and photos in state on render
  useEffect(() => {
    setData(preData);
    setMainPhoto(preData.mainPhoto);
    setOtherPhotos(preData.otherPhotos);
  }, []);
  
  // scrolling for additional property pictures
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= (window.innerWidth * 0.8);
    } else {
      current.scrollLeft += (window.innerWidth * 0.8);
    }
  };

  // price formatting
  const priceAfterFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(data.price);
     
  
  return (
    <div>
      <NavBar />
      <div className={styles.indListAppWrap}>
        <div className={styles.indListWrap}>
          <div className={styles.indListInfo}>
            <img loading="lazy" src={`${mainPhoto}`} />
            <div loading="lazy" className={styles.indListPhotoRow} ref={scrollRef}>
              {otherPhotos.map(photo => <img key={photo} id={styles.imgTray} onClick={() => setMainPhoto(photo)} src={photo} />)}
            </div>
            <div className={styles.imgTrayScroll}>
              <BsArrowLeftShort className={styles.imgTrayScrollArrow} id={styles.scrollLeft} onClick={() => scroll('left')} />
              <BsArrowRightShort className={styles.imgTrayScrollArrow} id={styles.scrollRight} onClick={() => scroll('right')} />
            </div>
            <div className={styles.indListInfoDet}>
              <div className={styles.indListInfoProp}>
                <h1>{priceAfterFormat.slice(0, -3)}</h1>
                <h2 id={styles.indListAddress}>{data.address}</h2>
              </div>
              <div className={styles.indListInfoBedbath}>
                <div className={styles.indListBedbath}>
                  <FaBed className={styles.indListIcon} size={25} />
                  <p id={styles.indListBbVal}>{data.bedroomsTotal}</p>
                  <h1 id={styles.indListBbTitle}>Bedroomss</h1>
                </div>
                <div className={styles.indListBedbath}>
                  <FaBath className={styles.indListIcon} size={25} />
                  <p id={styles.indListBbVal}>{data.bathroomsTotal}</p>
                  <h1 id={styles.indListBbTitle}>Bathrooms</h1>
                </div>
              </div>
              <div className={styles.indListInfoBtnWrap}>
                <div className={styles.indListCity}>
                  <h2 id={styles.indListCity}>{data.city}</h2>
                  <p>MLS#{data.listingId}</p>
                </div>
                <button type="button" className={styles.indListInfoDetBtn}>
                  Schedule a Viewing
                </button>
              </div>
            </div>
            <div className={styles.indListInfoDetBtm}>
              <div className={styles.indListInfoDetBtmDesc}>
                <h1 id={styles.indListDesc}>Overview</h1>
                <p>{data.description}</p>
              </div>
              <div id={styles.indListLine}>
                <hr />
              </div>
              <div className={styles.indListInfoDetBtmSum}>
                <div id={styles.indListDesInfo} className={styles.indListPropDetInd} >
                  <h3>Property Type</h3>
                  <p>{data.propertyType}</p>
                </div>
                <div id={styles.indListDesInfo} className={styles.indListPropDetInd} >
                  <h3>Building Type</h3>
                  <p>{data.buildingType}</p>
                </div>
                <div id={styles.indListDesInfo} className={styles.indListPropDetInd} >
                  <h3>Storeys</h3>
                  <p>{data.stories}</p>
                </div>
                <div id={styles.indListDesInfo} className={styles.indListPropDetInd} >
                  <h3>Title</h3>
                  <p>{data.title}</p>
                </div>
                <div id={styles.indListDesInfo} className={styles.indListPropDetInd} >
                  <h3>Land Size</h3>
                  <p>{data.landSize}</p>
                </div>
                <div id={styles.indListDesInfo} className={styles.indListPropDetInd} >
                  <h3>Year Built</h3>
                  <p>{data.buildDate}</p>
                </div>
                <div id={styles.indListDesInfo} className={styles.indListPropDetInd} >
                  <h3>Parking Type</h3>
                  {/* <p>{data.parkingType}</p> */}
                </div>
              </div>
            </div>
            <div className={styles.indListInfoDetBtm}>
              <iframe
                title="property-map"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDplpVKhZszhYAMTaGKLlTqPhXSX2YVCbI
                &q=${data.latitude}, ${data.longitude}
                &zoom=15
                &center=${data.latitude}, ${data.longitude}`}
                />
            </div>
            <div className={styles.indListInfoDetBtm}>
              <div className={styles.indListInfoDetBtmDesc}>
                <h1>Building Features</h1>
              </div>
              <div id={styles.indListBuildDesc} className={styles.indListInfDetBtmSum} >
                <div className={styles.indListPropDetInd}>
                  <div className={styles.indListPropDetIndHead}>
                    <div className={styles.indListPropDetIndSub}>
                      <h4>Bedrooms</h4>
                      <p>{data.bedroomsTotal}</p>
                    </div>
                    <div className={styles.indListPropDetIndSub}>
                      <h4>Bathrooms</h4>
                      <p>{data.bathroomsTotal}</p>
                    </div>
                  </div>
                </div>
                {/* <div id={styles.indListLine}>
                  <hr id={styles.indListBreak}/>
                </div>
                <div className={styles.indListPropDetInd}>
                </div> */}
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
    </div>
    );
};

export default IndividualProperty;