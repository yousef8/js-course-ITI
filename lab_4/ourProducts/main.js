
function addProduct(img, title, price, categ) {
  var products = document.getElementsByClassName("products")
  products[0].innerHTML += `<div class="product">
        <div class="product-img">
          <img src="${img}" alt="product image">
        </div>

        <div class="info">
          <div class="name">${title}</div>
          <div class="price-sec">Price: ${price}</div>
          <div class="category-sec">Category: ${categ}</div>
        </div>
      </div>
      `;
}

fetch('https://fakestoreapi.com/products/')
  .then(res => res.json())
  .then(json => {
    json.forEach(element => {
      addProduct(element.image, element.title, element.price, element.category)
    });
  })
