import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './SellerTable.css'

export default function SellerTable({sellerData}) {
  
 
  

    return (
      <>
 <tr className="border-bottom">
                <td className="col td1">
                    <div className="p-2 " > <span className="d-block font-weight-bold"></span> </div>
                </td>
                <td  className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2"> 
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{sellerData.name}</span></div>
                    </div>
                </td>
                <td  className="col td3">
                    <div className="p-2"> <span className="font-weight-bold">{sellerData.email}</span> </div>
                </td>
                <td  className="col td4">
                    <div className="p-2 d-flex flex-column"> <span>{sellerData.phone}</span> </div>
                </td>
                <td  className="col td4">
                    <div className="p-2 d-flex flex-column"> <span>{sellerData.shop?.shopName}</span> </div>
                </td>
                <td className="col h-100">
                    <div className=" row justify-content-between align-content-center  ">
                    <Link to={'/seller-orders/' + sellerData._id}className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center">
                             <i class="bi bi-eye showicon" data-bs-toggle="tooltip" data-bs-placement="top" title="orders"
                             ></i></Link>
                      </div>
                </td>
            </tr>    
      </>
    );
  }