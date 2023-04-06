import { useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import { getData } from '../../api';


function Grid_container() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [logements, setLogements] = useState([]);


  const fetchingData = async () => {
    try {
      const response = await getData();
      setLogements(response.data);
    } catch (err) {
      console.log(err.response || err.message);
    }
    finally{
      setIsLoaded(true);
    }
  };
  
  useEffect(() => {
    fetchingData();
  },[logements]);

  if(error) {
    return <div>Erreur !</div>;
  } 
  if(!isLoaded) {
    return <div className='chargement'>Chargement…</div>;
  }  

  return (
    <div className="logement-list">
      {logements.map(logement => (
        <Card
          logement={logement}
          key={logement.id}
        />
      ))}
    </div>
  );
  
}

export default Grid_container;
