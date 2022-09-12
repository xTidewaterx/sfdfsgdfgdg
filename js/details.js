const detailContainer = document.querySelector(".detailContainer");


const fruits = ["Banana", "Orange", "Apple", "Mango"];




const queryString = document.location.search;

const params = new URLSearchParams(queryString);


const id = params.get("id");

let chosenFruit = fruits.filter(function(chosenElement) {
    return chosenElement == id;
})

console.log(id);

const url = "https://strapi-sp2-noroff.herokuapp.com/products/?id="  + id;



console.log(chosenFruit);


//I need an array to adopt the filter method with the value from the url





async function fetchProducts() {

    const response = await fetch(url);

    const json = await response.json();


json.forEach(function publishFruit (fruitjuice) {

    detailContainer.innerHTML = `<h1>${fruitjuice.id}</h1>
                                <h2>${fruitjuice.description  + ", we are friends"}`



}) 


}

fetchProducts();