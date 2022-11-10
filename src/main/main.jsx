import './main.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  const [nome, setNome] = useState('')
  return (
    <div className='container-main'>
      <p>Olá! Diga seu nome e escolha um jogo para começar!</p>
      <input onChange={(e) => setNome(e.target.value)}></input>
      <Link to={'/velha'}><button>Jogo da velha</button></Link>
      <Link to={'/forca'}><button>Jogo da Forca</button></Link>
      

    </div>


  )
}