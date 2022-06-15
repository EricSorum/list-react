import React, { Component } from 'react'
import uniqid from 'uniqid'
import Order from './Order'

export class Tea extends Component {
   constructor(props) {
      super(props)
      this.state = {
         tea: {
            type: 'Ginger',
            size: 'Large',
            syrup: 'lemon',
            bubbles: false,
            milk: false,
            temp: 'Iced',
            id: uniqid()
         },     
         teas: []
      }
   }   
   handleChange = e => {
      this.setState({
         ...this.state,
         tea: {...this.state.tea, [e.target.name]: e.target.value}
      })
   }
   submitForm = e => {
      this.setState({
         teas: this.state.teas.concat(this.state.tea),
         tea: {
            type: 'ginger',
            size: 'large',
            syrup: '',
            bubbles: false,
            milk: false,
            temp: '',
            id: uniqid()
         },
      })
      e.preventDefault()
   } 
   render() {
      return (
         <div>
            <form onSubmit={this.submitForm}>
               <h1>Tea order form</h1>
               <div>
                  <label htmlFor='type'>Type of Tea: </label>
                  <select name='type' value={this.state.tea.type} onChange={this.handleChange}>
                     <option value="Ginger">Ginger</option>
                     <option value="Mint">Mint</option>
                     <option value="Black">Black</option>
                  </select>
               </div>
               <div>
                  <label htmlFor='size'>Size: </label>
                  <select type="select" name="size" value={this.state.tea.size} onChange={this.handleChange}>
                     <option value="Small">Small</option>
                     <option value="Medium">Medium</option>
                     <option value="Large">Large</option>
                  </select>
               </div>
               <div>
                  <label htmlFor='syrup'>Syrup: </label>
                  <select type="select" name="syrup" value={this.state.tea.syrup} onChange={this.handleChange}>
                     <option value="None"></option>
                     <option value="Lemon">Lemon</option>
                     <option value="Lavender">Lavender</option>
                     <option value="Lime">Lime</option>
                     <option value="Mango">Mango</option>
                  </select>
               </div>
               <div>
                  <label htmlFor="bubbles">Add Bubbles</label>
                  <input type="checkbox" name="bubbles" value={this.state.tea.bubbles} onChange={this.handleChange}></input>
               </div>
               <div>
                  <label htmlFor="milk">Add Sweetened Condensed Milk</label>
                  <input type="checkbox" name="milk" value={this.state.tea.bubbles} onChange={this.handleChange}></input>
               </div>
               <div>
                  <label htmlFor='temp'>Hot</label>
                  <input type="radio" name="temp" value="Hot" onChange={this.handleChange}></input>
                  <label htmlFor='temp'>Iced</label>
                  <input type="radio" name="temp" value="Iced" onChange={this.handleChange}></input>
               </div>
               <div>
                  <button type="submit">Submit</button>
               </div>
            </form>
            <br />
            <Order teas={this.state.teas}/>
         </div>
      )
   }
}

export default Tea