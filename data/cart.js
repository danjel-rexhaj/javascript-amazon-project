export const cart = [{
  productId:'36c64692-677f-4f58-b5ec-0dc2cf109e27',
  quantity:2,
}, {
  productId:'aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f',
  quantity:1,
}];

export function addToCart (productId, quantity, productName) {
  
    let matchingItem;
  
  
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
  
    if(matchingItem){
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity,
        name: productName
      });
    }
  }