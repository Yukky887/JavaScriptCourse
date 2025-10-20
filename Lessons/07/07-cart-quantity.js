let cartQuantity = 0;	

function updateCart(element) {
    cartQuantity += element;

    if (cartQuantity >= 11) {
        alert('The cart is full');
        cartQuantity = 10;
        return;

    } else if (cartQuantity <= -1) {
        alert('Not enough items in the cart')
        cartQuantity = 0;
        return;
    }

    console.log(`Cart quantity: ${cartQuantity}`)
}