import React from 'react'
import styles from '../styles/Order.module.css'

const Order = (props) => {
   const { teas } = props
   return (
      <ul className={styles.order}>
         {teas.map((tea) => {
            return (
               <div key={tea.id}>
                  <h3>{tea.type} Tea</h3>
                  <div>{tea.size}</div>
                  <div>{tea.syrup}</div>
                  {tea.bubbles && <div>with Bubbles</div>}
                  {tea.milk && <div>with Sweetened Condensed Milk</div>}
                  {tea.temp ? 'iced' : <div>Iced</div>}
               </div>
               )
            }
         )}
      </ul>
   )
}

export default Order