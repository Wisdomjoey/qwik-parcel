import './Sidebar.css';
import {
	MenuOpen
} from "@mui/icons-material/";
import {
	IconButton
} from "@mui/material/";

export default function Sidebar() {
    return (
		<div className="sidebar">
			<div className="sidebar__nav">
				<h1>Side Nav</h1>
				<IconButton>
					<MenuOpen
						sx={{ color: "rgb(var(--primary-color))", fontSize: 33 }}
					/>
				</IconButton>
			</div>
		</div>
	);
}
