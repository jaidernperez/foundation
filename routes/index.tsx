/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
      <main className={`main`} id="top">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light"
               data-navbar-on-scroll="data-navbar-on-scroll">
              <div className="container">
                  <a className="navbar-brand" href="#home">
                      <img className="d-inline-block align-top img-fluid" src="/logo-icon.png" alt="" height={'50'} width={'50'}/>
                  </a>
                  <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item px-2">
                              <a className="nav-link fw-medium active" aria-current="page" href="#home">Home</a>
                          </li>
                          <li className="nav-item px-2">
                              <a className="nav-link fw-medium" href="#action-axes">Ejes de acción</a>
                          </li>
                          <li className="nav-item px-2">
                              <a className="nav-link fw-medium" href="#action-axes">Nosotros</a>
                          </li>
                          <li className="nav-item px-2">
                              <a className="nav-link fw-medium" href="#actions">Nuestras acciones</a>
                          </li>
                      </ul>
                      <form className="d-flex">
                          <a href={'#contacts'} className="btn btn-lg btn-primary order-0" type="submit">Contáctenos</a>
                      </form>
                  </div>
              </div>
          </nav>
          <section className="py-0" id="home">
              <div className="bg-holder d-none d-md-block"
                   style={`background-image:url(${asset("/images/illustrations/welcome.svg")});background-position:right top;background-size:contain;`}>
              </div>

              <div className="container">
                  <div className="row align-items-center min-vh-75 min-vh-lg-100">
                      <div className="col-md-7 col-lg-6 col-xxl-5 py-6 text-sm-start text-center">
                          <h1 className="mb-4 mt-6 mb-sm-4 fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">Fundación gente<br
                              className="d-block d-lg-block"/>Social activa</h1>
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
                          <h5 className="mb-3 fw-bold fs-3 fs-lg-5 lh-sm mb-3">Ejes de acción</h5>
                      </div>
                  </div>
                  <div className="row flex-center h-100">
                      <div className="col-xl-9">
                          <div className="row">
                              <div className="col-md-4 mb-5">
                                  <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                      <div className="text-center text-md-start card-hover">
                                          <img className="ps-3 icons" src="/images/icons/growth.svg" height="60"
                                               alt=""/>
                                          <div className="card-body">
                                              <h6 className="fw-bold fs-1 heading-color">Impulsando nuestro
                                                  crecimiento</h6>
                                              <p className="mt-3 mb-md-0 mb-lg-2">Mediante la estructuración, gestión de
                                                  recursos e implementación de proyectos, que surjan al interior de la
                                                  Fundación y se logre el bienestar de nuestra población objetivo.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4 mb-5">
                                  <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                      <div className="text-center text-md-start card-hover">
                                          <img className="ps-3 icons" src="/images/icons/community.svg" height="60"
                                               alt=""/>
                                          <div className="card-body">
                                              <h6 className="fw-bold fs-1 heading-color">Apoyada y articulada con otras
                                                  Fundaciones</h6>
                                              <p className="mt-3 mb-md-0 mb-lg-2">A través de la ejecución de convenios
                                                  y asociaciones, de tal manera que en forma conjunta y articulada se
                                                  logren concebir proyectos benéficos para la población objetivo. </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4 mb-5">
                                  <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6">
                                      <div className="text-center text-md-start card-hover">
                                          <img className="ps-3 icons" src="/images/icons/company.svg" height="60"
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

          <section className="py-5" id="actions">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-xl-9 mb-3">
                          <div className="row">
                              <div className="col-lg-9 mb-3">
                                  <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Conoce nuestras acciones</h5>
                                  <p className="mb-5">A continuación verás una pequeña muestra de lo que hacemos</p>
                              </div>
                              <div className="col-md-6 mb-5">
                                  <div className="card text-white">
                                      <img className="br-20" src="/images/gallery/1.jpg" alt=""/>
                                  </div>
                              </div>
                              <div className="col-md-6 mb-5">
                                  <div className="card text-white">
                                      <img className="br-20" src="/images/gallery/2.jpg" alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="py-8" id="testimonial">
              <div className="container-lg">
                  <div className="row flex-center">
                      <div className="col-12 col-lg-10 col-xl-12">
                          <h6 className="fs-3 fs-lg-4 fw-bold lh-sm">Comentarios</h6>
                      </div>
                      <div className="carousel slide pt-3" id="carouselExampleDark" data-bs-ride="carousel">
                          <div className="carousel-inner">
                              <div className="carousel-item active" data-bs-interval="10000">
                                  <div className="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-1.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Fernando Soler</h5>
                                                          <p className="fw-normal text-black">Telecommunication Engineer</p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;Quis autem vel eum
                                                      iure reprehenderit qui in ea voluptate velit esse quam nihil
                                                      molestiae</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-2.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Ilone Pickford</h5>
                                                          <p className="fw-normal text-black">Head of Agrogofund </p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et
                                                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                      praesentium </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-3.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Ed O’Brien</h5>
                                                          <p className="fw-normal text-black">Herbalist</p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et
                                                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                      praesentium </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="carousel-item" data-bs-interval="2000">
                                  <div className="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-1.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Fernando Soler</h5>
                                                          <p className="fw-normal text-black">Telecommunication
                                                              Engineer</p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;Quis autem vel eum
                                                      iure reprehenderit qui in ea voluptate velit esse quam nihil
                                                      molestiae</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-2.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Ilone Pickford</h5>
                                                          <p className="fw-normal text-black">Head of Agrogofund
                                                              Groups </p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et
                                                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                      praesentium </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-3.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Ed O’Brien</h5>
                                                          <p className="fw-normal text-black">Herbalist</p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;Ui dolorem eum fugiat
                                                      quo voluptas nulla pariatur? At vero eos et accusamus et iusto
                                                      odio</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  <div className="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-1.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Fernando Soler</h5>
                                                          <p className="fw-normal text-black">Telecommunication
                                                              Engineer</p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;Quis autem vel eum
                                                      iure reprehenderit qui in ea voluptate velit esse quam nihil
                                                      molestiae</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-2.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Ilone Pickford</h5>
                                                          <p className="fw-normal text-black">Head of Agrogofund
                                                              Groups </p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et
                                                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                      praesentium </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 mb-5 mb-md-0">
                                          <div className="card h-100 shadow">
                                              <div className="card-body my-3">
                                                  <div className="align-items-xl-center d-block d-xl-flex px-3"><img
                                                      className="img-fluid me-3 me-md-2 me-lg-3"
                                                      src="/images/gallery/user-3.png" width="50" alt=""/>
                                                      <div className="flex-1 align-items-center pt-2">
                                                          <h5 className="mb-0 fw-bold text-info">Ed O’Brien</h5>
                                                          <p className="fw-normal text-black">Herbalist</p>
                                                      </div>
                                                  </div>
                                                  <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;Ui dolorem eum fugiat
                                                      quo voluptas nulla pariatur? At vero eos et accusamus et iusto
                                                      odio</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
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
                                  <h1 className="fw-semi-bold mb-4">Compártenos tu
                                      <span className="text-info">opinión</span>
                                  </h1>
                                  <a className="btn btn-lg btn-success px-6" href="#" role="button">Comenta aquí</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </section>

          <section className="py-0" id="contact">
              <div className="bg-holder"
                   style={`background-image:url(${asset("/images/illustrations/footer-bg.png")});background-position:center;background-size:cover;`}>
              </div>

              <div className="container">
                  <div className="row justify-content-lg-between min-vh-75" style="padding-top:21rem">
                      <div className="col-6 col-sm-4 col-lg-auto mb-3">
                          <h6 className="mb-3 text-1000 fw-semi-bold">Fundación gente social activa</h6>
                          <ul className="list-unstyled mb-md-4 mb-lg-0">
                              <li className="mb-3">
                                  <a className="text-700 text-decoration-none" href="#home">Home</a>
                              </li>
                              <li className="mb-3">
                                  <a className="text-700 text-decoration-none" href="#action-axes">Ejes de acción</a>
                              </li>
                              <li className="mb-3">
                                  <a className="text-700 text-decoration-none" href="#action-axes">Nosotros</a>
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
                              <img className="d-inline-block align-top img-fluid" src="/logo-icon.png"
                                   alt="" width={'40'} height={'40'}/>
                          </a>
                      </div>
                      <div className="col-12 col-sm-8 col-md-6">
                          <p className="fs--1 text-dark my-2 text-center text-md-end">&copy; Copyright Fundación gente
                              social activa &nbsp;
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  );
}
