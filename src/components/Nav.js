import classes from '../styles/Nav.module.css'
import logo from '../assets/images/logo.png'
import Account from './Account'
import { Link } from 'react-router-dom'


export default function Nav(){
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                <Link to="/quize-app" className={classes.brand}>
                    <img src={logo} alt="my logo" />
                    <h3>React Quiz App</h3>
                </Link>
                </li>
            </ul>
           <Account />
        </nav>
    )
}