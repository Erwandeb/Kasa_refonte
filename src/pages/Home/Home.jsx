// Libraires
import React, { useState, useEffect } from 'react';

// Composants
import Header from '../../components/container/header_container/header_container';
import Background from '../../components/fonctionnel/background/Background';
import Grid_container from '../../components/container/grid_container/Grid_container';
import Footer from '../../components/solid/footer/Footer';

// Fonction, images, variables, etc...
import backgroundHome from '../../public/media/IMG.png';



function Home() {

  const [background, setBackground] = useState(null);
  const photobackground = backgroundHome;


  useEffect(() => {
    setBackground(photobackground);
  }, []);

  
  return (
    <div className="home">
     <Header/>
      <div className='wrapper'>
        <Background photo={photobackground} baseline={"Chez vous, partout et ailleurs"}/>
        <Grid_container/> 
      </div>
      <Footer />
    </div>
  );
}

export default Home;