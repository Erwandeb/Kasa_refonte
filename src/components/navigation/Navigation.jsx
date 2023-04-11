import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <div className="navigation">
            <NavLink to ="/" activeclassname="nav-active">
                Accueil
            </NavLink>
            <NavLink to ="/a-propos" activeclassname ="nav-active">
                A propos
            </NavLink>
        </div>
    )
}

export default Navigation;