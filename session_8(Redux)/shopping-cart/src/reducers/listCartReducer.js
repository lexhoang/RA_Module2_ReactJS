import * as actionTypes from "../constant/actionTypes";

const initialState = [];

// Lấy dữ liệu trên localStorage
let getListCart = JSON.parse(localStorage.getItem("shoppingCart"));
let initialCart = getListCart !== null && getListCart.length > 0 ? getListCart : initialState;


/**
 * List cartredurce
 * @param {*} state
 * @param {*} action
 * @returns
 */

const listCartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case actionTypes.ACT_BUY:
            // console.log("sản phẩm được mua: ", action.payload.product);
            // console.log("số lượng được mua: ", action.payload.quantity);
            // console.log(state);

            let index = getIndexCart(state, action.payload.product)
            if (index !== -1) {
                state[index].quantity += parseInt(action.payload.quantity)
            } else {
                state = [...state, action.payload];
            }
            localStorage.setItem("shoppingCart", JSON.stringify(state));
            localStorage.setItem("totalBill", JSON.stringify(TOTAL_BILL(state)));
            // console.log("sản phẩm trong giỏ hàng: ", state);
            return [...state];


        case actionTypes.ACT_UPDATE:
            let indexEdit = getIndexCart(state, action.payload.product)
            state[indexEdit].quantity = action.payload.quantity;
            localStorage.setItem("shoppingCart", JSON.stringify(state));
            localStorage.setItem("totalBill", JSON.stringify(TOTAL_BILL(state)));
            return [...state];

        case actionTypes.ACT_DELETE:
            let newListProduct = state.filter((listProduct) =>
                listProduct.product.productId != action.payload);
            localStorage.setItem("shoppingCart", JSON.stringify(newListProduct));
            localStorage.setItem("totalBill", JSON.stringify(TOTAL_BILL(newListProduct)));
            return newListProduct;


        default:
            return state
    }
}

/**
 * Lấy ra vị trí của product trong listcart
 * @param {*} listCarts
 * @param {*} product
 * @returns Vị trí của product trong listcart
 * CreatedDate: 16/02/2023
 * CreatedBy: nvquy
 * ModifiedDate:
 * ModifiedBy:
 */

const getIndexCart = (listCarts, product) => {
    for (let index = 0; index < listCarts.length; index++) {
        if (listCarts[index].product.productId === product.productId) {
            return index;
        }
    }
    return -1;
}


const TOTAL_BILL = (listCart) => {
    let total = 0;
    listCart.forEach((cart) => {
        total += parseInt(cart.product.price * cart.quantity)
    })
    return total;
}

export default listCartReducer;