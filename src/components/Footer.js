import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <img
                    alt="plate of pasta" src="https://i.imgur.com/fRu07YF.png"
                />
            </Link>
            <Link to="/">FOODBITES</Link>
            <Link to="/post">FACEBOOK</Link>
            <Link to="/post">INSTAGRAM</Link>
            <Link to="/post">MYSPACE</Link>
            <Link to="/post">TIKTOK</Link>
        </nav>
    )
}


export default Footer