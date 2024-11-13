const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = (mongerPriceLimit)=>{
   const currentBoatInventory = boatInventory()
   const inventory = []
   for (const fish of currentBoatInventory) {
        if (fish.price<= mongerPriceLimit && fish.amount>=10){
            fish.amount = 10
            fish.amount /= 2
            inventory.push(fish)
        }
    }
    return inventory
   
}
//console.log(mongerInventory(7.50))

module.exports = {
    mongerInventory
}



//yey
// imported the boatInventory from fishingBoat.js to fishMonger.js
// const {boatInventory} = require("./fishingBoat.js") this is for my destination
// we must export mongerInventory function
// make sure function picks fish that are 7.50 and less in price
// make sure function picks fish that there are 10 or more of in quantity
// function needs to loop through each object in boatInventory 
// need to declare an empty array 
// push the fish that meet the requirements into the empty array

//export mongerInventory

