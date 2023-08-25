import './Header.css'

const Header = () => {
  return (
    <header>
          <img id="logo" src="../public/VolleyChampPNG.png" alt="VolleyChamp" />
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Quem Somos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header