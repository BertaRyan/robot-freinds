
import React from 'react'

import Card from "../Card/Card.jsx"
import "./List.css"


const List = ({list}) => {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>You found: {list.length} Robot Friends!</h3>
    <div className={list.length > 0 ? "list-container": ""}>
      
        {list.length > 0 ? list?.map((item) => {
            return <Card key={item.id} item={item} />
        }) : <h2 style={{textAlign: "center", margin: "40px 0 0 0", width: "100%"}}>There was no Robot friends that matched your search..</h2>}
    </div>
      </div>
  )
}

export default List