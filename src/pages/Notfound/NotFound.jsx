// Libraires
import React from 'react';
import { Link } from 'react-router-dom';

// Composants
import Footer from '../../components/footer/Footer';
import Header from '../../layout/headerContainer/headerContainer';

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