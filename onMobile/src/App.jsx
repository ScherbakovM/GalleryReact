import { useState } from 'react'
import './App.css'
import { Component } from './Component'
import { Page } from './Page'
import React from 'react'
import { Burger } from './Burger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='syte'>
      <Page />
      </div>
    </>
  )
}

export default App
