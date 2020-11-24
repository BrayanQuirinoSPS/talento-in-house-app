import Person from './person'
import {Table} from 'react-bootstrap'
export default function People(props){
    return(
        <>
        <Table striped bordered hover>
            <thead variant="dark">
                <tr>
                    <th>id</th>
                    <th>Person</th>
                    <th>Birthdate</th>
                    <th>email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(e=>
                        {
                            return (<Person person={e} key={e.id} 
                            deletePerson={props.deletePerson} 
                            handleShow={props.handleShow} 
                            handleShowEdit={props.handleShowEdit}
                            setPerson={props.setPerson}/>)
                        }
                    )}
            </tbody>
        </Table>
        </>
    );
}