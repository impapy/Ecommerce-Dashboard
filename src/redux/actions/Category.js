import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = { headers:{
  'content-type': 'multipart/form-data; boundary=--------------------------037384031508980924639346'

} };
export const getCategoryList = () => async (dispatch) => {
    try {
      //   console.log(dispatch)
      const response = await axiosInstance.get(`/category`); 
        console.log('getCategoryList',response)
      dispatch({
        type: "GET_Category_LIST",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };



  export const deleteCategory = (name) => async (dispatch) => {
    try {
      
      //   console.log(dispatch)
      console.log(name);
      const response = await axiosInstance.delete(`/category/${name}`); 
      console.log('deleteCategory',response)
      dispatch({
        type: "DELET_Category",
        payload: response.data,
      });
      toast.success(`Item was deleted successfully`, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err);
      toast.error(`${err.message} `, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
  };


  export const deleteSubCategory = (name) => async (dispatch) => {
    try {
      //   console.log(dispatch)
        console.log("deleteSubCategory====",name)
      const response = await axiosInstance.delete(`/category/SubCategory/${name}`); 
      console.log('deleteSubCategory',response)
      const res = await axiosInstance.get(`/category`);
      console.log('Category',res)
      dispatch({
        type: "DELET_SubCategory",
        payload: response.data,
      });
      toast.success(`Item was deleted successfully`, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err);
      toast.error(`${err.message} `, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
};

  export const AddCategory = (category) => async (dispatch) => {
    try {
      //   console.log(dispatch)
      const response = await axiosInstance.post('/category/Admin',category,config); 
      // console.log('AddCategory',response)
      dispatch({
        type: "ADD_Category",
        payload: response.data,
      });
      toast.success(`Item was added successfully`, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err);
      toast.error(`${err.message} `, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
};


export const UpdateCategory = (Category , id) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.put(`/category/${id}`,Category,config); 
    console.log('response to update',response)
    dispatch({
      type: "UPDATE_Category",
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


export const UpdateSubCategory = (Category , id) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.put(`/category/SubCategory/${id}`,Category,config); 
    console.log('UpdateSubCategory',response)
    dispatch({
      type: "UPDATE_SubCategory",
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


export const GetSingleCategory = (name) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/category/Admin/speciefic/${name}`); 
    
    console.log('GetSingleCategory',response)
    dispatch({
      type: "GET_SINGIL_Category",
      payload: response.data,
 
    });
  } catch (err) {
    console.log(err);
  }
};
export const GetSingleSubCategory = (id) => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/category/Admin/SubCategory/${id}`); 
    
    console.log('response',response)
    dispatch({
      type: "GET_SINGIL_SubCategory",
      payload: response.data,
 
    });
  } catch (err) {
    console.log(err);
  }
};

///////////////
export const getCategoryListAll = () => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/category/getall/Admin`); 
     console.log('getCategoryListAll',response)
    dispatch({
      type: "GET_Category_LIST_ALL",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export var total;
export const getCategoryPaginationtList = (pag) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.post(`/category/pagination?page=${pag}`);
        // console.log('getCategoryPaginationtList',response)
        // console.log('responseg',response.data.data)
        total = response.data.pages;
        dispatch({
            type: "GET_CATEGORT_LIST_PAGE",
            payload: response.data.data
        });
    } catch (err) {
        console.log(err);
    }
};