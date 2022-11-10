import React, { useState, useEffect } from 'react'


export const Button = (props) => {
  const [play, setPlay] = useState('')
  const [disabled, setDisabled] = useState()
  const result = document.getElementsByClassName('result')
  
  useEffect(() => {
    if(props.counter > 8) {
      result[0].innerHTML = 'empate!'
      setDisabled(true)
    };
    victory()
  })

  const victory = () => {
    const space = document.getElementsByClassName('space')
    const result = document.getElementsByClassName('result')
  
    if (space[0].innerHTML === "X" && space[1].innerHTML === "X" && space[2].innerHTML === 'X') {
      result[0].innerHTML = 'X venceu!';
      setDisabled(true)
    }
    if (space[3].innerHTML === "X" && space[4].innerHTML === "X" && space[5].innerHTML === 'X') {
      result[0].innerHTML = 'X venceu!';
      setDisabled(true)
    }
    if (space[6].innerHTML === "X" && space[7].innerHTML === "X" && space[8].innerHTML === 'X') {
      result[0].innerHTML = 'X venceu!';
      setDisabled(true)
    }
    if (space[0].innerHTML === "X" && space[3].innerHTML === "X" && space[6].innerHTML === 'X') {
      result[0].innerHTML = 'X venceu!';
      setDisabled(true)
    }
    if (space[1].innerHTML === "X" && space[4].innerHTML === "X" && space[7].innerHTML === 'X') {
      result[0].innerHTML = 'X venceu!';
      setDisabled(true)
    }
    if (space[2].innerHTML === "X" && space[5].innerHTML === "X" && space[8].innerHTML === 'X') {
      result[0].innerHTML = 'X venceu!';
      setDisabled(true)
    }
    if (space[0].innerHTML === "X" && space[4].innerHTML === "X" && space[8].innerHTML === 'X') {
      result[0].innerHTML = 'X venceu!';
      setDisabled(true)
    }
    if (space[2].innerHTML === "X" && space[4].innerHTML === "X" && space[6].innerHTML === 'X') {
      result[0].innerHTML = 'X venceu!';
      setDisabled(true)
    }
  
    if (space[0].innerHTML === "O" && space[1].innerHTML === "O" && space[2].innerHTML === 'O') {
      result[0].innerHTML = 'O venceu!';
      setDisabled(true)
    }
    if (space[3].innerHTML === "O" && space[4].innerHTML === "O" && space[5].innerHTML === 'O') {
      result[0].innerHTML = 'O venceu!';
      setDisabled(true)
    }
    if (space[6].innerHTML === "O" && space[7].innerHTML === "O" && space[8].innerHTML === 'O') {
      result[0].innerHTML = 'O venceu!';
      setDisabled(true)
    }
    if (space[0].innerHTML === "O" && space[3].innerHTML === "O" && space[6].innerHTML === 'O') {
      result[0].innerHTML = 'O venceu!';
      setDisabled(true)
    }
    if (space[1].innerHTML === "O" && space[4].innerHTML === "O" && space[7].innerHTML === 'O') {
      result[0].innerHTML = 'O venceu!';
      setDisabled(true)
    }
    if (space[2].innerHTML === "O" && space[5].innerHTML === "O" && space[8].innerHTML === 'O') {
      result[0].innerHTML = 'O venceu!';
      setDisabled(true)
    }
    if (space[0].innerHTML === "O" && space[4].innerHTML === "O" && space[8].innerHTML === 'O') {
      result[0].innerHTML = 'O venceu!';
      setDisabled(true)
    }
    if (space[2].innerHTML === "O" && space[4].innerHTML === "O" && space[6].innerHTML === 'O') {
      result[0].innerHTML = 'O venceu!';
      setDisabled(true)
    }
    if(props.counter >= 8) {

    }
  }

  return (
    <button className='space' disabled={disabled} onClick={() => {
      props.click();
      console.log(props.counter)
      if (props.counter % 2 === 0) {
        setPlay('X')
      } else {
        setPlay('O')
      }
      setDisabled(true)
    }}
    >
      {play}
    </button>
  )
}