let countEl = document.getElementById("count-el")
let count = 0
let salesQty = document.getElementById("sales-qty")

//the function for the increment button
function increment() {
    count += 1
    countEl.innerHTML = count
}

//Function to save and display quantity of cupcakes sold per shift 
function save() {
    let displCount = count + " - " 
    salesQty.innerHTML= salesQty.innerHTML + displCount 
    count = 0
    countEl.innerHTML = count
    console.log(count)
}


