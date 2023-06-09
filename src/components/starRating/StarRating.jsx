import React from 'react';
import shortid from 'shortid';
import redStarImg from '../../public/media/redStar.png';
import greyStarImg from '../../public/media/emptyStar.png';

const StarRating = ({ rating }) => {
    const starRed = Array.from({length: rating}, (v, k) => <img src={redStarImg} alt="etoile rouge" className="stars" key={shortid.generate()}/>);
    const emptyStar = Array.from({length: 5-rating}, (v, k) => <img src={greyStarImg} alt="etoile grise" className="stars" key={shortid.generate()}/>);
    return (
        <div className="rating">
            {starRed}{emptyStar}
        </div>
    );
}

export default StarRating;