import { useSelector } from 'react-redux'

export function Table(): JSX.Element{

    const persons: [any] = useSelector((store) => store.Person.persons)

    return (
        <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                  </tr>
                </thead>
                <tbody>
                  {persons.map((p) => 
                    (<tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.nom}</td>
                        <td>{p.prenom}</td>
                      </tr>)
                    )}
                </tbody>
            </table>
    )
}