import { Link } from "react-router-dom"
import './crud.css';
import Login from "../Auth/Login"
export default function Head() {
     return (
          <>

               <div className='main_f'>
                    <div className='min'>
                 
                 
                         {/* <div className='half'>
                         
                         </div>  */}
                       
                         

                         <div className='header'>
                                
                              <h1 className='span'><Link to=" " className='deco'>Home</Link></h1>
                              <h1 className='span'><Link to="About" className='deco'>About</Link></h1>
                              <h1 className='span'><Link to="Login" className='deco'>Login</Link></h1>
                              <h1 className='span'><Link to="Signup" className='deco'>Signup</Link></h1>
                         </div>
                        

                    </div>

               </div>

          </>
     )
}

