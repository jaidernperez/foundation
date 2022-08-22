/** @jsx h */
import {h} from 'preact';
import {Navbar} from '../components/Navbar.tsx';
import CommentsForm from '../islands/CommentsForm.tsx';

export default function Comments() {
    return (
        <main className={'main d-flex flex-column min-vh-100'} id={'top'}>
            <Navbar home={false}/>

            <section className={'mt-4 container'}>
                <h2 className={'fw-bold mb-4 text-center'}>Escribe tu comentario</h2>
                <div className={'container d-flex justify-content-center'}>
                    <div className={'col-12 col-sm-6 col-md-6 col-lg-6'}>
                        <CommentsForm url={'https://powerful-plains-87201.herokuapp.com/api/comments'}/>
                    </div>
                </div>
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