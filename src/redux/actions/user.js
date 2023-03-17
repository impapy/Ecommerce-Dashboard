import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const getUsersListFilter = (Filter) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/users/Filter/${Filter}`);
    console.log('response', response)
    dispatch({
      type: "GET_USERS_LIST_FILTER",
      payload: response.data.Users,
    });

  } catch (err) {
    console.log(err);
  }
};


export const getUsersList = () => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/users`);
    // console.log('response',response)
    dispatch({
      type: "GET_USERS_LIST",
      payload: response.data.Users,
    });

  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};


export const AddUserAction = (user) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.post('/users/AddNew', user);
    // console.log('AddUserAction',response)
    dispatch({
      type: "ADD_USER",
      payload: response.data[0],
    });
    toast.success(`${response.data[0].name} was added successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};


export const GetSingleUser = (id) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/users/${id}`);
    // console.log('response',response)
    dispatch({
      type: "GET_SINGIL_USER",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UpdateUser = (user, id) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.put(`/users/${id}`, user);
    // console.log('UpdateUser',response)
    dispatch({
      type: "UPDATE_USER",
      payload: response.data,
    });
    toast.success(`${response.data.name} was updated successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.delete(`/users/${id}`);
    const res = await axiosInstance.get(`/users`)
    // console.log('deleteUser',res)
    dispatch({
      type: "DELET_USER",
      payload: res.data,
    });
    toast.success(`${response.data.name} was deleted successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
export var total;
export const getUserPaginationtList = (pag,x) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.post(`/users/pagination?page=${pag}`,x);
    console.log('response', response)
    console.log('responseg', response.data.data)
    total = response.data.pages;
    dispatch({
      type: "GET_USER_LIST_PAGE",
      payload: response.data.data
    });
  } catch (err) {
    console.log(err);
  }
};


export const GetAddressesForUser = (id) => async (dispatch) => {
  try {
    //   console.log(dispatch)id
    const response = await axiosInstance.get(`/address/ForAdmin/${id}`);
    console.log('response', response)
    dispatch({
      type: "GET_ADDRESSES_LIST",
      payload: response.data,
    });

  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const AddAddressForUser = (id,address) => async (dispatch) => {
  try {
      console.log(address)
    const response = await axiosInstance.post(`/address/byAdmin/${id}`, address);
   
    dispatch({
      type: "ADD_USER_ADDRESS",
      payload: response.data,
    });
    toast.success(`Address was added successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
   
  } catch (err) {
    
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};



export const deleteAddress = (id,userId) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.delete(`/address/${id}`);
    const res =await axiosInstance.get(`/address/ForAdmin/${userId}`);
    console.log('deleteUser',res)
    dispatch({
      type: "DELET_ADDRESS",
      payload: res.data,
    });
    toast.success(`Address was deleted successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};



export const GetAddress = (id) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/address/${id}`);
    // console.log('response',response)
    dispatch({
      type: "GET_ADDRESS",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const UpdateAddress = ( id,address) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.put(`/address/${id}`, address);
    // console.log('UpdateUser',response)
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: response.data,
    });
    toast.success(`Address was updated successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};


export const DefaultAddress = (id,userId) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.put(`/address/default/${id}`);
    
    const res =await axiosInstance.get(`/address/ForAdmin/${userId}`);
    // console.log('UpdateUser',response)
    dispatch({
      type: "DEFAULT_ADDRESS",
      payload: res.data,
    });
    toast.success(`Address was updated successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};