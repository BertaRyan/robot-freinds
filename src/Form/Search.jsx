
import React, {useState} from 'react'
import List from '../List/List'
import "./search.css"

const Search = ({list}) => {
    const [filterValue, setFilterValue] = useState('')

    console.log(list, "here")

    const handleChange = (e) => {
        setFilterValue(e.target.value)
        console.log(filterValue)
    }

    const updatedList = list.filter(i => i.name.includes(filterValue))
  return (
    <div>
      <div className="input-container">
        <h1>Robot Friends!</h1>
        <input className="search-input" placeholder='Find Robot Friends' type="text" value={filterValue} onChange={handleChange} />
      </div>
        
        <List list={updatedList} />
    </div>
  )
}


export default Search