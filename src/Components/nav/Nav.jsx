import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './Nav.scss';
import Logo from './assets/logo.png'

export default function Nav() {
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <div className="tabs">
                <Link to='/'>
                    home
                </Link>
                <Link to='/contact'>
                    contact
                </Link>
            </div>
        </nav>

    )
}