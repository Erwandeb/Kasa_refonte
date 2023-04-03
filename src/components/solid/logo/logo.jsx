import { Link } from 'react-router-dom';
import logo from '../../../public/media/logo_kasa.svg';

const Logo = () => {
    return(
        <div className="logo">
            <Link to={`/`}> <img src={logo} alt="logo de kasa"/></Link>
        </div>
    )
}

export default Logo;