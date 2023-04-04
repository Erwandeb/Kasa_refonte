// Libraires
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from "react-router-dom"

// Composants
import Header from '../../components/container/header_container/header_container';
import Slider from '../../components/fonctionnel/slider/Slider';
import Logement_dropdown_container from '../../components/container/logement_dropdown_container/LogementDropdown_container';
import Infos_logement_container from '../../components/container/infos_logement_container/Infos_logment_container';
import Footer from '../../components/solid/footer/Footer';

// Fonction, images, variables, etc...
import { getData } from '../../api';


function LogementDetails(props) {

  const [logementData, setLogementData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchingData = async () => {
    try {
      const response = await getData();
      const result = response.data;
      setLogementData(result.find((annonce) => annonce.id === id));

      if(result.find((annonce) => annonce.id === id) === undefined ){
        navigate("/404");
      }
    } catch (err) {
      console.log(err.response || err.message);
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchingData();
  }, [id]);


  if (error) {
    return <div>Erreur !</div>;
  } 
  if (!isLoaded) {
    return <div className='chargement'>Chargement…</div>;
  } 
  return (
    <div className="home">
      <Header />
      <div className='wrapper'>
        <Slider logementData={logementData} />
        <Infos_logement_container logementData={logementData} />
        <Logement_dropdown_container logementData={logementData}/>
      </div>
      <Footer />
    </div>
  );
  
}

export default LogementDetails;
