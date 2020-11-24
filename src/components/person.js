import {Button} from 'react-bootstrap'

export default function Person(props){
    return(
        <tr key={props.person.id}>
            <td>{props.person.id.slice(0,3)}</td>
            <td>{props.person.name+' '+props.person.lastName}</td>
            <td>{props.person.birthdate}</td>
            <td>{props.person.email}</td>
            <td>
                <Button variant="primary" onClick={()=>{
                    props.handleShowEdit()
                    props.handleShow()
                    props.setPerson({
                        "id": props.person.id,
                        "name": props.person.name,
                        "lastName":props.person.lastName,
                        "birthdate":props.person.birthdate,
                        "email": props.person.email
                      })
                    }}>Editar</Button>{'  '}
                <Button variant="danger" onClick={()=>props.deletePerson(props.person.id)}>Borrar</Button>
            </td>
        </tr>
    );
}