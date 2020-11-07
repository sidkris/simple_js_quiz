let correctAnswers = 0;

let playerRank = " ";

const main = document.querySelector('main')

answ1 = prompt("India's Capital : ");
  if(answ1.toUpperCase = "NEW DELHI"){
    correctAnswers+=1;
  }

answ2 = prompt("China's Capital : ");
  if(answ1.toUpperCase = "BEIJING"){
    correctAnswers+=1;
  }

answ3 = prompt("Japan's Capital : ");
  if(answ1.toUpperCase = "TOKYO"){
    correctAnswers+=1;
  }


answ4 = prompt("Russia's Capital : ");
  if(answ1.toUpperCase = "MOSCOW"){
    correctAnswers+=1;
  }

answ5 = prompt("USA's Capital : ");
  if(answ1.toUpperCase = "WASHINGTON DC"){
    correctAnswers+=1;
  }


if (correctAnswers === 0){
  playerRank = "No Crown";
}
else if (correctAnswers <= 2){
  playerRank = "Bronze";
}
else if (correctAnswers <= 4){
  playerRank = "Silver";
}
else{
  playerRank = "Gold";
}


main.innerHTML = `You got ${correctAnswers} answers correct and your rank is ${playerRank}!`;
