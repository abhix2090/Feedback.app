import { NavLink } from "react-router-dom";


export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">

                <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
                <i className="bi bi-chat-right-dots me-2"></i>
                 Feedback
                </NavLink>

                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/events">
                                Events
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feedback">
                                Feedback
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}