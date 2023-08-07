import {CommentBox} from './CommentBox.tsx';
import {Comment} from '../models/Comment.ts';

interface Props {
    data: Comment[][];
}

export function Slice(props: Props) {
 return (
     <div> {
         props.data.map((chunk, key) =>
             <div className={`carousel-item ${key == 0 ? 'active' : ''}`}
                  data-bs-interval="10000">
                 <div className="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                     {chunk.map((comment: Comment) => <CommentBox
                         name={comment.name}
                         profile={comment.profile}
                         occupation={comment.occupation}
                         comment={comment.comment} />)}
                 </div>
             </div>
         )
     }</div>
 );
}