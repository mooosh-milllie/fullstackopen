import React from "react";


const Show = ({persons, onClick}) => {

  return (
    <div>
      <h2>Numbers</h2>
      <ul id='number-list'>
        {persons.map((person, i) => <li key={person.id}>{person.name}: {person.number} <button value={person.id} onClick={()=> onClick(person.id)}>ÐêⱠê†ê</button></li>)}
      </ul>
    </div>
  )
}

export default Show;