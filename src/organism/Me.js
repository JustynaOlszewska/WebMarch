import React, {Component} from 'react';
import {Prompt} from "react-router-dom";
import '../style/sass/_me.scss'


class Me extends Component {
  state = { 
textarea: "",
errors: {
  textarea: false
},
message: ""
   }
   message = {
     textarea__incorrect: "The message cannot be shorter than 10 characters and cannot contain @"
   }
   handleSubmit=(e)=> {
e.preventDefault()

const validation = this.formValidation();

if(validation.textarea) {
this.setState({
  textarea: "",
  errors: {
    textarea: false
  },
message: "form sent"
})
}
else{
  this.setState({
    textarea: "",
    errors: {
      textarea: false
    },
  message: this.message.textarea__incorrect
  })
}

}

handletextareaChange=(e)=> {
 this.setState({
   textarea: e.target.value
 })
}
formValidation=()=> {

  let textarea = false;

  if(this.state.textarea.length > 10 && this.state.textarea.indexOf('@')===-1) {
textarea = true;
  }

  return({
    textarea
  })
}
  render() { 
    return ( 
      <div className="me">
    <h1 className="hMe">Write a message:</h1>
  {this.state.message}
  {this.state.errors.textarea &&<span>{this.message.textarea__incorrect}</span>}
    <form onSubmit={this.handleSubmit} className="formMe" noValidate>
          <textarea onChange={this.handletextareaChange} className="formMe__textarea" placeholder="Write here." value={this.state.textarea}></textarea>
          <button className="formMe__button" type="submit" >
          Send a message
          </button>
        </form>
        <Prompt when={this.state.textarea ? true : false}
        message="You haven't sent the form."/>
        </div>
     );
  }
}
 
export default Me;