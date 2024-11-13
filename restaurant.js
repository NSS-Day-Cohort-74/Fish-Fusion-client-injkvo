const { mongerInventory } = require("./fishMonger.js")

const fishMenu = (chefPrice) => {
    const inventory = mongerInventory(chefPrice)
    let menuItem = inventory.map((chefFish)=>
            `\n <h2>${chefFish.species}</h2> \n
            \t  <section class="menu__item">${chefFish.species} soup</section> \n
            \t  <section class="menu__item">${chefFish.species} sandwich</section> \n
            \t  <section class="menu__item">Grilled ${chefFish.species}</section>`).join(' ')

    let menuItems = `<h1>Menu</h1> 
                    \n<article class="menu">
                    \n ${menuItem}
                    \n </article>`
    return menuItems
            
    } 
           

module.exports = {
    fishMenu
}



//Check the array of fish from the monger 
//to see if it meets the price requirements.
//If it meets the requirements.
//The chef creates a menu using the chef's purchased fish.
//Each fish will make a soup version, sandwich version, and a grilled version.