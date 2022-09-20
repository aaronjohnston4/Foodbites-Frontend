import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <img
                    alt="plate of pasta" src="https://i.imgur.com/fRu07YF.png"
                />
            </Link>
            <Link to="/">FOODBITES</Link>
            <Link to="/post">POST</Link>
        </nav>
    )
}


export default Navigation