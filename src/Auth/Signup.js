import { TextField , FormGroup,Checkbox , Button,FormControlLabel } from "@mui/material"
import React ,{ useState } from "react";

import './crud.css'
export default function Signup(){
    const[fname,SetFname]=useState('');

    const[email,SetEmail]=useState('');
    const[password,SetPassword]=useState('');
    const[phone,SetPhone]=useState('');

    const handlesubmit=()=>{
        localStorage.SetItem("fname",fname)
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",password)
        localStorage.setItem("contact",phone)

    }
    return(
        <>


        <div className="login">
            <div className="min">
                <form className="form" onSubmit={handlesubmit}>
                <TextField  required  className='ababab' id="outlined-basic" label="Name" variant="outlined" size="small"  value={fname} onChange={e =>SetFname(e.target.value)}/>
                <TextField fullWidth required  className='ababab' id="outlined-basic" label="Email" variant="outlined" size="small"  value={email} onChange={e =>SetEmail(e.target.value)}/>
                <TextField type="password" className='ababab' fullWidth id="outlined-basic" label="password" variant="outlined" size="small" required value={password} onChange={e =>SetPassword(e.target.value)} />
                <TextField fullWidth required  className='ababab' id="outlined-basic" label="Contact" variant="outlined" size="small"  value={phone} onChange={e =>SetPhone(e.target.value)}/>
                
                        <h1 className='btn'><Button variant="contained" type='submit'>Signup</Button></h1>
                        <h1 className='btn'><Button variant="contained" >Cancel</Button></h1>
                    </form>


               


            </div>

        </div>
        
        

        
        </>
    )

}