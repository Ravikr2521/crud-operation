import { useState } from "react";
import { ListGroup,Button,Modal } from "react-bootstrap"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PropaneSharp } from "@mui/icons-material";

export default function View(props){

    const [s,setS] = useState({
        form: {
           ...props.mydata
        }
    });
   
    useEffect(()=>{
       setS({form:props.mydata})
     
    },[props])

  
   
return(

<>
 
 <Modal show={props.show} onHide={props.f1}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Data</Modal.Title>
        </Modal.Header>
        <Modal.Body><ListGroup>
  <ListGroup.Item>ID : {s.form.id}</ListGroup.Item>
  <ListGroup.Item variant="primary" >Name : {s.form.employee_name}</ListGroup.Item>
  <ListGroup.Item variant="warning">Email : {s.form.employee_email}</ListGroup.Item>
  <ListGroup.Item variant="success">Age : {s.form.employee_age}</ListGroup.Item>
  <ListGroup.Item variant="danger">Salary : {s.form.employee_salary}</ListGroup.Item>

</ListGroup></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.f1}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

</>)   

}





 