
import React from 'react'
import Search from './Form/Search'
import { robotArray } from './assets/Robots'

const App = () => {
  return (
    <div>
        <Search list={robotArray} />
    </div>
  )
}


export default App