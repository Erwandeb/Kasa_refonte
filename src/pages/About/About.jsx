// Libraires
import React from 'react';

// Composants
import Header from '../../components/container/header_container/header_container';
import Background from '../../components/fonctionnel/background/Background';
import About_dropdown_container from '../../components/container/about_dropdown_container/AboutDropdown_container';
import Footer from '../../components/solid/footer/Footer';


// Fonction, images, variables, etc...
import backgroundAbout from '../../public/media/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg';




function About() {

  const photobackground = backgroundAbout;


  return (
    <div className="about">
      <Header />
      <div className='wrapper'>
        <Background photo={photobackground} baseline={""}/>
        <About_dropdown_container/>
      </div>
      <Footer />
    </div>
  );
}

export default About;