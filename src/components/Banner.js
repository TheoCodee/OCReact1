import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner() {

    const title = 'WestGorgeSkateBoards'

    return (
        <div className='wg-banner'>
                <img src={logo} alt='logo feuille' className='wg-logo'></img>
                <h1 className='wg-title'>{title}</h1>
        </div>
    )
}

export default Banner