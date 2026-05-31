
import React from 'react'
import "./Card.css"

const Card = ({item}) => {
console.log(item)

const handleClick = (name, email) => {
  alert(`Hello name is ${name}! if you need to contact me email me at ${email}.`)
}

const {name, img, email} = item;
  return (
    <div className="card-container">
      <div className="img-header">
      <img src={img} alt="robots" />
      </div>
      <div className='card-body'>
        <h1>Name: {name}</h1>
        <p>email: {email}</p>
        <button onClick={() => handleClick(name, email)}>CALL NOW</button>
      </div>
        
      
    </div>
  )
}


export default Card