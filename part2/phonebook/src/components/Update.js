import React from "react";


const UpdateForm = ({updateName, handleChange, handlePhone}) => {

  return (
    <div id="update-name-div" style={{ display: 'none' }} >
      <form onSubmit={updateName}>
        <div>
          name: <input id="update-input-name" onChange={handleChange} />
        </div>
        <div>
          number: <input id="update-input-num" onChange={handlePhone}/>
        </div>
        <div>
          <button type="submit">update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateForm;