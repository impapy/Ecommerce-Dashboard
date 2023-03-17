const initialize = {
    sellers: [],
    sellerOrders: [],
    seller: {}
};

export const SellersReducer = (state = initialize, action) => {
    switch (action.type) {
        case "GET_Sellers_LIST":
            return {
                ...state,
                sellers: action.payload
            }
        case "GET_Seller_ORDERS":
            return {
                ...state,
                sellerOrders: action.payload
            }
        default:
            return state;
    }
};