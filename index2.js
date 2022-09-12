const container = document.querySelector(".container");
 const input = document.querySelector("input");
const url = 'https://strapi-sp2-noroff.herokuapp.com/products';

//we hav our products for a little bit, then it went back
//back to cors problem



async function fetchProducts () {

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

const response = await fetch(url);

  const json = await response.json();

const pushArray2 = [];

  const pushArray = pushArray2.push(json);

  console.log(pushArray);


  const newArray = [];


  




json.forEach( function productsLoop (product) {
  
  const jsonTitle = product.title;



  const pushArray = newArray.push(product.title);





    //newArray = jsonTitle.filter(element => element.length <4)








 //const newArray = jsonTitle.filter(element => element.length <10);


  

  
  

    container.innerHTML += `<a href="details.html?id=${product.id}" class="card">
    <h1>${product.id}</h1></a>`
   })


   console.log(newArray);




   input.addEventListener("input", filterFunction) 


   function filterFunction (e) {
   
   
     const inputValue = e.target.value;



   
     console.log(inputValue);

     function filterInput () {

      const filteredArray = newArray.filter(element => element.includes (inputValue));

      console.log(filteredArray);


    }
    filterInput();
   
     return inputValue;








   }
   

//we need to make an array of the product names



}

fetchProducts();


