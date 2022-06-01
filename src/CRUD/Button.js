import { useState } from "react";
import Edituser from "./Edit";
import EditIcon from '@mui/icons-material/Edit';
import Add from "./Add_data";
import View from "./view";
import PreviewIcon from '@mui/icons-material/Preview'; 

import './crud.css'


export default function Btn(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const formData = (data)=>{
        console.log(data)
    }
    return (
        <>
        <div className="c">
            <button  onClick={handleShow} className="add_data_btn">
                Create New Record
            </button>
            <Add show={show} f1 = {handleClose} call={props.call} formSubmit = {formData}/>
            </div>
        </>

    )

}
export function Editdata(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
         <button  onClick={handleShow} className="data_edit">
       <EditIcon />
            </button>
            <Edituser show={show} f1 = {handleClose} call = {props.call} mydata={props.obj} />
        </>
    )
}


export function Viewbtn(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>
         <button  onClick={handleShow} className="data_view">
          <PreviewIcon />
            </button>
            <View show={show} f1 = {handleClose} call= {props.call} mydata={props.obj} />

        </>
    )
}
  

  
  
