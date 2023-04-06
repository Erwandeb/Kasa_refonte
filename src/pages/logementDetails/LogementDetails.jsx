// Libraires
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from "react-router-dom"

// Composants
import Header from '../../layout/headerContainer/headerContainer';
import Slider from '../../components/slider/Slider';
import InfosLogementContainer from '../../layout/infosLogementContainer/InfosLogmentContainer';
import LogementDropdownContainer from '../../layout/logementDropdownContainer/LogementDropdownContainer';
import Footer from '../../components/footer/Footer';

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
        <InfosLogementContainer logementData={logementData} />
        <LogementDropdownContainer logementData={logementData}/>
      </div>
      <Footer />
    </div>
  );
  
}

export default LogementDetails;
