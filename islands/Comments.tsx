/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

interface CommentProps {
    start: number;
}

export default function Comments(props: CommentProps) {
    const [comment, setComment] = useState(props.start);

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        // here logic to store comment
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id={'comment-input'}
                       type={'text'}
                       value={comment}
                       onChange={(e: any) => setComment(e.target.value)}
                    className={'form-control'}/>
                <button className={'btn btn-info'} type={'submit'}>Comment</button>
            </form>
        </div>
    );
}