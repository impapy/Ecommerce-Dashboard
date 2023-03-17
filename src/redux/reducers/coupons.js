const initialize = {
    coupons: [],
    coupon: {},

};
export const CouponsReducer = (state = initialize, action) => {
    switch (action.type) {
        case "GET_COUPONS_LIST":
            return {
                ...state,
                coupons: action.payload
            }
        case "DELETE_COUPON":
            return {
                ...state,
                coupons: action.payload
            }
        case "ADD_COUPON":
            state.coupons.push(action.payload)
            return {
                ...state,
                coupons: action.payload
            }
        case "GET_COUPON":

            return {
                ...state,
                coupon: action.payload
            }
        case "EDIT_COUPON":

            return {
                ...state,
                coupons: action.payload
            }
        default:
            return state;
    }
};