import { useNavigate, useParams } from "react-router-dom";
import { STATES } from "../utils/states";
import { FormEvent, useEffect, useState } from "react";
import { cpfValid, phoneValid } from "../utils/validation";
import { PersonBody } from "../models/person";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { MessageType, sendMessage } from "../redux/reducers/messageSlice";
import { getPerson, registerPerson, updatePerson } from "../api/people";

import './Details.scss';

const Details = (): JSX.Element => {
    const person = useAppSelector(state => state.people.person);
    const dispatch = useAppDispatch();

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

    const sendData = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        
        if (!cpfValid(cpf)) {
            dispatch(sendMessage({ message: 'O número do CPF está inválido', messageType: MessageType.Error }));
            return;
        }
        if (!phoneValid(phone)) {
            dispatch(sendMessage({ message: 'O número de telefone está em um formato inválido', messageType: MessageType.Error }));
            return;
        }

        const body: PersonBody = {
            name,
            cpf,
            birthday,
            email,
            phone,
            city,
            state
        };
        if (id) {
            const result = await dispatch(updatePerson({ id: +id, person: body }));
            if (updatePerson.fulfilled.match(result)) {
                dispatch(sendMessage({ message: 'Dados atualizados com sucesso' }));
                navigate('/');
            } else {
                dispatch(sendMessage({ message: 'Não foi possível atualizar os dados do cadastro.', messageType: MessageType.Error }));
            }
        } else {
            const result = await dispatch(registerPerson(body));
            if (registerPerson.fulfilled.match(result)) {
                dispatch(sendMessage({ message: 'Dados cadastrados com sucesso' }));
                navigate('/');
            } else {
                dispatch(sendMessage({ message: 'Não foi possível realizar o cadastro dos dados.', messageType: MessageType.Error }));
            }
        }
    };

    useEffect(() => {
        if (id) {
            if (!parseInt(id)) {
                navigate('/');
            }
            dispatch(getPerson(+id));
        }
    }, [id]);

    useEffect(() => {
        if (person) {
            setName(person.name);
            setCpf(person.cpf);
            setBirthday(person.birthday);
            setEmail(person.email);
            setPhone(person.phone);
            setCity(person.city);
            setState(person.state);
        }
    }, [person]);

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
