import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  //it will refer to nav tag
	const navRef = useRef();

  //take the current element, each time the function is called we will add or remove the classlist from navtag
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className = "logo">
			<Link to="/">Home</Link>
			</div>
			<nav ref={navRef}>
				<CustomLink to ="/History">Favorites</CustomLink>
				<CustomLink to ="/About">Project Info</CustomLink>
				<CustomLink to ="/Contact">About Us</CustomLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
	
	
	function CustomLink({ to, children, ...props }) {
		const resolvedPath = useResolvedPath(to)
		//checks if the path is the exact same. Once it is it would be set to isActive
		const isActive = useMatch({ path: resolvedPath.pathname, end: true })
		return (
		  <li className={isActive ? "active" : ""} onClick={showNavbar}>
			<Link to={to} {...props}>
			  {children}
			</Link>
		  </li>
		)
	}
}