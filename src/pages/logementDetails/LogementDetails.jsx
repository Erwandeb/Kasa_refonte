// Libraires
import React, { useState, useEffect } from 'react';

// Composants
import Header from '../../components/container/header_container/header_container';
import Slider from '../../components/fonctionnel/slider/Slider';
import Logement_dropdown_container from '../../components/container/logement_dropdown_container/LogementDropdown_container';
import Infos_logement_container from '../../components/container/infos_logement_container/Infos_logment_container';
import Footer from '../../components/solid/footer/Footer';

// Fonction, images, variables, etc...
import { getData } from '../../api';






function LogementDetails(props) {

  const [logementData, setLogementData] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = props.match.params;

  console.log(id)

    useEffect(() => {
    const { id } = props.match.params;
    fetch(process.env.PUBLIC_URL + '/annonces.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLogementData(result.find((annonce) => annonce.id === id));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [props.match.params]);
 
  const fetchingData = async () => {
    try {
      const response = await getData();
      const result = response.data;
      setLogementData(result.find((annonce) => annonce.id === id));
    } catch (err) {
      console.log(err.response || err.message);
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  };
  
  useEffect(() => {
    fetchingData();
  }, [props.match.params]);


  if (error) {
    return <div>Erreur !</div>;
  } 
  if (!isLoaded) {
    return <div className='chargement'>Chargement…</div>;
  } 
  return (
    <div className="home">
      <Header />
      <Slider logementData={logementData.photos} />
      <Infos_logement_container logementData={logementData} />
      <Logement_dropdown_container logementData={logementData}/>
      <Footer />
    </div>
  );
  
}

export default LogementDetails;
