import React, {useState, useRef, useEffect} from 'react';
import './forca.css'
const words = require('./sub/words.json')

export const Forca = () => {
  const [word, setWord] = useState('')
  const [letter, setLetter] = useState('')
  const [value, setValue] = useState(letter)
  const [chances, setChances] = useState(10)
  const input = useRef()
  const space = document.getElementsByClassName('letter')
  const [disabled, setDisabled] = useState(false)
  const [win, setWin] = useState(false)
  

  const random = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const generate = () => {
    setWord(words.fiveLetterWords[random(0, (words.fiveLetterWords.length - 1))])
    setDisabled(false)
    setChances(10)
      space[0].innerHTML = ''
      space[1].innerHTML = ''
      space[2].innerHTML = ''
      space[3].innerHTML = ''
      space[4].innerHTML = ''
      setWin(false)
    
  }

  useEffect(() => {
    if(chances <= 0){
      console.log('perdeu');
      setDisabled(true)
    };
    if(
      space[0].innerHTML !== '' &&
      space[1].innerHTML !== '' &&
      space[2].innerHTML !== '' &&
      space[3].innerHTML !== '' &&
      space[4].innerHTML !== ''
    ) {
      console.log('ganhou');
      setDisabled(true)
      setWin(true)
      
    }
    
  })

  const check = () => {
    console.log('check called')
    const splited = word.split('')
    for(let i = 0; i < word.length; i++) {
      if(letter === splited[i]) {
        space[i].innerHTML = letter
      } else {
        console.log('-1 chance')
        setChances(chances - 1)
      }
    }
    setLetter('')
    setValue('')
    
    input.current.focus();
    
  }

  return (
    <div className='container'>
      <div className='word'>
        <button className='letter'></button>
        <button className='letter'></button>
        <button className='letter'></button>
        <button className='letter'></button>
        <button className='letter'></button>
      </div>
      <p className='chances'>Chances: {chances}</p>
      {win? <p>Você ganhou!</p> : null}
      <input ref={input} value={letter} disabled={letter.length >= 1?true:false || disabled} type="text" onChange={(e) => setLetter(e.target.value)}  />
      <button disabled={disabled} className='forca-button' onClick={() => check()}>send</button>
      <button  className='forca-button' onClick={() => generate()}>generate</button>
      {word}
    </div>
  )
}