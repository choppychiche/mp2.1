

let shop = document.getElementById('shop-pas1');

let shopItemsData = [
{
    id:"Pastry3mg",
    name: "Pastry",
    price: 180,
    desc: "nicotine: 3mg",
    img: ""
}, 
{
    id:"Pastry6mg",
    name: "Pastry",
    price: 200,
    desc: "nicotine: 6mg",
    img: "images/cof1.jpg"
}, 
{
    id:"Pastry12mg",
    name: "Pastry",
    price: 220,
    desc: "nicotine: 12mg",
    img: "images/cof1.jpg"

},]

let basket = [{
    
}];


console.log(shop);

let generateShop =() => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name, price, desc, img} = x
        return `
        <div id=product-id-${id} class="card" style="width: 13rem; margin-left: 15%;">
            <img src="images/pas1.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h3> ${name} </h3>
              <p class="price-qty"> <h4>${desc}</h4></p>
              <p>Php ${price}</p>
            </div>
            <div class="buttons"> 
                <p>Quantity:</p>
                <i onclick="decrement(${id})" class="bi bi-dash-lg"> </i>
                    <div id=${id} class="quantity">0</div>
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
    
    // console.log(basket);
    update(selectedItem.id);
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search.item === 0) return;
     else {
        search.item -= 1;
    }
   
    // console.log(basket);
    update(selectedItem.id);
}; 
let update = (id) => {
    let search = basket.find((x) => x.id === id );
   //  console.log(search);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = (basket.map((x) => x.item).reduce((x, y) => x + y, 0));
    
};