import React from 'react'

const List = (props) => {
   const { people } = props   
   return (
      <ul>
         {people.map((person) => {
            return <li key={person.id}> {person.num}|{person.firstName} |{person.lastName}</li>
         })}
      </ul>
   )
}

export default List