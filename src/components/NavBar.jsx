import { Link } from 'react-router'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/music'>Music</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
