import React, { useState, useEffect} from "react";
import styles from '../styles/Properties.module.css';
import { ImHome } from 'react-icons/im';
import { FiXCircle } from 'react-icons/fi';



const PropertyEvaluation = () => {
    const [modal, setModal] = useState(false);

    return (
        <div className={styles.propEvalWrap}>
            <div className={styles.propEvalContain}>
                {!modal ?
                  <div className={styles.propEvalText}>
                    <p>Find out what your home is worth</p>
                    <ImHome className={styles.propEvalIcon} onClick={() => {setModal(true)}} size={50}/>
                  </div>
                :
                  <div className={styles.propEvalModal}>
                    <div className={styles.propEvalText}>
                      <p>What we need to know</p>
                      <FiXCircle className={styles.propEvalIcon} onClick={() => {setModal(false)}} size={30} />
                    </div>
                    <div className={styles.propEvalModalInput}>
                      <label for="fname">First Name: </label>
                      <input type="string" id="fname"/>
                      
                      <label for="lname">Last Name: </label>
                      <input type="string" id="lname"/>
                      
                      <label for="number">Phone Number: </label>
                      <input type="number" id="number"/>
  
                      <label for="email">Email: </label>
                      <input type="string" id="email"/>                
                    </div>
                  </div>
                }
            </div>
        </div>
    );
}

export default PropertyEvaluation;