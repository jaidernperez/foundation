import {Navbar} from '../components/Navbar.tsx';

export default function Resources() {
    return (
        <main className={'main d-flex flex-column min-vh-100'} id={'top'}>
            <Navbar home={false}/>

            <section className={'mt-4 container'}>
                <h1 className={'fw-bold mb-4 text-center'}>Documentos Legales</h1>
                <ul>
                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium"
                           href="/resources/1. Estados Financieros 2023 Dictaminado y Aprobado.pdf">1. Estados
                            Financieros 2023 Dictaminado y Aprobado.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium"
                           href="/resources/2. Certificado de cumplimiento de requisitos.pdf">2. Certificado de
                            cumplimiento de requisitos.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/3. Acta de constitución.pdf">3. Acta de
                            constitución.pdf</a></li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium"
                           href="/resources/4. Certificado de existencia y representación legal.pdf">4. Certificado de
                            existencia y representación legal.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium"
                           href="/resources/5. Acta Asamblea autorización calificación.pdf">5. Acta Asamblea
                            autorización calificación.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/6. Estatutos 2024.pdf">6. Estatutos
                            2024.pdf</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link fw-medium" href="/resources/7. Certificado representante legal antecedentes judiciales.pdf">
                            7. Certificado representante legal antecedentes judiciales.pdf</a>
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