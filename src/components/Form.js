import React, { Component } from 'react'
import uniqid from "uniqid"
import List from './List'
import styles from '../styles/Form.module.css'

class Form extends Component {
   constructor(props) {
     super(props)
     this.state = {
        person: {
           firstName: '',
           lastName: '',
           screenName: '',
           email: '',
           terms: false,
           num: 1,
           id: uniqid()
        },
        people: [],
     }
   }
   handleChange = (e) => {
      this.setState({
         ...this.state,
         person: {...this.state.person, [e.target.name]: e.target.value}
      })
   }
   onSubmitTask = (e) => {
      this.setState({
         people: this.state.people.concat(this.state.person),
         person: { 
            firstName: '',
            lastName: '',
            screenName: '',
            email: '',
            terms: false,
            num: this.state.person.num + 1,
            id: uniqid()
          },
      })
      e.preventDefault();
   }
   render() {
      const { person, people } = this.state
      return (
         <div>
            <h1 className={styles.form}>Form</h1>
            <form className={styles.form} onSubmit={this.onSubmitTask}>
               <div>
                  <label htmlFor="firstNameInput">First Name: </label>
                  <input 
                     type="text" 
                     name="firstName" 
                     value={person.firstName} 
                     onChange={this.handleChange}/>
               </div>
               <div>
                  <label htmlFor="lastNameInput">Last Name: </label>
                  <input 
                     type="text" 
                     name="lastName" 
                     value={person.lastName} 
                     onChange={this.handleChange}/>
               </div>
               <div>
                  <label htmlFor="screenName">Screen Name (the name you want other users to see): </label>
                  <input
                     type="text"
                     name="screenName"
                     value={person.screenName}
                     onChange={this.handleChange}/>
               </div>
               <div>
                  <label htmlFor="email">Email address: </label>
                  <input
                     type="email"
                     name="email"
                     value={person.email}
                     onChange={this.handleChange}/>
               </div>
               <div className={styles.agree}>
                  <input
                     type="checkbox"
                     name="terms"
                     value={person.terms}
                     onChange={this.handleChange}
                     required/>
                     <label htmlFor="terms">I agree to the terms and conditions.</label>
                  <button className={styles.submitButton} type="submit">Add Person</button>
               </div>
            </form>
            <br />
            <List people={people} className={styles.list}/>
         </div>
      )
   }
}

export default Form