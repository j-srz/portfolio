
import { Link } from "react-router-dom";

import './Navbar.css'

export const Navbar = () => {
  return (

	<nav>
		<div>
			<img src="/public/icon.svg" alt="" />
		</div>
		<Link to={'/contact'} >Contact</Link>
	</nav>
  )
}
