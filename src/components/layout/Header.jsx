import './Header.css'
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
          <img id="logo" src="../public/VolleyChampPNG.png" alt="VolleyChamp" />
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header