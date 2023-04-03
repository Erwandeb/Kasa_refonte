import { Link } from 'react-router-dom';

const Card = ({ logement }) => {
    return (
        <Link
            className="appartement"
            key={`logement-${logement.id}`}
            to={`/logement/${logement.id}`}
            alt={logement.title}
            style={{ background: `url(${logement.cover})` }}
        >
        <span className='titre'>{logement.title}</span>     
        </Link>
    );
};

export default Card;