import { ACT_BUY } from "../constant/actionTypes";
import { SHOPPING_CART } from '../constant/cartTypes';

let initialState = [];

//Giỏ hàng được lưu ở localStorage với tên là shoppingCart
let shoppingCart = JSON.parse(localStorage.getItem(SHOPPING_CART));

initialState = (shoppingCart != null && shoppingCart.length > 0) ? shoppingCart : initialState;

const callTotalAmount = (carts) => {
    let totalAmount = 0;
    carts.forEach(cart => {
        totalAmount += cart.quantity * cart.product.price;
    })
    return totalAmount;
}

const getIndexCart = (carts, productId) => {
    for (let i = 0; i < carts.length; i++) {
        if (carts[i].product.productId == productId) {
            return i;
        }
    }
    return -1;
}



const listCartReducer = (state = initialState, action) => {
    switch (action.type) {
        //Mua hàng
        case ACT_BUY:
            //Chưa từng mua hàng
            if (state.length == 0) {
                let cartNew = {
                    product: action.payload.product,
                    quantity: action.payload.quantity
                }
                state = [...state, cartNew];
                localStorage.setItem(SHOPPING_CART, JSON.stringify(state));
                localStorage.setItem('totalAmount', callTotalAmount(state));
                return state

                //Đã từng mua hàng
            } else {
                let index = getIndexCart(state, action.payload.product.productId);
                if (index === -1) {
                    //sản phẩm chưa tồn tại trong giỏ hàng
                    let cartNew = {
                        product: action.payload.product,
                        quantity: action.payload.quantity
                    }
                    state.push(cartNew);
                } else {
                    //sản phẩm đã tồn tại trong giỏ hàng
                    state[index].quantity += parseInt(action.payload.quantity);
                }
                localStorage.setItem(SHOPPING_CART, JSON.stringify(state));
                localStorage.setItem('totalAmount', callTotalAmount(state));
                return [...state];
            }


        default:
            return state

    }
}
export default listCartReducer;