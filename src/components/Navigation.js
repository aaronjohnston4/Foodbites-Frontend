import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <img
                    src="https://i.imgur.com/fRu07YF.png"
                />
            </Link>
            <div>FOODBITES</div>
        </nav>
    )
}


export default Navigation