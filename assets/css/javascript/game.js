const team1button = document.querySelector("#teamone-shoot-button")
const team1shots = document.querySelector("#teamone-numshots")
const team1goals = document.querySelector("#teamone-numgoals")
const team2button = document.querySelector("#teamtwo-shoot-button")
const team2shots = document.querySelector("#teamtwo-numshots")
const team2goals = document.querySelector("#teamtwo-numgoals")
const resetbutton = document.querySelector("#reset-button")
const numreset = document.querySelector ("#num-resets")



let tea1shots = 0
let tea1goals = 0
let tea2shots = 0
let tea2goals = 0
let NR = 0


team1button.addEventListener("click", function(){
    team1shots.innerHTML = tea1shots += 1
    if (Math.random() <0.5){
        team1goals.innerHTML = tea1goals += 1 

    }
})


team2button.addEventListener("click", function(){
    team2shots.innerHTML = tea2shots += 1
    if (Math.random() <0.5){
        team2goals.innerHTML = tea2goals += 1 
    }
})

resetbutton.addEventListener("click", function(){
    team1goals.innerHTML = tea1goals = 0
    team1shots.innerHTML = tea1shots = 0
    team2shots.innerHTML = tea2shots = 0
    team2goals.innerHTML = tea2goals = 0
    numreset.innerHTML = NR += 1
})

