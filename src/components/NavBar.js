import {NavLink} from 'react-router-dom'

function NavBar(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/toys">Toys</NavLink>
            <NavLink to="/add_toy">Add Toy</NavLink>
        </nav>
    )
}

export default NavBar;