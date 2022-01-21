import React from "react";


const Form = ({addName, filterPhonebook, handleChange, handlePhone}) => {

  return (
    <div id="add-name-div">
      <h4>Filter Phonebook</h4>
      <div>
        <input 
          onChange={filterPhonebook} 
          placeholder='filter phonebook'
        />
      </div>
      <br />
      <br />
      <form onSubmit={addName}>
        <div>
          name: <input id="input-name" onChange={handleChange} />
        </div>
        <div>
          number: <input id="input-num" onChange={handlePhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form;