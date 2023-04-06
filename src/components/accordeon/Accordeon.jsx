import React, { useState } from 'react';
import arrow from '../../public/media/Arrow.png';

function Accordeon({titre, description}) {
  const [isOpened, setIsOpened] = useState(false);

  function renderDescription() {
    if (isOpened) {
      return (
        <div>
          <p className="description-text-accordeon">{description}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="accordeon">
      <div className="about-Details" onClick={() => setIsOpened(!isOpened)}>
        <p>{titre}</p>
        <img
          src={arrow}
          alt="fleche tournante"
          className={isOpened ? 'opened' : ''}
        />
      </div>
      {renderDescription()}
    </div>
  );
}

export default Accordeon;
