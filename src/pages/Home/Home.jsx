// Libraires
import React, { useState} from 'react';

// Composants
import Header from '../../layout/headerContainer/headerContainer';
import Background from '../../components/background/Background';
import GridContainer from '../../layout/gridContainer/GridContainer';
import Footer from '../../components/footer/Footer';

// Fonction, images, variables, etc...
import backgroundHome from '../../public/media/IMG.png';



function Home() {

  const [background, setBackground] = useState(backgroundHome);

  return (
    <div className="home">
     <Header/>
      <div className='wrapper'>
        <Background photo={background} baseline={"Chez vous, partout et ailleurs"}/>
        <GridContainer/> 
      </div>
      <Footer />
    </div>
  );
}

export default Home;