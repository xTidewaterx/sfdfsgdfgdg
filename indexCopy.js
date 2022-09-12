const container = document.querySelector(".container");

const url = 'ttps://strapi-sp2-noroff.herokuapp.com/products';

//we hav our products for a little bit, then it went back
//back to cors problem


async function fetchProducts () {

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

const response = await fetch(url);

  const json = await response.json();

  console.log(json);



fruits.forEach( function productsLoop (product) {


    container.innerHTML += `<a href="details.html?id=${product}" class="card">
    <h1>${product}</h1></a>`
   })

}

fetchProducts();






//details.html::



const detailContainer = document.querySelector(".detailContainer");


const fruits = ["Banana", "Orange", "Apple", "Mango"];




const queryString = document.location.search;

const params = new URLSearchParams(queryString);


const id = params.get("id");

let chosenFruit = fruits.filter(function(chosenElement) {
    return chosenElement == id;
})

console.log(chosenFruit);


//I need an array to adopt the filter method with the value from the url


function fruityLoopy ()  {
chosenFruit.forEach(function publishFruit (fruitjuice) {

    detailContainer.innerHTML = `<h1>${fruitjuice}</h1>
                                <h2>${fruitjuice  + ", we are friends"}`



}) }

fruityLoopy ()