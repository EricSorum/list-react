import React, { Component } from 'react'
import uniqid from "uniqid"
import List from './List'

class Form extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        person: {
           firstName: '',
           lastName: '',
           id: uniqid()
        },
        people: [],
     }
   }
   handleChange = (e) => {
      this.setState({
         /*...this.state,*/
         person: {[e.target.name]: e.target.value}
         
      })
   }
  
   onSubmitTask = (e) => {
      this.setState({
         people: this.state.people.concat(this.state.person),
         person: { 
            firstName: '',
            lastName: '',
            num: this.state.num + 1,
            id: uniqid()
          },
      })
      e.preventDefault();
   }
   render() {
      const { person, people } = this.state
      return (
         <div>
            <h1>Form</h1>
            <form onSubmit={this.onSubmitTask}>
               <label htmlFor="firstNameInput">First Name: </label>
               <input 
                  type="text" 
                  name="firstName" 
                  value={person.firstName} 
                  onChange={this.handleChange}/>
               <label htmlFor="lastNameInput">Last Name: </label>
               <input 
                  type="text" 
                  name="lastName" 
                  value={person.lastName} 
                  onChange={this.handleChange}/>
               <button type="submit">Add Person</button>
            </form>
            <br />
            <List people={people} />
         </div>
      )
   }
}

export default Form