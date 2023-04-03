// Libraires
import React from 'react';
import { Link } from 'react-router-dom';

// Composants
import Logo from '../../components/solid/logo/logo';
import Navigation from '../../components/solid/navigation/Navigation'
import Footer from '../../components/solid/footer/Footer';
import Header from '../../components/container/header_container/header_container';

// Fonction, images, variables, etc...





function NotFound() {
  return (
    <div className="notFound">
      <Header />
      <div className="notFound-error">
        <div className="container-notFound-text">
          <h1>404</h1>
          <p>Oups ! La page que vous demandez n'existe pas.</p>
          <Link to={`/`}> Retournez sur la page d'accueil </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;