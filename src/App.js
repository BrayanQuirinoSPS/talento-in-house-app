import './App.css';
import {useState} from 'react'
import {data} from './database/info.json'
import People from './components/People'
import ModalNewPerson from './components/modalNewPerson'
import {Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [showEdit,setShowEdit]=useState(false);
  const [table,setTable] =useState(data);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const handleShowEdit = () => setShowEdit(!showEdit);
  const addPerson =(person)=>{
    if(showEdit){
      setTable(table.map(e=>(e.id===person.id ? person : e)));
    }else{
      person.id=uuidv4();
      setTable([
        ...table,
        person
      ])
    }
  }
  const deletePerson=(id)=>{
    setTable(table.filter(person=>person.id!==id))
  }
  const [person,setPerson]=useState({
    "id": " ",
    "name": " ",
    "lastName":" ",
    "birthdate": " ",
    "email": " "
  });
  return (
    <div className="App">
      <Button variant="success" onClick={handleShow}>Nuevo Cumpleaños</Button>
      <ModalNewPerson addPerson={addPerson} person={person} setPerson={setPerson} show={show} handleShow={handleShow} handleShowEdit={handleShowEdit}/>
      <People data={table} deletePerson={deletePerson} handleShow={handleShow} handleShowEdit={handleShowEdit} setPerson={setPerson}/>
    </div>
  );
}

export default App;
