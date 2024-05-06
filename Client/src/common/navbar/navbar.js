import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <div className="navbar-cointainer">
            <Link to="/">Home</Link>
            <Link to="/image-generator" >ImageGenerator</Link>
            <Link to="/history">History</Link>
        </div>
    )
}