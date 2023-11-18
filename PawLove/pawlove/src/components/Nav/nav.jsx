import "./nav.css";
import { NavLink } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebaseConfig';


function Header() {
const { currentUser } = useAuth();
const navigate = useNavigate();
const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<NavLink to="./" className="navbar-brand" href="./hero">
						<img
							src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1700031389/paw-love-high-resolution-logo-transparent_qmfrgw.png"
							alt="Paw Love Logo"
							height="100"
						/>
					</NavLink>

					<div className="mobile-only-links d-lg-none">
                        {currentUser ? (
                            <> <span className="custom-link active me-2">
                                {currentUser.email}
                            </span><button onClick={handleLogout} className="btn p-0" title="Logout">
                  <AiOutlineLogout size={20} style={{ color: '#f139c8ff' }}/>
                </button></>
                        ) : (
                            <>
                                <NavLink to="/login" className="custom-link" activeClassName="active">
                                    Login
                                </NavLink>
                                <NavLink to="/register" className="custom-link" activeClassName="active">
                                    Register
                                </NavLink>
                            </>
                        )}
                    </div>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
						<form className="d-flex" role="search"></form>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
