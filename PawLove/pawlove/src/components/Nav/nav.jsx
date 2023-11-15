
import './nav.css'; // Make sure this path is correct

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1700031389/paw-love-high-resolution-logo-transparent_qmfrgw.png" alt="Paw Love Logo" height="100" />
                    </a>

                    
                    <div className="mobile-only-links d-lg-none">
                        <a className="nav-link" href="#">Login</a>
                        <a className="nav-link" href="#">Register</a>
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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Other navigation items */}
                        </ul>
                        <form className="d-flex" role="search">
                            {/* Search form */}
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
