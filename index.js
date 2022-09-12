
//const url = "https://hp-api.herokuapp.com/api/characters";

const url = 'https://strapi-sp2-noroff.herokuapp.com/products';

const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.title.toLowerCase().includes(searchString) ||
            character.description.toLowerCase().includes(searchString)

        );
    });
    displayProducts(filteredCharacters);
});






const loadCharacters2 = async () => {
    try {
        const res = await fetch('https://strapi-sp2-noroff.herokuapp.com/products');
        hpCharacters = await res.json();
        displayProducts(hpCharacters);
        console.log(hpCharacters) //this is our json hpCharacters
    } catch (err) {
        console.error(err);
    }
};


var loadCharacters = async function  ( ) {


    const res = await fetch(url);

    const hpCharacters = await res.json();



   

    displayProducts(hpCharacters);
}

console.log(loadCharacters)

console.log(loadCharacters2)

//what is the difference this and the arrow function lC2 async () =>
// we check constant return values both functions, console.log
//they return the sasme reutrn value 
//there is a problem wehn the input variable e.target is in touch
//one of the functions is a meant to be anonymous function
//the other is a function expresssion


// function expression javascriptt
//


//we have iterations of the same variable that goes through return of .map and then the parameter of our differrent fetch value of the forEach
//filtering happens at the input and sends a new upload to the page 




const displayProducts = (products) => {
    const htmlString = products
        .map((products) => {
            return `
           <a href="details.html?id=${products.id}" <li class="character">
                <h2>${products.title}</h2>
                <h2>${products.description}</h2>
     
            </li> </a>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};


loadCharacters2();



