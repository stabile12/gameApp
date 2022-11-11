import './velha.css'
import React, { useState } from 'react'

import { Button } from './sub/button'


export const Velha = () => {
  const [counter, setCounter] = useState(0)
  
  


  return (
    <>
    <table>
      <tbody>
        <tr>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter} /></td>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter} /></td>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter}/></td>
        </tr>
        <tr>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter} /></td>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter} /></td>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter} /></td>
        </tr>
        <tr>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter} /></td>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter} /></td>
          <td><Button click={() => {setCounter(counter + 1)}} counter={counter} /></td>
        </tr>
      </tbody>
    </table>
    <div className='result'></div>
    </>
  )
}