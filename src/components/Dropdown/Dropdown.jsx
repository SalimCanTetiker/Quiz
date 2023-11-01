import React from 'react'

import './Dropdown.css'

const Dropdown = ({data, setDifficultyData}) => {
  return (
    <div>
      <select onChange={e => setDifficultyData(e.target.value)}>
        {
          data.map((dt) => (
            <option value={dt}>{dt}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown