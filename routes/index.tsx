import {asset} from '$fresh/runtime.ts';
import {Navbar} from '../components/Navbar.tsx';
import {Handlers, PageProps} from '$fresh/server.ts';
import {Slice} from '../components/Slice.tsx';
import {Comment} from '../models/Comment.ts';
import {load} from "https://deno.land/std/dotenv/mod.ts";

const env = await load();

export const handler: Handlers<Comment[][] | null> = {
    async GET(_, ctx) {
        const resp = await fetch(env['API_BASE_URL']);
        if (resp.status !== 200) {
            return ctx.render(null);
        }
        const response = await resp.json();
        const chunkedComments: Comment[][] = [];
        for (let i = 0; i < response.length; i += 3) {
            const chunk = response.slice(i, i + 3);
            chunkedComments.push(chunk);
        }
        return ctx.render(chunkedComments);
    },
};

export default function Home({data}: PageProps<Comment[][] | null>) {
    return (
        <main className={`main`} id="top">
            <Navbar home={true}/>
            <section className="py-0" id="home">
                <div className="bg-holder d-none d-md-block" loading={'lazy'}
                     style={`background-image:url(${asset('/logo-icon.webp')});background-position:right top;background-size:contain;`}>
                </div>

                <div className="container">
                    <div className="row align-items-center min-vh-75 min-vh-lg-100">
                        <div className="col-md-7 col-lg-6 col-xxl-5 py-6 text-sm-start text-center">
                            <h1 className="fw-bold mb-4 mt-6 mb-sm-4 lh-sm fs-4 fs-lg-5 fs-xl-6">Fundación Gente<br
                                className="d-block d-lg-block"/>Social Activa</h1>
                            <p className="mb-4 fs-1">Nuestro objetivo es impulsar proyectos sociales sostenibles en el
                                tiempo, apalancando los recursos que sean necesarios y generando las estrategias
                                requeridas para su implementación y sustento, mejorando la calidad de vida de las
                                poblaciones menos favorecidas.</p>
                            <a className="btn btn-lg btn-success" href="#action-axes" role="button">Ver más</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" id="action-axes">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto text-center mb-3">
                            <h1 className="mb-3 fw-bold fs-3 fs-lg-5 lh-sm mb-3">Ejes de acción</h1>
                        </div>
                    </div>
                    <div className="row flex-center h-100">
                        <div className="col-xl-9">
                            <div className="row">
                                <div className="col-md-4 mb-5">
                                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                        <div className="text-center text-md-start card-hover">
                                            <img loading="lazy" className="ps-3 icons" src="/images/icons/growth.svg"
                                                 height={'60'}
                                                 alt=""/>
                                            <div className="card-body">
                                                <h6 className="fw-bold fs-1 heading-color">Impulsando nuestro
                                                    crecimiento</h6>
                                                <p className="mt-3 mb-md-0 mb-lg-2">Mediante la estructuración, gestión
                                                    de recursos e implementación de proyectos, que surjan al interior de
                                                    la Fundación y se logre el bienestar de nuestra población
                                                    objetivo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                        <div className="text-center text-md-start card-hover">
                                            <img loading="lazy" className="ps-3 icons" src="/images/icons/community.svg"
                                                 height={'60'}
                                                 alt=""/>
                                            <div className="card-body">
                                                <h6 className="fw-bold fs-1 heading-color">Apoyada y articulada con
                                                    otras Fundaciones</h6>
                                                <p className="mt-3 mb-md-0 mb-lg-2">A través de la ejecución de
                                                    convenios
                                                    y asociaciones, de tal manera que en forma conjunta y articulada se
                                                    logren concebir proyectos benéficos para la población objetivo. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                        <div className="text-center text-md-start card-hover">
                                            <img loading="lazy" className="ps-3 icons" src="/images/icons/company.svg"
                                                 height={'60'}
                                                 alt=""/>
                                            <div className="card-body">
                                                <h6 className="fw-bold fs-1 heading-color">Fomentando iniciativas
                                                    empresariales</h6>
                                                <p className="mt-3 mb-md-0 mb-lg-2">A través del apoyo organizacional a
                                                    las microempresas, para optimizar su funcionamiento, así como
                                                    fomentando dentro de la población objetivo la creación de nuevas
                                                    microempresas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 mb-3">
                            <div className="row">
                                <div className="col-lg-9 mb-3">
                                    <h1 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Nosotros</h1>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="fw-bold fs-1 heading-color">Misión</h2>
                                            <p className="mt-3 mb-md-0 mb-lg-2">Gente Social Activa es una fundación
                                                encausada a diseñar, plantear e implementar proyectos sociales,
                                                enfocados al mejoramiento de la calidad de vida de madres cabeza de
                                                hogar, adultos mayores desamparados y niños en condiciones de miseria,
                                                apalancando recursos para el desarrollo integral y sostenible de estas
                                                comunidades menos favorecidas.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="fw-bold fs-1 heading-color">Visión</h2>
                                            <p className="mt-3 mb-md-0 mb-lg-2">Consolidar en el año 2013, Gente Social
                                                Activa como una Fundación que impulsa e implementa proyectos sociales
                                                sostenibles dentro de la población menos favorecida de la ciudad de
                                                Tunja, mejorando su calidad de vida.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'p-0'} id={'actions'}>
                <div className="bg-holder"
                     style="background: #5C91AF;">
                </div>
                <div className="container-lg">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-9 col-xl-5 text-center pt-8">
                            <h1 className="fw-bold fs-3 fs-xxl-5 lh-sm mb-3 text-white">Conoce nuestras acciones</h1>
                            <p className="mb-5 text-white">A continuación verás una pequeña muestra de lo que
                                hacemos</p>
                        </div>
                        <div className="col-sm-9 col-md-12 col-xxl-9">
                            <div className="theme-tab">
                                <ul className="nav justify-content-between">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold active"
                                           href="#bootstrap-tab1"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab1"
                                           id="tab-1">
                                            <span className="nav-item-circle">01</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold" href="#bootstrap-tab2"
                                           data-bs-toggle="tab" data-bs-target="#tab2" id="tab-2">
                                            <span className="nav-item-circle">02</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab3"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab3"
                                           id="tab-3">
                                            <span className="nav-item-circle">03</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab4"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab4"
                                           id="tab-4">
                                            <span className="nav-item-circle">04</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab5"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab5"
                                           id="tab-5">
                                            <span className="nav-item-circle">05</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab6"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab6"
                                           id="tab-6">
                                            <span className="nav-item-circle">06</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab7"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab7"
                                           id="tab-7">
                                            <span className="nav-item-circle">07</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab8"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab8"
                                           id="tab-8">
                                            <span className="nav-item-circle">08</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab9"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab9"
                                           id="tab-9">
                                            <span className="nav-item-circle">09</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab10"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab10"
                                           id="tab-10">
                                            <span className="nav-item-circle">10</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab11"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab11"
                                           id="tab-11">
                                            <span className="nav-item-circle">11</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab12"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab12"
                                           id="tab-12">
                                            <span className="nav-item-circle">12</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab13"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab13"
                                           id="tab-13">
                                            <span className="nav-item-circle">13</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link fw-semi-bold"
                                           href="#bootstrap-tab14"
                                           data-bs-toggle="tab"
                                           data-bs-target="#tab14"
                                           id="tab-14">
                                            <span className="nav-item-circle">14</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade active show" id="tab1" role="tabpanel"
                                         aria-labelledby="tab-1">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/1.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel"
                                         aria-labelledby="tab-2">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-25 w-lg-25"
                                                     src="/images/gallery/2.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab-3">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-25 w-lg-25"
                                                     src="/images/gallery/3.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab-4">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/4.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab-5">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/5.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab6" role="tabpanel" aria-labelledby="tab-6">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/6.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab7" role="tabpanel" aria-labelledby="tab-7">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/7.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab8" role="tabpanel" aria-labelledby="tab-8">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/8.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab9" role="tabpanel" aria-labelledby="tab-9">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/9.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab10" role="tabpanel" aria-labelledby="tab-10">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/10.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab11" role="tabpanel" aria-labelledby="tab-11">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/11.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab12" role="tabpanel" aria-labelledby="tab-12">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/12.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab13" role="tabpanel" aria-labelledby="tab-13">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/13.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab14" role="tabpanel" aria-labelledby="tab-14">
                                        <div className="my-6">
                                            <div className="text-center w-100 mb-5">
                                                <img loading="lazy" className="br-20 w-100 w-md-75 w-lg-75"
                                                     src="/images/gallery/14.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-8 pb-4" id="testimonial">
                <div className="container-lg">
                    <div className="row flex-center">
                        <div className="col-12 col-lg-10 col-xl-12">
                            <h1 className="fs-3 fs-lg-4 fw-bold lh-sm">Comentarios</h1>
                        </div>
                        <div className="carousel slide pt-3" id="carouselExampleDark" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {!data || data.length == 0 ? <p>Aún no hay comentarios</p> : <Slice data={data}/>}
                            </div>
                            <div className="row px-3 px-sm-6 px-md-0 px-lg-5 px-xl-4">
                                <div className="col-12 position-relative">
                                    <a className="carousel-control-prev" href="#carouselExampleDark" role="button"
                                       data-bs-slide="prev">
                                        <span className="mx-2" aria-hidden="true">Prev</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleDark" role="button"
                                       data-bs-slide="next">
                                        <span className="mx-2" aria-hidden="true">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="z-index-1 cta">
                <div className="container">
                    <div className="row flex-center">
                        <div className="col-12">
                            <div className="card shadow h-100 py-5">
                                <div className="card-body text-center">
                                    <h1 className="fw-semi-bold mb-4">Compártenos tu <span
                                        className="text-info">opinión</span>
                                    </h1>
                                    <a className="btn btn-lg btn-success px-6" href="/comments" role="button">Comenta
                                        aquí</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-0" id="contact">
                <div className="bg-holder"
                     style={`background-image:url(${asset('/images/illustrations/footer-bg.png')});background-position:center;background-size:cover;`}>
                </div>

                <div className="container">
                    <div className="row justify-content-lg-between min-vh-75" style="padding-top:21rem">
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="mb-3 text-1000 fw-semi-bold">Fundación Gente Social Activa</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-3">
                                    <a className="text-700 text-decoration-none" href="#home">Home</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-700 text-decoration-none" href="#action-axes">Ejes de acción</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-700 text-decoration-none" href="#about">Nosotros</a>
                                </li>
                                <li className="mb-3">
                                    <a className="text-700 text-decoration-none" href="#actions">Nuestras acciones</a>
                                </li>
                            </ul>
                        </div>
                        <div id={'contacts'} className="col-12 col-lg-auto mb-3">
                            <div className="card bg-success">
                                <div className="card-body p-sm-4">
                                    <h4 className="mb-4 text-white fw-bold">Información de contacto</h4>
                                    <p className="mb-2 text-white">Carrera 3 Este 11 -20 – Barrio San Antonio</p>
                                    <p className="mb-2 text-white">Email: <span
                                        className="text-white fs--1 fs-sm-1">fundaciongentesocialactiva@gmail.com</span>
                                    </p>
                                    <p className="mb-2 text-white">Celular: <span
                                        className="text-white fs--1 fs-sm-1">3188725374</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="text-300 mb-0"/>
                    <div className="row flex-center py-5">
                        <div className="col-12 col-sm-8 col-md-6 text-center text-md-start">
                            <a className="text-decoration-none" href="#home">
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
