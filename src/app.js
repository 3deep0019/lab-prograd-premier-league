//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
let createManager = (managerName, managerAge, currentTeam, trophiesWon) => {
  let arr = [managerName, managerAge, currentTeam, trophiesWon]
  return arr
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
let createFormation = (arr) => {
  if (!arr.length) {
    return null
  }
  let a = [
    {
      'defender': arr[0],
      'midfield': arr[1],
      'forward': arr[2]
    }
  ]
  return a[0]
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
let filterByDebut = (year) => {
  return players.filter((i) => i.debut == year)
}
//Progression 4 - Filter players that play at the position _______
let filterByPosition = (position) => {
  return players.filter((i) => i.position == position)
}
//Progression 5 - Filter players that have won ______ award
let filterByAward = (awardName) => {
  let arr = []
  for (let i of players) {
    for (let j of i.awards) {
      if (j.name == awardName) {
        arr.push(i)
        break
      }
    }
  }
  return arr
}
//Progression 6 - Filter players that won ______ award ____ times
let filterByAwardxTimes = (awardName, noOfTimes) => {
  let arr = []
  for (let i of players) {
    let count = 0
    for (let j of i.awards) {
      if (j.name == awardName) {
        count += 1
      }
    }
    if (count == noOfTimes) {
      arr.push(i)
    }
  }
  return arr
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
let filterByAwardxCountry = (awardName, country) => {
  let arr = filterByAward(awardName)
  let arr2 = []
  for (let i of arr) {
    if (i.country == country) {
      arr2.push(i)
    }
  }
  return arr2
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
let filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => {
  let arr = []
  for (let i of players) {
    if (i.awards.length >= noOfAwards && i.team == team && i.age <= age) {
      arr.push(i)
    }
  }
  return arr
}
//Progression 9 - Sort players in descending order of their age
let SortByAge = () => {
  let tempVal = [...players]
  tempVal.sort((age1, age2) => {
    if (age1.age > age2.age) {
      return -1
    }
    else {
      return 1
    }
  })
  return tempVal
}


//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards() {
  let players1 = players.slice()

  players1.sort((player1, player2) => {
    console.log(player1)
    console.log(player2)

    if (player1.awards.length > player2.awards.length) {
      return -1
    } else {
      return 1
    }
  })
  return players1
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  let choosenPlayers = []
  for (const i of players) {
    if (i.country == country) {
      let count = 0
      for (const j of i.awards) {
        if (awardName = j.name) {
          count++
        }
      }

      if (count) {
        choosenPlayers.push(player)
      }
    }
  }
  return choosenPlayers.sort((player1, player2) => {
    if (player1.name.toUpperCase() > player2.name.toUpperCase()) {
      return 1
    } else {
      return -1
    }
  })
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  let choosenPlayers = []
  for (const player of players) {
    if (player.age >= age) {
      let sortedAwards = player.awards
      sortedAwards.sort((award1, award2) => {
        if (award1.year > award2.year) {
          return -1
        } else {
          return 1
        }
      })

      player.awards = sortedAwards
      choosenPlayers.push(player)
    }
  }

  choosenPlayers.sort((player1, player2) => {
    if (player1.name > player2.name) {
      return 1
    } else {
      return -1
    }
  })
  return choosenPlayers
}