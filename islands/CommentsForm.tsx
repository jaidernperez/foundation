import {useState} from 'preact/hooks';
import {axiod} from 'https://deno.land/x/axiod/mod.ts';

interface Error {
    isError: boolean;
    errorMessages: string[];
}

interface Props {
    url: string;
}

export default function CommentsForm(props: Props) {
    const [name, setName] = useState<string>('');
    const [occupation, setOccupation] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [sex, setSex] = useState<string>('male');
    const [successCreated, setSuccessCreated] = useState<boolean>(false);
    const [error, setError] = useState<Error>({isError: false, errorMessages: []});
    const [loading, setLoading] = useState<boolean>(false);

    const clearMessages = (): void => {
        setError({isError: false, errorMessages: []});
        setSuccessCreated(false);
    };

    const clearFields = (): void => {
        setName('');
        setOccupation('');
        setComment('');
        setSex('male');
    };

    const showErrors = (errors: any) => {
        const errorMessages = [];
        let isError = false;
        if (errors.name) {
            errorMessages.push(errors.name);
            isError = true;
        }
        if (errors.occupation) {
            errorMessages.push(errors.occupation);
            isError = true;
        }
        if (errors.comment) {
            errorMessages.push(errors.comment);
            isError = true;
        }
        if (errors.profile) {
            errorMessages.push(errors.profile);
            isError = true;
        }
        setError({isError: isError, errorMessages: errorMessages});
    };

    const handleSubmit = (event: Event): void => {
        event.preventDefault();
        setLoading(true);
        axiod.post(`${props.url}`,
            {
                comment: {
                    name: name,
                    occupation: occupation,
                    comment: comment,
                    profile: (sex == 'male') ? '/images/gallery/male-user.svg' : '/images/gallery/female-user.svg'
                }
            })
            .then(() => {
                setLoading(false);
                clearFields();
                setSuccessCreated(true);
            })
            .catch(reason => {
                setLoading(false);
                showErrors(reason.response.data.errors);
            });
    };

    return (
        <div>
            {error.isError ?
                <div className={`alert alert-danger`} role="alert">
                    <ul>
                        {error.errorMessages.map((error) => <li>{error}</li>)}
                    </ul>
                </div> : ''}
            {successCreated ?
                <div className={`alert alert-info`} role="alert">
                    Comentario creado con éxito
                </div> : ''}

            <form onSubmit={handleSubmit}>
                <div className={'mt-3'}>
                    <label htmlFor={'name'} className={'form-label fw-bold'}>Nombre</label>
                    <input id={'name'}
                           type={'text'}
                           value={name}
                           minLength={3}
                           maxLength={30}
                           required={true}
                           onChange={(e: any) => setName(e.target.value)}
                           onClick={clearMessages}
                           placeholder={'Escribe tu nombre...'}
                           className={`form-control rounded-pill ${error.isError ? 'border-danger' : ''}`}
                    />
                </div>
                <div className={'mt-3'}>
                    <label htmlFor={'occupation'} className={'form-label fw-bold'}>Ocupación</label>
                    <input id={'occupation'}
                           type={'text'}
                           value={occupation}
                           minLength={3}
                           maxLength={30}
                           required={true}
                           onChange={(e: any) => setOccupation(e.target.value)}
                           onClick={clearMessages}
                           placeholder={'Escribe tu ocupación...'}
                           className={`form-control rounded-pill ${error.isError ? 'border-danger' : ''}`}
                    />
                </div>
                <div className={'mt-3'}>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="radio"
                               checked={sex === 'male'}
                               onChange={(e: any) => setSex(e.target.value)}
                               value={'male'}
                               id="male"/>
                        <label className="form-check-label" htmlFor="male">
                            Hombre
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="radio"
                               checked={sex === 'female'}
                               onChange={(e: any) => setSex(e.target.value)}
                               value={'female'}
                               id="female"/>
                        <label className="form-check-label" htmlFor="female">
                            Mujer
                        </label>
                    </div>
                </div>
                <div className={'mt-3'}>
                    <label htmlFor={'occupation'} className={'form-label fw-bold'}>Comentario</label>
                    <textarea id={'comment-input'}
                              rows={3}
                              type={'text'}
                              value={comment}
                              minLength={5}
                              maxLength={500}
                              required={true}
                              onChange={(e: any) => setComment(e.target.value)}
                              placeholder={'Comentario...'}
                              onClick={clearMessages}
                              className={`form-control ${error.isError ? 'border-danger' : ''}`}
                    />
                </div>
                <div className={'text-center'}>
                    <button className={`mt-3 btn rounded-pill ${error.isError ? 'btn-outline-secondary' : 'btn-info'}`}
                            type={'submit'}>{(loading) ? 'Cargando...' : 'Comentar'}</button>
                </div>
            </form>
        </div>
    );
}