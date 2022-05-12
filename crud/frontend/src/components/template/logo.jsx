import './logo.css'
import Logo from '../../assets/imgs/sera.png'
import { Link } from 'react-router-dom'

export default props =>
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
        </Link>
    </aside>