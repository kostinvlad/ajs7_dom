import "../css/style.css"
let counter = 0;
let misses = -1;

let chunkGoblin = `<div id="goblin"><img src="https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png"></div>`
function randomCell() {    
    return function returner (previous) {
        let number = Math.floor(Math.random() * 17)    
        if(number !== 0 && number !== previous){
            previous = number
            return number
        }
        else {            
            return returner()
        } 
    }
}

console.log(randomCell()(0))
document.getElementById('start').addEventListener('click', () => {
    document.getElementById(randomCell()(0)).innerHTML = chunkGoblin
    document.getElementById('goblin').addEventListener("click", () => {
        counter++
        document.getElementById('score').innerHTML = `<span> Score: ${counter}</span>`
        
    }) 
    let game = setInterval(() => {
        if(document.getElementById('goblin')){
            if(counter === 10){
                clearInterval(game)
                alert("Вы выйграли")
            } else if (counter < misses){
                clearInterval(game)
                alert("Вы проиграли")
            }
            misses++
            document.getElementById('goblin').parentElement.innerHTML = ""
        }
        document.getElementById(randomCell()(0)).innerHTML = chunkGoblin
        document.getElementById('goblin').addEventListener("click", () => {
            counter++
            document.getElementById('score').innerHTML = `<span> Score: ${counter}</span>`
        })
    },1000)
})
