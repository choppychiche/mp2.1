

let shop = document.getElementById('shop-menth1');

let shopItemsData = [
{
    id:"Menthol3mg",
    name: "Menthol",
    price: 180,
    desc: "nicotine: 3mg",
    img: ""
}, 
{
    id:"Menthol6mg",
    name: "Menthol",
    price: 200,
    desc: "nicotine: 6mg",
    img: "images/cof1.jpg"
}, 
{
    id:"Menthol2mg",
    name: "Menthol",
    price: 220,
    desc: "nicotine: 12mg",
    img: "images/cof1.jpg"

},
];

let basket = JSON.parse(localStorage.getItem("cart-data")) || [];


console.log(shop);

let generateShop =() => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name, price, desc, img} = x;
            let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="card" style="width: 13rem; margin-left: 15%;">
            <img src="images/menth1.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h3> ${name} </h3>
              <p class="price-qty"> <h4>${desc}</h4></p>
              <p>Php ${price}</p>
            </div>
            <div class="buttons"> 
                <p>Quantity:</p>
                <i onclick="decrement(${id})" class="bi bi-dash-lg"> </i>
                    <div id=${id} class="quantity">
                    ${search.item === undefined? 0 : search.item}
                    </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
      
    update(selectedItem.id);
    localStorage.setItem("cart-data", JSON.stringify(basket));  
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) return;
    else if(search.item === 0) return;
    else {
        search.item -= 1;
    }
    
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);

    
    localStorage.setItem("cart-data", JSON.stringify(basket));
}; 
let update = (id) => {
    let search = basket.find((x) => x.id === id);
   
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = (basket.map((x) => x.item).reduce((x, y) => x + y, 0));
    
};

calculation();