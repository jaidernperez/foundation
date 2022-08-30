/** @jsx h */
import {h} from 'preact';
import {Navbar} from '../components/Navbar.tsx';

export default function Resources() {
    return (
        <main className={'main d-flex flex-column min-vh-100'} id={'top'}>
            <Navbar home={false}/>

            <section className={'mt-4 container'}>
                <h1 className={'fw-bold mb-4 text-center'}>Documentos Legales</h1>
                <ul>
                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/Financieros.pdf">Estados financieros 2021</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/REVISOR_FISCAL.pdf">Dictamen 2021 Revisor Fiscal</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/REPRESENTANTE_LEGAL.pdf">Certificado Representante Legal 364-3</a></li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/CERTIFICADO_DE_CUMPLIMIENTO.pdf">Certificado Cumplimiento Requisitos Art 364-5</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/CAMARA_COMERCIO.pdf">Certificado Cámara de Comercio</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/CAMARA_ACTUALIZADO.pdf">Certificado Cámara de Comercio Actualizado</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/ACTA_ASAMBLEA.pdf">Acta de Asamblea 2022</a>
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