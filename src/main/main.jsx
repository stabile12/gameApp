import './main.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  const [nome, setNome] = useState('')
  return (
    <div className='container-main'>
      <p className='title'>Olá! Diga seu nome e escolha um jogo para começar!</p>
      <input type="text" className="name-input" onChange={(e) => setNome(e.target.value)} />
      <Link className='main-button' to={'/velha'}><button className='main-button' >Jogo da velha</button></Link>
      <Link className='main-button' to={'/forca'}><button className='main-button'>Jogo da Forca</button></Link>
      

    </div>


  )
}