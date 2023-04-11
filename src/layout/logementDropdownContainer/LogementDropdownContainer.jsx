import { useState } from 'react';
import Accordeon from '../../components/accordeon/Accordeon';

const Logement_dropdown_container = ({ logementData }) => {

  return (
    <div className="wrapper-logement-details">
      <div className="wrapper-container">
        <Accordeon
          titre={"Description"}
          description={logementData.description}
        />
        <Accordeon
          titre={"Equipements"}
          description={logementData.equipments.map((item) => <li key={item}>{item}</li>)}
        />
      </div>
    </div>
  );
};

export default Logement_dropdown_container;
