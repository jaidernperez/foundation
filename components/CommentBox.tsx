/** @jsx h */
import {h} from 'preact';

interface Props {
    name: string;
    occupation: string;
    profile: string;
    comment: string;
}

export function CommentBox(props: Props) {
    return (
        <div className="col-md-4 mb-5 mb-md-0">
            <div className="card h-100 shadow">
                <div className="card-body my-3">
                    <div className="align-items-xl-center d-block d-xl-flex px-3">
                        <img loading="lazy" className="img-fluid me-3 me-md-2 me-lg-3"
                             src={props.profile} width={'50'}
                             height={'50'} alt=""/>
                        <div className="flex-1 align-items-center pt-2">
                            <h5 className="mb-0 fw-bold text-info">{props.name}</h5>
                            <p className="fw-normal text-black">{props.occupation}</p>
                        </div>
                    </div>
                    <p className="mb-0 px-3 px-md-2 px-xxl-3">&quot;{props.comment}&quot;</p>
                </div>
            </div>
        </div>
    );
}