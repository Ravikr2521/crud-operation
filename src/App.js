import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Mycomponent, {Mycomponent1} from './MyComponent';
import { CounterMy,Counter } from './reducer/Logic';
import MyCounter from './reducer/Logic';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Header from './CRUD/Header';
import Home from './CRUD/Home';
import About from './CRUD/About';
import Dash from './CRUD/Dashboard';
import View from './CRUD/view';






function App() {
  return (
    <>
    {/* <Mycomponent1/> */}
    {/* <MyCounter />
    <Counter /> */}
    
    {/* <Login /> */}


  <Router>
<Header />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="About" element={<About />}></Route>
<Route path="Login" element={<Login  />}></Route>
<Route path="Signup" element={<Signup />}></Route>
<Route path='Dash' element={<Dash/>}></Route>

<Route path="View/:id" element={<View />}></Route>




</Routes>

</Router>
    
    </>
  );
}

export default App;
