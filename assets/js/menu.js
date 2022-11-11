// Cart 
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
// Open Cart 
cartIcon.onclick = () => {
    cart.classList.add("active"); 
}; 
// Close Cart 
closeCart.onclick = () => {
    cart.classList.remove("active");
}; 


// Cart Working JS 
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready); 
} else {
    ready(); 
}

// Making Function 
function ready() {
    // Remove Items From Cart 
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // Quantity Changes 
    var quantityInputs = document.getElementsByClassName("cart-quantity"); 
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]; 
        input.addEventListener("change", quantityChanged); 
    }
    // Add to Cart 
    var addCart = document.getElementsByClassName("add-cart"); 
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i]; 
        button.addEventListener("click", addCartClicked); 
    }
}

 // Remove Items From Cart 
 function removeCartItem(event) {
    var buttonClicked = event.target; 
    buttonClicked.parentElement.remove(); 
    updatetotal(); 
}
// Quantity Changes 
function quantityChanged(event) {
    var input = event.target; 
    if (isNaN(input.value) || input.value <= 0) {
    input.value = 1; 
    }
    updatetotal(); 
}
// Add to Cart 
function addCartClicked(event) {
    var button = event.target; 
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg); 
    updatetotal(); 
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div"); 
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0]; 
    var cartItemsNames = document.getElementsByClassName("cart-product-title");  /* cartItems  */ 
    for (var i = 0; i < cartItemsNames.length; i++) {
        alert("Você já adicionou este item ao carrinho");
        return;  
    } 
}


// Update Total 
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = document.getElementsByClassName("cart-box"); /* cartContent */ 
    var total = 0; 
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]; 
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]; 
        var price = parseFloat(priceElement.innerText.replace("$", "")); 
        var quantity = quantityElement.value;
        total = total + price * quantity; 
    }
        // If price Contain some Cents Value 
        total = Math.round(total * 100) / 100; 


        document.getElementsByClassName("total-price")[0].innerText = "$" + total; 
    }
