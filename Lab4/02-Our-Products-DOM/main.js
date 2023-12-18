let products = {};

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then(() => {
    (json) => console.log(json);
    products = js;
  });

console.log(products);

let card = document.getElementById("card");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => {
    let products = res;
    products.forEach((p) => {
      card.innerHTML += `
    <div class="card">
        <img src="${p.image}" >
        <div class="desc">
        <h2>${p.title}</h2>
        <p>Price: ${p.price}$</p>
        <p>Category: ${p.category}</p>
        </div>
    </div>
`;
    });
  })
  .catch((err) => {
    console.log(err);
  });
