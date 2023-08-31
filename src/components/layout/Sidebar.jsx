import "./Sidebar.css"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div id="sidebar">
      <Link to="/campeonatos">Campeonatos</Link>
    </div>
  )
}

export default Sidebar