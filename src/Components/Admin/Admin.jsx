import './Admin.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

export default function Admin() {
    return (
        <div className="admin">

            <div className="side__content">

                <Sidebar />

            </div>
            <div className="main__content">

                <Navbar />

            </div>

        </div>
    )
}
