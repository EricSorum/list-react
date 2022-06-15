import React from 'react'
import styles from '../styles/List.module.css'

const List = (props) => {
   const { people } = props   
   return (
      <ul>
         {people.map((person) => {
            return <div key={person.id} className={styles.card}> 
               <div className={styles.userNumber}>User number: <br />{person.num}</div>
               <div className={styles.screenName}>Welcome, {person.screenName}!</div>
               <div className ={styles.delete}><button className={styles.deleteButton}>Delete</button></div>
               <div className={styles.userName}>Name: {person.firstName} {person.lastName}</div> 
               <div className={styles.email}>Email address: {person.email}</div>
            </div>
         })}
      </ul>
   )
}

export default List