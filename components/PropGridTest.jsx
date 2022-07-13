import React, { useEffect, useState } from 'react';
import PropertiesByCity from './pull-city';
import PropertiesDefault from './pull_data';
import styles from '../styles/Properties.module.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'

export default function PropertyGridTest({ propertiesWin, propertiesTec, propertiesLas, propertiesAmh, propertiesEss, propertiesDef }) {
  const [city, setCity] = useState('Default');

  const [defaultContentVisible, setDefaultContentVisible] = useState(true);
  const [windsorContentVisible, setWindsorContentVisible] = useState(false);
  const [amherstburgContentVisible, setAmherstburgContentVisible] = useState(false);
  const [lasalleContentVisible, setLasalleContentVisible] = useState(false);
  const [tecumsehContentVisible, setTecumsehContentVisible] = useState(false);
  const [essexContentVisible, setEssexContentVisible] = useState(false);

  useEffect(() => {
    city === 0 ? setDefaultContentVisible(true) : setDefaultContentVisible(false);
    city === 1 ? setWindsorContentVisible(true) : setWindsorContentVisible(false);
    city === 2 ? setTecumsehContentVisible(true) : setTecumsehContentVisible(false);
    city === 3 ? setLasalleContentVisible(true) : setLasalleContentVisible(false);
    city === 4 ? setAmherstburgContentVisible(true) : setAmherstburgContentVisible(false);
    city === 5 ? setEssexContentVisible(true) : setEssexContentVisible(false);
  }, [city]);

//   const handleOnChange = (e) => {
//     setCity(e.target.value);
//   };

  return (
    <div className={styles.propgridwrap}>
      <Tabs onChange={(index) => setCity(index)}>
        <TabList>
          <Tab>All</Tab>
          <Tab>Windsor</Tab>
          <Tab>Tecumseh</Tab>
          <Tab>Lasalle</Tab>
          <Tab>Amherstburg</Tab>
          <Tab>Essex</Tab>
        </TabList>
        <TabPanels>
          {defaultContentVisible && 
            <TabPanel>
              <PropertiesDefault properties={propertiesDef} />
            </TabPanel>
          }
          {windsorContentVisible && 
            <TabPanel>
              <PropertiesDefault properties={propertiesWin} />
            </TabPanel>
          }
          {tecumsehContentVisible &&
            <TabPanel>
              <PropertiesDefault properties={propertiesTec} />
            </TabPanel>
          }
          {lasalleContentVisible && 
            <TabPanel>
              <PropertiesDefault properties={propertiesLas} />
            </TabPanel>
          }
          {amherstburgContentVisible && 
            <TabPanel>
              <PropertiesDefault properties={propertiesAmh} />
            </TabPanel>
          }
          {essexContentVisible && 
            <TabPanel>
              <PropertiesDefault properties={propertiesEss} />
            </TabPanel>
          }
        </TabPanels>
      </Tabs>
    </div>
    );
  }