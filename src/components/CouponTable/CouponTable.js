import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCoupon } from "../../redux/actions/coupon";



export default function CouponTable({CouponData,i}) {

  
    let dispatch=useDispatch()
    const handeldelete =(id)=>{
      dispatch(deleteCoupon(id));
  
    }


    return (
        <>
             <tr className="border-bottom">
                <td className="col ">
                    <div className=" " > <span className="d-block font-weight-bold">{i} </span> </div>
                </td>
                <td  className="col ">
                    <div className=" d-flex flex-row align-items-center "> 
                        <div className="d-flex flex-column "> <span className="d-block font-weight-bold">{CouponData.name}</span></div>
                    </div>
                </td>
                <td  className="col ">
                    <div className=""> <span className="font-weight-bold">{CouponData.Rate*100}%</span> </div>
                </td>
                <td  className="col">
                    <div className=" d-flex flex-column"> <span>{CouponData.adminName}</span> </div>
                </td>
               <td  className="col ">
                    <div className=" d-flex flex-column"> <span>{CouponData.createdAt.slice(0,10)}</span> </div>
                </td>
               <td  className="col">
                    <div className=" d-flex flex-column"> <span>{CouponData.ExpiryDate.slice(0,10)}</span> </div>
                </td>
                <td  className="col">
                    <div className=" d-flex flex-column"> <span>{CouponData.countUsers}</span> </div>
                </td>
                <td className="col h-100">
                    <div className=" row justify-content-between align-content-center  ">
             
                      <Link to={'/EditCoupon/'+CouponData._id} className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" >
                      <i class="bi bi-pencil-square upicon"></i>
                      </Link> <i class="bi bi-trash-fill delicon   col-12 d-flex col-md-4 justify-content-center text-center align-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={()=>handeldelete(CouponData._id)} ></i> </div>
                </td>
            </tr>   
        </>
    )
}
