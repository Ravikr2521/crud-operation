import React from "react";
import Cat from "./Component1";
import Bat from "./Component2";
import MouseTracker from "./Main";



export default class Mycomponent extends React.Component{
    render(){
        return(
            <>
            <MouseTracker render = {mouse=>(<Cat ravi={mouse}/>)}/>
            </>
        )
    }
    
}





export  class Mycomponent1 extends React.Component{
    render(){
        return(
            <>
            <MouseTracker render = {mouse=>(<Bat ravi={mouse}/>)}/>
            </>
        )
    }
    
}

