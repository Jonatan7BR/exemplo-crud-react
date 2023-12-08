import moment from "moment";
import { Person } from "../models/person";

import './Home.scss';
import { cpfFormat } from "../utils/data-format";
import { useNavigate } from "react-router-dom";

const FAKE_DATA: Person[] = [
  {
    id: 1,
    name: 'Olivia Analu Moreira',
    cpf: '84427553303',
    birthday: moment('1997-06-24').toDate(),
    email: 'oliviaanalumoreira@advogadostb.com.br',
    phone: '48988129805',
    city: 'Florianópolis',
    state: 'SC'
  },
  {
    id: 2,
    name: 'Catarina Cláudia Bernardes',
    cpf: '05185344130',
    birthday: moment('1956-03-06').toDate(),
    email: 'catarinaclaudiabernardes@aguabr.com.br',
    phone: '83986028722',
    city: 'Campina Grande',
    state: 'PB'
  },
  {
    id: 3,
    name: 'Jaqueline Mariane Yasmin Martins',
    cpf: '43852716748',
    birthday: moment('1956-01-14').toDate(),
    email: 'jaqueline.mariane.martins@silnave.com.br',
    phone: '91991024603',
    city: 'Belém',
    state: 'PA'
  },
  {
    id: 4,
    name: 'Vicente Oliver Caio Lopes',
    cpf: '90231999283',
    birthday: moment('1971-11-16').toDate(),
    email: 'vicente.oliver.lopes@weatherford.com',
    phone: '91989283146',
    city: 'Castanhal',
    state: 'PA'
  },
  {
    id: 5,
    name: 'Caroline Elisa Gabriela Moraes',
    cpf: '51679864432',
    birthday: moment('1983-02-23').toDate(),
    email: 'caroline_moraes@nogueiramoura.com.br',
    phone: '92995800236',
    city: 'Manaus',
    state: 'AM'
  }
];

const Home = (): JSX.Element => {
    const peopleData = FAKE_DATA;
    const navigate = useNavigate();

    const goToEditPage = (id: number): void => {
      navigate(`/editar/${id}`);
    };

    const goToNewPage = (): void => {
      navigate('/novo');
    };

    return (
        <>
            <h1>Pessoas cadastradas</h1>

            <div className="create-new">
              <button type="button" onClick={() => goToNewPage()}>Criar novo cadastro</button>
            </div>

            <table className="peopletable">
                <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Cidade</th>
                    <th>&nbsp;</th>
                </tr>
                {peopleData.map(person => (
                    <tr>
                        <td>{cpfFormat(person.cpf)}</td>
                        <td>{person.name}</td>
                        <td>{person.city}, {person.state}</td>
                        <td><button type="button" onClick={() => goToEditPage(person.id)}>Editar</button></td>
                    </tr>
                ))}
                {peopleData.length === 0 && (
                    <tr>
                        <td colSpan={4}>Não há pessoas cadastradas.</td>
                    </tr>
                )}
            </table>
        </>
    );
};

export default Home;
