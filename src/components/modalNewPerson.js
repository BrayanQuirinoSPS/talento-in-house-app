import {Modal,Button,Form,Col} from 'react-bootstrap'
import {useState} from 'react'
import DatePicker from "react-date-picker";
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ModalNewPerson(props){
    //const handleClose= ()=>setshow(true);
    const [startDate, setStartDate] = useState(new Date());
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }else{
            event.preventDefault();
            props.addPerson(props.person);
            event.stopPropagation();
            props.handleShow();
            setValidated(false);
        }
    };
    const format = function(date){
        return (date.getDate() +
        "/" + (date.getMonth() + 1) +
        "/" +  date.getFullYear());
    }
    const handleDate=(date) => {
        setStartDate(date);
        props.setPerson({
            ...props.person,
            "birthdate":format(date)
        });
    }
    const handleChange=e=>{
        props.setPerson(
            {
                ...props.person,
                [e.target.name]:e.target.value
            }
        )
    }
    
    return (
        <div>
          <Modal show={props.show} onHide={props.handleShow}>
            <Modal.Header closeButton>
              <Modal.Title>Nuevo Cumpleaños</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control required type ="text" placeholder="Nombre(s)" name ="name" onChange={handleChange} value={props.person.name}/>
                                <Form.Control.Feedback>Se ve bien ;)!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Nombre no valido</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control required type="text" placeholder="Apellidos" name="lastName" onChange={handleChange} value={props.person.lastName}/>
                                <Form.Control.Feedback>Se ve bien ;)!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Apellidos no validos</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Email" name="email" onChange={handleChange} value={props.person.email}/>
                            <Form.Control.Feedback>Se ve bien ;)!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Email no valido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cumpleaños</Form.Label>
                            {props.person.birthdate !==' '
                            ?(<DatePicker locale="es-Es" format= 'dd/MM/y' value={reDate(props.person.birthdate)} onChange={handleDate} name="birthdate"/>)
                            :(<DatePicker locale="es-Es" format= 'dd/MM/y' value={startDate} onChange={handleDate} name="birthdate"/>)
                            }
                            <Form.Control.Feedback>Se ve bien ;)!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Fecha no valida</Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit" variant="primary">Insertar</Button>
                    </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleShow}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
}

function reDate(date){
  //print(date)s
  let aux=date.split('/')
  for(let i=0;i<2;i++){
    if(parseInt(aux[i],10)<10){
      aux[i]='0'+aux[i];
    }
  }
  let d= new Date(aux[1]+'/'+aux[0]+'/'+aux[2]);
  return d;
}