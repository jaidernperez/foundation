import {Navbar} from '../components/Navbar.tsx';

export default function Resources() {
    return (
        <main className={'main d-flex flex-column min-vh-100'} id={'top'}>
            <Navbar home={false}/>

            <section className={'mt-4 container'}>
                <h1 className={'fw-bold mb-4 text-center'}>Documentos Legales</h1>
                <ul>
                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/ACTA ASAMBLEA 2023.pdf">ACTA ASAMBLEA 2023.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/CERTIFICADO CAMARA DE COMERCIO.pdf">CERTIFICADO CAMARA DE COMERCIO.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/CERTIFICADO CUMPLIMIENTO DE REQUISITOS ART.364-5.pdf">CERTIFICADO CUMPLIMIENTO DE REQUISITOS ART.364-5.pdf</a></li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/CERTIFICADO REPRESENTANTE LEGAL ART.364-3.pdf">CERTIFICADO REPRESENTANTE LEGAL ART.364-3.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/DICTAMEN REVISOR FISCAL 2023.pdf">DICTAMEN REVISOR FISCAL 2023.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/ESTADOS FINANCIEROS 2022.pdf">ESTADOS FINANCIEROS 2022.pdf</a>
                    </li>

                </ul>
            </section>

            <section className="py-0 mt-auto">
                <div className="container">
                    <hr className="text-300 mb-0"/>
                    <div className="row flex-center py-5">
                        <div className="col-12 col-sm-8 col-md-6 text-center text-md-start">
                            <a className="text-decoration-none" href="/">
                                <img loading="lazy" className="d-inline-block align-top img-fluid" src="/logo-icon.webp"
                                     alt="" width={'40'} height={'40'}/>
                            </a>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6">
                            <p className="fs--1 text-dark my-2 text-center text-md-end">&copy; Copyright Fundación Gente
                                Social Activa &nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}