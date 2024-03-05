import { Link, NavLink } from 'react-router-dom'
import './Menu.css'

function Menu(){
    return(
        <div className="radio-inputs">
        <NavLink to='/' className="radio" >
          {/* <input type="radio" name="radio" defaultChecked='checked'/> */}
          <span className="name">Home</span>
        </NavLink>
        <NavLink to='/work' className="radio">
          {/* <input type="radio" name="radio"/> */}
          <span className="name">Work</span>
        </NavLink>
        <NavLink to='/about' className="radio">
          {/* <input type="radio" name="radio"/> */}
          <span className="name">About</span>
        </NavLink>
        <a href='mailto:kerolossafwat121@gmail.com' className="radio">
          {/* <input type="radio" name="radio"/> */}
          <span className="name">Contact Me</span>
        </a>
      </div>
    )
}
export default Menu