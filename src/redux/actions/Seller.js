import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getSellerList = () => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.get(`/seller/getSellers`);
        console.log(response)
        dispatch({
            type: "GET_Sellers_LIST",
            payload: response.data
        });
    } catch (err) {
        console.log(err);
    }
};
export const getSellerOrders = (sellerId) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.get(`/seller/sellerOrders/${sellerId}`);
        console.log(response)
        dispatch({
            type: "GET_Seller_ORDERS",
            payload: response.data
        });
    } catch (err) {
        console.log(err);
    }
};