import React from 'react';
import StarRating from '../../components/starRating/StarRating';

const Infos_logement_container = ({logementData}) => {

    return(
        <div className="about-corpus">
            <div className="about-logement">
                <div className ="Logement-title-and-location">
                    <h1>{logementData.title}</h1>
                    <p>{logementData.location}</p>
                </div>
                <div className ="tags-logement">
                    {logementData.tags.map((detail) => {
                        return <p className="tags" key={`tags-${detail}`}>{detail}</p>
                    })}
                </div>
            </div>

            <div className="about-host">
                <div className="name-and-profilPicture">
                    <p key={logementData.host.name}>{logementData.host.name}</p>
                    <img key={logementData.host.picture} src={logementData.host.picture} alt ={logementData.host.picture} />
                </div>
                <div className="rating">
                    <StarRating rating={logementData.rating}/>
                </div>
            </div>
        </div>
    )
}

export default Infos_logement_container;
