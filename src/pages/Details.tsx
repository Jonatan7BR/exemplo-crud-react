import { useNavigate, useParams } from "react-router-dom";
import { STATES } from "../utils/states";
import { FormEvent, useEffect, useState } from "react";
import { cpfValid, phoneValid } from "../utils/validation";
import { Person } from "../models/person";
import moment from "moment";

import './Details.scss';

const FAKE_DATA: Person = {
    id: 1,
    name: 'Olivia Analu Moreira',
    cpf: '84427553303',
    birthday: moment('1997-06-24').toDate(),
    email: 'oliviaanalumoreira@advogadostb.com.br',
    phone: '48988129805',
    city: 'Florianópolis',
    state: 'SC'
  };

const Details = (): JSX.Element => {
    const { id } = useParams();
    const navigate = useNavigate();

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

    const sendData = (event: FormEvent): void => {
        event.preventDefault();
        console.log(cpfValid(cpf));
        
        if (!cpfValid(cpf) || !phoneValid(phone)) {
            return;
        }
        navigate('/');
    };

    useEffect(() => {
        if (id) {
            setName(FAKE_DATA.name);
            setCpf(FAKE_DATA.cpf);
            setBirthday(moment(FAKE_DATA.birthday).format('YYYY-MM-DD'));
            setEmail(FAKE_DATA.email);
            setPhone(FAKE_DATA.phone);
            setCity(FAKE_DATA.city);
            setState(FAKE_DATA.state);
        }
    }, [id]);

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
                        {states.map((s, i) => <option key={i} value={s.abbr}>{s.name}</option>)}
                    </select>
                </div>

                <div className="span2">
                    <button type="submit">{buttonLabel}</button>
                </div>
            </form>
        </>
    )
};

export default Details;
