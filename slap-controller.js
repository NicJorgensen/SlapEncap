function SlapController(){

var dataStore = new SlapService()


function draw(){
    var alice = dataStore.getAlice()
    var madnessElem = document.getElementById("madness")
    var cupElem = document.getElementById("cups")
    var nameElem = document.getElementById("name")
    madnessElem.innerHTML = dataStore.getAlice().madness
    cupElem.innerHTML = dataStore.getAlice().cups
    nameElem.innerHTML = dataStore.getAlice().name
}

function disableBtns() {
    var cups = dataStore.getAlice().cups
    if (cups == 0) {
        document.getElementById("button-active").disabled = true
        document.getElementById("button-active2").disabled = true
        document.getElementById("button-active3").disabled = true
        document.getElementById("button-active4").disabled = true
        document.getElementById("button-active5").disabled = true
        document.getElementById("button-active6").disabled = true
    }
}

function undisableBtns() {
    document.getElementById("button-active").disabled = false
    document.getElementById("button-active2").disabled = false
    document.getElementById("button-active3").disabled = false
    document.getElementById("button-active4").disabled = false
    document.getElementById("button-active5").disabled = false
    document.getElementById("button-active6").disabled = false
}


//public

this.giveItem = function giveItem(itemType){
    dataStore.giveItem(itemType)
}

this.tea = function tea(teaType){
    dataStore.tea(teaType)
    draw()
    disableBtns() 
}

this.reset = function reset(){
    dataStore.reset()
    draw()
    undisableBtns()
}

draw()

}