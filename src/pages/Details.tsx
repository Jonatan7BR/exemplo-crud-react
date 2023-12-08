import { useParams } from "react-router-dom";
import { STATES } from "../utils/states";
import { FormEvent, useState } from "react";

const Details = (): JSX.Element => {
    const { id } = useParams();

    const title = id ? 'Editar cadastro' : 'Cadastrar pessoa';
    const buttonLabel = id ? 'Atualizar' : 'Cadastrar';

    const states = STATES.sort((a, b) => a.name.localeCompare(b.name));

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const sendData = (event: FormEvent) => {
        event.preventDefault();
        
    };

    return (
        <>
            <h1>{title}</h1>

            <form className="grid2" onSubmit={sendData}>
                <p>Nome:</p>
                <div>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                </div>

                <p>CPF:</p>
                <div>
                    <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} inputMode="numeric" pattern="\d{11}" required />
                </div>

                <p>Data de nascimento:</p>
                <div>
                    <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} required />
                </div>

                <p>E-mail:</p>
                <div>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>

                <p>Telefone:</p>
                <div>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
                </div>

                <p>Cidade:</p>
                <div>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)} required />
                </div>

                <p>Estado:</p>
                <div>
                    <select value={state} onChange={e => setState(e.target.value)} required>
                        {states.map(s => <option value={s.abbr}>{s.name}</option>)}
                    </select>
                </div>

                <div className="span2">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </>
    )
};

export default Details;
