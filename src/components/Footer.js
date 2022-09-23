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
            <Link to="/">FACEBOOK</Link>
            <Link to="/">INSTAGRAM</Link>
            <Link to="/">MYSPACE</Link>
            <Link to="/">TIKTOK</Link>
        </nav>
    )
}


export default Footer