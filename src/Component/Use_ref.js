import { radioClasses } from "@mui/material";
import React from "react";
export default class CustomTextinput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textinput DOM element
      this.textinput = React.createRef();
      this.focusTextinput = this.focusTextinput.bind(this);
    }
  
    focusTextinput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textinput.current.focus();
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textinput` that we created in the constructor
      return (
        <div>
          <input
            type="text"
            ref={this.textinput} />
            <input
            type="text"
            ref={this.textinput} />
            <input
            type="text"
            ref={this.textinput}  />
            
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextinput}
          />
        </div>
      );
    }
  }
   
 