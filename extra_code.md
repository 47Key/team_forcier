//////////////////////////////////////////////////////////
///////////// getStaticProps Implementation //////////////
//////////////////////////////////////////////////////////

// export const getStaticProps = async () => {
//   const responseDef = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="$key"&limitToFirst=1`);
//   const getDataDef = await responseDef.text();
//   const parsedDataDef = JSON.parse(getDataDef);
//   const keyNameDef = Object.entries(parsedDataDef);

//   const responseWin = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Windsor"`);
//   const getDataWin = await responseWin.text();
//   const parsedDataWin = JSON.parse(getDataWin);
//   const keyNameWin = Object.entries(parsedDataWin);

//   const responseTec = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Tecumseh"`);
//   const getDataTec = await responseTec.text();
//   const parsedDataTec = JSON.parse(getDataTec);
//   const keyNameTec = Object.entries(parsedDataTec);

//   const responseEss = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Essex"`);
//   const getDataEss = await responseEss.text();
//   const parsedDataEss = JSON.parse(getDataEss);
//   const keyNameEss = Object.entries(parsedDataEss);

//   const responseLas = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Lasalle"`);
//   const getDataLas = await responseLas.text();
//   const parsedDataLas = JSON.parse(getDataLas);
//   const keyNameLas = Object.entries(parsedDataLas);

//   const responseAmh = await fetch(`https://key47-51636.firebaseio.com/Properties.json?orderBy="/records/0/Address/City"&equalTo="Amherstburg"`);
//   const getDataAmh = await responseAmh.text();
//   const parsedDataAmh = JSON.parse(getDataAmh);
//   const keyNameAmh = Object.entries(parsedDataAmh);
  
//   return {
//     props: { 
//       propertiesWin: keyNameWin,
//       propertiesTec: keyNameTec, 
//       propertiesEss: keyNameEss, 
//       propertiesLas: keyNameLas, 
//       propertiesAmh: keyNameAmh,
//       propertiesDef: keyNameDef,  
//     }
//   }
// }