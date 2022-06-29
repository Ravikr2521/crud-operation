
import React, { useEffect, useState } from 'react'
import Btn, { Editdata,Viewbtn } from './Button'
import DeleteIcon from '@mui/icons-material/Delete';
import './crud.css';


export default function Dash(){
    const [Employ, SetEmploy] = useState([])
    const [Update, setUpdate] = useState({});
    const [search, setSearch]=useState("")
    const[sort,setSort]=useState("")

    useEffect(()=>
    {
        loaduser(); 
    },[])
    
   
        
    const loaduser  = () => {
       fetch('http://localhost:3002/employee').then((response) => response.json().then((data) => {
           
           SetEmploy(data)
       }))  
    }
    const deleteData = (id) => {

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch(`http://localhost:3002/employee/${id}`, requestOptions)
            .then(response => response.json())
            .then(() => {
                alert(" Deleted succefully");
                newData();
            }
            );
    }

console.log(Employ)


    const newData = () => {
        loaduser();
    }

    const sorting=["id","employee_name","employee_email","employee_age","employee_salary"];

    const handlesort=(e)=>{
        let value=e.target.value;
        setSort(value);
        
        fetch(`http://localhost:3002/employee?_sort=${value}&_order=asc&_limit=5`)
        .then((response) => response.json().then((data) => {
            SetEmploy(data)
        }))  


    }

    return(
    <>

<div className="save-data">
            <div className="mid-save"><Btn call={newData}/></div>
        </div>
        <div className="box-table">


            <div className="mid-table">
                <input type="text"  placeholder='Search'
                 onChange={(e) => {setSearch(e.target.value) }}/> 

                 
                 
                 <select style={{color:"purple"}}
                 value={sort}
                 onChange={handlesort}
                 >
                     <option>select By</option>
                    {sorting.map((v,i)=>(
                        <option value={v} key={i} >{v}</option>
                    )
                    )}
                     
                 </select>

               
                    <table className='table'>
                        <thead>
                            <tr >
                                <th>S.No</th>
                                <th>ID</th>
                                <th>Employee Name</th>
                                <th>Employee mail</th>
                                <th>Employee Age</th>
                                <th>Employee Salary</th>

                                <th>EDIT</th>
                                <th>DELETE</th>
                                <th>VIEW</th>

                                
                            </tr>

                        </thead>
                        <tbody>
                            {Employ.filter((v)=>{
                                if(search===""){
                                    return v;
                    
                                }
                                else if(v.employee_name.toLowerCase().includes(search.toLowerCase()) ||
                                v.employee_email.toLowerCase().includes(search.toLowerCase()) ||
                                v.employee_age.toLowerCase().includes(search.toLowerCase()) ||
                                v.employee_salary.toLowerCase().includes(search.toLowerCase()))
                                 {
                                    return v;
                                }
                            })
                            .map((v,i) =>
                            <tr key={v.id}>
                                <th>{i+1}</th>
                                <th>{v.id}</th>
                                <th>{v.employee_name}</th>
                                <th>{v.employee_email}</th>
                                <th>{v.employee_age}</th>
                                <th>{v.employee_salary}</th>                        
                                <th onClick={()=>{setUpdate(v)}}><Editdata call={newData} obj={Update}/></th>
                                <th><button className="dlt_btn" onClick={() => { deleteData(v.id) }}><DeleteIcon /></button> </th>
                                <th onClick={()=>{setUpdate(v)}}><Viewbtn call={newData} obj={Update}/></th>


                            </tr>
                           )}
                        </tbody>
                        
                    </table>


            
               </div>
               </div>

    </>
    )
}