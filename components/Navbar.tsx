/** @jsx h */
import {h} from 'preact';

interface Props {
    home: boolean;
}

export function Navbar(props: Props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light"
             data-navbar-on-scroll="data-navbar-on-scroll">
            <div className="container">
                <div className="navbar-brand">
                    <img className="d-inline-block align-top img-fluid" src="/logo-icon.webp" alt="" height={'50'}
                         width={'50'}/>
                </div>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {(props.home) ?
                    <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
                         id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <a className="nav-link fw-medium active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link fw-medium" href="#action-axes">Ejes de acción</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link fw-medium" href="#about">Nosotros</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link fw-medium" href="#actions">Nuestras acciones</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <a href={'#contacts'} className="btn btn-lg btn-primary order-0"
                               type="submit">Contáctenos</a>
                        </form>
                    </div> :
                    <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
                         id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <a className="nav-link fw-medium active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                    </div>}
            </div>
        </nav>
    );
}