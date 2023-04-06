// Libraires
import React from 'react';

// Composants
import Header from '../../layout/headerContainer/headerContainer';
import Background from '../../components/background/Background';
import AboutDropdownContainer from '../../layout/AboutDropdownContainer/AboutDropdownContainer';
import Footer from '../../components/footer/Footer';


// Fonction, images, variables, etc...
import backgroundAbout from '../../public/media/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg';




function About() {

  const photobackground = backgroundAbout;


  return (
    <div className="about">
      <Header />
      <div className='wrapper'>
        <Background photo={photobackground} baseline={""}/>
        <AboutDropdownContainer/>
      </div>
      <Footer />
    </div>
  );
}

export default About;