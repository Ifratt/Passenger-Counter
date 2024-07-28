

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
count = 0

function increment(){
    count += 1
    countEl.innerText = count
    
}
function decrement(){
    count -= 1
    countEl.innerText = count
    
}

function save(){
   let countStr =  count + " - " //first record 
   saveEl.textContent += countStr //and will continue to add to the string
   countEl.innerText = 0
   count = 0
}

function reset(){
    saveEl.innerText = 0
    count = 0

}

