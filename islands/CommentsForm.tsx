/** @jsx h */
import {h} from 'preact';
import {useState} from 'preact/hooks';

export default function CommentsForm() {
    const [comment, setComment] = useState<string>('');
    let loading: boolean = false;

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        // here logic to store comment
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea id={'comment-input'}
                          rows={3}
                          type={'text'}
                          value={comment}
                          onChange={(e: any) => setComment(e.target.value)}
                          className={'form-control'}/>
                <button className={'mt-3 btn btn-info'} type={'submit'}>{(loading)? 'Cargando...': 'Comentar'}</button>
            </form>
        </div>
    );
}