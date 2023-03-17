import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const getCouponsList = () => async (dispatch) => {
    try {
   
      const response = await axiosInstance.get(`/coupon/all`); 
        console.log('getCouponsList',response)
      dispatch({
        type: "GET_COUPONS_LIST",
        payload: response.data,
      });
  
    } catch (err) {
        console.log(err);
        toast.error(`${err.message} `, {
          position: toast.POSITION.TOP_RIGHT,
        });
    }
  };


  export const deleteCoupon = (id) => async (dispatch) => {
    try {
        const response = await axiosInstance.delete(`/coupon/${id}`);
        const res = await axiosInstance.get(`/coupon/all`);
        console.log('deleteCoupon',res)
        dispatch({
            type: "DELETE_COUPON",
            payload: res.data,
        });
        toast.success(`COUPON was deleted successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {
        console.log(err);
        toast.error(`${err.message} `, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};




export const AddCoupon = (coupon) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.post('/coupon', coupon);
        const res = await axiosInstance.get(`/coupon/all`);
        console.log('AddCoupon ', response)
        dispatch({
            type: "ADD_COUPON",
            payload: res.data,
        });
        toast.success(`${response.data.name} was added successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {
        console.log(err);
        toast.error(`${err.message} `, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};



export const GetCoupon = (id) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.get(`/coupon/${id}`);

        console.log('GetCoupon ', response)
        dispatch({
            type: "GET_COUPON",
            payload: response.data,
        });
      
    } catch (err) {
        console.log(err);
        toast.error(`${err.message} `, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};


export const updateCoupon = (id,coupon) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.put(`/coupon/${id}`, coupon);
        const res = await axiosInstance.get(`/coupon/all`);
        console.log('editCoupon ', response)
        dispatch({
            type: "EDIT_COUPON",
            payload: res.data,
        });
        toast.success(`${response.data.name} was edit successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {
        console.log(err);
        toast.error(`${err.message} `, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};