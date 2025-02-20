import './Navbar.css';
import { AccountCircle, ArrowDropDown } from "@mui/icons-material/";
import { IconButton } from "@mui/material/";
// import logo from '../../../../assets/images/loogo.png';

export default function Navbar() {
    return (
		<div className="navbar">

			<div className="left__nav">

				<img src='https://i.ibb.co/b1f6hsj/logo.png' alt="" width={ 60 } />

			</div>
			<div className="middle__nav">
                
				<h1>Admin Panel</h1>
                
			</div>
			<div className="right__nav">
                
				<IconButton className="acc__btn">

					<AccountCircle sx={{ fontSize: 26 }} />
					<ArrowDropDown sx={{ fontSize: 16 }} />

				</IconButton>
				<p>Admin</p>
                
			</div>

		</div>
	);
}
