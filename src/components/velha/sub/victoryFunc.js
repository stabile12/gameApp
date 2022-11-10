export const victory = (win = true) => {
  const space = document.getElementsByClassName('space')
  const result = document.getElementsByClassName('result')

  if (space[0].innerHTML === "X" && space[1].innerHTML === "X" && space[2].innerHTML === 'X') {
    result[0].innerHTML = 'X venceu!';
    
  }
  if (space[3].innerHTML === "X" && space[4].innerHTML === "X" && space[5].innerHTML === 'X') {
    result[0].innerHTML = 'X venceu!';
  }
  if (space[6].innerHTML === "X" && space[7].innerHTML === "X" && space[8].innerHTML === 'X') {
    result[0].innerHTML = 'X venceu!';
  }
  if (space[0].innerHTML === "X" && space[3].innerHTML === "X" && space[6].innerHTML === 'X') {
    result[0].innerHTML = 'X venceu!';
  }
  if (space[1].innerHTML === "X" && space[4].innerHTML === "X" && space[7].innerHTML === 'X') {
    result[0].innerHTML = 'X venceu!';
  }
  if (space[2].innerHTML === "X" && space[5].innerHTML === "X" && space[8].innerHTML === 'X') {
    result[0].innerHTML = 'X venceu!';
  }
  if (space[0].innerHTML === "X" && space[4].innerHTML === "X" && space[8].innerHTML === 'X') {
    result[0].innerHTML = 'X venceu!';
  }
  if (space[2].innerHTML === "X" && space[4].innerHTML === "X" && space[6].innerHTML === 'X') {
    result[0].innerHTML = 'X venceu!';
  }

  if (space[0].innerHTML === "O" && space[1].innerHTML === "O" && space[2].innerHTML === 'O') {
    result[0].innerHTML = 'O venceu!';
  }
  if (space[3].innerHTML === "O" && space[4].innerHTML === "O" && space[5].innerHTML === 'O') {
    result[0].innerHTML = 'O venceu!';
  }
  if (space[6].innerHTML === "O" && space[7].innerHTML === "O" && space[8].innerHTML === 'O') {
    result[0].innerHTML = 'O venceu!';
  }
  if (space[0].innerHTML === "O" && space[3].innerHTML === "O" && space[6].innerHTML === 'O') {
    result[0].innerHTML = 'O venceu!';
  }
  if (space[1].innerHTML === "O" && space[4].innerHTML === "O" && space[7].innerHTML === 'O') {
    result[0].innerHTML = 'O venceu!';
  }
  if (space[2].innerHTML === "O" && space[5].innerHTML === "O" && space[8].innerHTML === 'O') {
    result[0].innerHTML = 'O venceu!';
  }
  if (space[0].innerHTML === "O" && space[4].innerHTML === "O" && space[8].innerHTML === 'O') {
    result[0].innerHTML = 'O venceu!';
  }
  if (space[2].innerHTML === "O" && space[4].innerHTML === "O" && space[6].innerHTML === 'O') {
    result[0].innerHTML = 'O venceu!';
  }
}