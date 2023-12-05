import moment from "moment";
import { Person } from "../models/person";

import './Home.scss';
import { cpfFormat } from "../utils/data-format";

const FAKE_DATA: Person[] = [
    {
      name: 'Olivia Analu Moreira',
      cpf: '84427553303',
      birthday: moment('1997-06-24').toDate(),
      email: 'oliviaanalumoreira@advogadostb.com.br',
      phone: '48988129805',
      city: 'Florianópolis',
      state: 'SC'
    },
    {
      name: 'Catarina Cláudia Bernardes',
      cpf: '05185344130',
      birthday: moment('1956-03-06').toDate(),
      email: 'catarinaclaudiabernardes@aguabr.com.br',
      phone: '83986028722',
      city: 'Campina Grande',
      state: 'PB'
    },
    {
      name: 'Jaqueline Mariane Yasmin Martins',
      cpf: '43852716748',
      birthday: moment('1956-01-14').toDate(),
      email: 'jaqueline.mariane.martins@silnave.com.br',
      phone: '91991024603',
      city: 'Belém',
      state: 'PA'
    },
    {
      name: 'Vicente Oliver Caio Lopes',
      cpf: '90231999283',
      birthday: moment('1971-11-16').toDate(),
      email: 'vicente.oliver.lopes@weatherford.com',
      phone: '91989283146',
      city: 'Castanhal',
      state: 'PA'
    },
    {
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

    return (
        <div className="home-page">
            <h1>Pessoas cadastradas</h1>

            <table className="peopletable">
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Cidade</th>
                </tr>
                {peopleData.map(person => (
                    <tr>
                        <td>{cpfFormat(person.cpf)}</td>
                        <td>{person.name}</td>
                        <td>{person.city}, {person.state}</td>
                    </tr>
                ))}
                {peopleData.length === 0 && (
                    <tr>
                        <td colSpan={3}>Não há pessoas cadastradas.</td>
                    </tr>
                )}
            </table>
        </div>
    );
};

export default Home;
