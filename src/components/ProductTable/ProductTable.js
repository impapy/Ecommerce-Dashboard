import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from '../../redux/actions/Product'
import './ProductTable.css'
import { APIURL } from '../../netWork/netWork';


export default function ProductsTable({ ProductData, keye ,index }) {
    // const APIURL = 'http://localhost:3000/'
    let dispatch = useDispatch()
    const handeldelete = (id) => {
       
            dispatch(deleteProduct(id));

    }
    return (
        <>
            <tr className="border-bottom">
                <td className="col ">
                    <div className="p-2 " > <span className="">{index}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-block "> <span className="d-block font-weight-bold">{ProductData.name.slice(0, 5)}...</span></div>
                        {/* <div className="d-block "> <span className="d-block font-weight-bold">{ProductData.name.slice(0,5)}...</span></div> */}
                    </div>
                    {/* <div className="p-2 d-flex flex-row align-items-center mb-2"> 
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{ProductData.arname.slice(0,5)}...</span></div>
                      </div> */}
                </td>
                <td className="col">
                    <div className="p-2 "> <img src={APIURL + ProductData.imagePath[0]} alt=""  height="50px" /> </div>
                </td>
                <td className="col ">
                    {ProductData.countInStock > 0 && <div className="p-2 d-flex flex-column"> <span className="text-warning">{ProductData.countInStock}</span> </div>}
                    {ProductData.countInStock < 1 && <div className="p-2 d-flex flex-column"> <span className="text-danger">out of stock</span> </div>}
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-column"> <span>
                        
                       
                        
                      {Math.trunc(ProductData.ratings) <= 0 &&  

                      <>  <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star'
                          aria-hidden="true"></i>  
                          <i className='star-rating bi bi-star'
                          aria-hidden="true"></i>
                            <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                          </>
                          
                          
                          
                          ||Math.trunc(ProductData.ratings) ==1 &&
                          <>  <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star'
                          aria-hidden="true"></i>  
                          <i className='star-rating bi bi-star'
                          aria-hidden="true"></i>
                            <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                          </> 
                          ||Math.trunc(ProductData.ratings) ==2 &&
                          <>  <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i>  
                          <i className='star-rating bi bi-star'
                          aria-hidden="true"></i>
                            <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                          </>
                          ||Math.trunc(ProductData.ratings) ==3 &&
                          <>  <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i>  
                          <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i>
                            <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                          </>
                          
                          ||Math.trunc(ProductData.ratings) ==4 &&
                          <>  <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i>  
                          <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i>
                            <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star'
                          aria-hidden="true"></i> 
                          </>
                          ||Math.trunc(ProductData.ratings) ==5 &&
                          <>  <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i>  
                          <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i>
                            <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i> 
                           <i className='star-rating bi bi-star-fill'
                          aria-hidden="true"></i> 
                          </>
                          }






                        
                        
                       </span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-column"> <span>{ProductData.price}$</span> </div>
                </td>
                <td className="col h-100">
                    <div className=" row justify-content-between align-content-center  ">
                        <Link to={'/ReviewsProduct/' + ProductData._id}className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center">
                             <i class="bi bi-eye showicon" data-bs-toggle="tooltip" data-bs-placement="top" title="Review"
                             ></i></Link>
                        <Link to={'/EditProduct/' + ProductData._id} className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center"
                        > <i className="bi bi-pencil-square upicon"data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"></i></Link>
                        <i className="bi bi-trash-fill delicon   col-12 d-flex col-md-4 justify-content-center text-center align-content-center" onClick={() => handeldelete(ProductData._id)}
                        
                        data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
                        ></i> </div>
                </td>
            </tr>

        </>
    );
}