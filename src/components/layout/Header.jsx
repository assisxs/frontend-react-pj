import './Header.css'
import { NavLink } from "react-router-dom"
import Button from '../ui/Button'

const Header = () => {
  return (
    <header>
          <img id="logo" src="../VolleyChampPNG.png" alt="VolleyChamp" />
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
                <li><Button variant="primary">Login</Button></li>
                <li><Button variant="secondary">Cadastre-se</Button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header