import Head from 'next/head';
import NavBar from '../containers/Navbar';
import Hero from '../containers/Hero';
import FeaturedProperties from '../containers/FeaturedProperties';
import styles from '../styles/Home.module.css';
import PropertyGrid from '../containers/PropertiesGrid';
import PropertyEvaluation from '../containers/PropertyEvaluation';

export const getStaticProps = async () => {
  const responseDef = await fetch(`https://teamforcier-default-rtdb.firebaseio.com/IndividualProperty.json?orderBy="$key"&limitToFirst=10`);
  const getDataDef = await responseDef.text();
  const parsedDataDef = JSON.parse(getDataDef);
  const keyNameDef = Object.entries(parsedDataDef);

  const responseWin = await fetch(`https://teamforcier-default-rtdb.firebaseio.com/PropertyGrid.json?orderBy="city"&equalTo="Windsor"`);
  const getDataWin = await responseWin.text();
  const parsedDataWin = JSON.parse(getDataWin);
  const keyNameWin = Object.entries(parsedDataWin);

  const responseTec = await fetch(`https://teamforcier-default-rtdb.firebaseio.com/PropertyGrid.json?orderBy="city"&equalTo="Tecumseh"`);
  const getDataTec = await responseTec.text();
  const parsedDataTec = JSON.parse(getDataTec);
  const keyNameTec = Object.entries(parsedDataTec);

  const responseEss = await fetch(`https://teamforcier-default-rtdb.firebaseio.com/PropertyGrid.json?orderBy="city"&equalTo="Essex"`);
  const getDataEss = await responseEss.text();
  const parsedDataEss = JSON.parse(getDataEss);
  const keyNameEss = Object.entries(parsedDataEss);

  const responseLas = await fetch(`https://teamforcier-default-rtdb.firebaseio.com/PropertyGrid.json?orderBy="city"&equalTo="Lasalle"`);
  const getDataLas = await responseLas.text();
  const parsedDataLas = JSON.parse(getDataLas);
  const keyNameLas = Object.entries(parsedDataLas);

  const responseAmh = await fetch(`https://teamforcier-default-rtdb.firebaseio.com/PropertyGrid.json?orderBy="city"&equalTo="Amherstburg"`);
  const getDataAmh = await responseAmh.text();
  const parsedDataAmh = JSON.parse(getDataAmh);
  const keyNameAmh = Object.entries(parsedDataAmh);
  
  return {
    props: { 
      propertiesWin: keyNameWin,
      propertiesTec: keyNameTec, 
      propertiesEss: keyNameEss, 
      propertiesLas: keyNameLas, 
      propertiesAmh: keyNameAmh,
      propertiesDef: keyNameDef,  
    }
  }
}
export default function Home({ propertiesWin, propertiesTec, propertiesEss, propertiesLas, propertiesAmh, propertiesDef }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Team Forcier</title>
        <meta name="description" content="Team Forcier, Real Estate Specialists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <FeaturedProperties loading="lazy" properties={propertiesDef} />
      <PropertyEvaluation />
      <PropertyGrid loading="lazy" propertiesDef={propertiesDef} propertiesWin={propertiesWin} propertiesTec={propertiesTec} propertiesLas={propertiesLas} propertiesAmh={propertiesAmh} propertiesEss={propertiesEss} />

      <footer className={styles.footer}>
        <h1>Work by Key the Dev</h1>
      </footer>
    </div>
  )
}

