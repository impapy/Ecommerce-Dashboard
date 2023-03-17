import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {deleteUser} from '../../redux/actions/user'
import './UserTable.css'

export default function UserTable({userData}) {
  
  let dispatch=useDispatch()
  const handeldelete =(id)=>{
    dispatch(deleteUser(id));

  }
  

    return (
      <>
 <tr className="border-bottom">
                <td className="col td1">
                    <div className="p-2 " > <span className="d-block font-weight-bold"></span> </div>
                </td>
                <td  className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2"> 
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{userData.name}</span></div>
                    </div>
                </td>
                <td  className="col td3">
                    <div className="p-2"> <span className="font-weight-bold">{userData.email}</span> </div>
                </td>
                <td  className="col td4">
                    <div className="p-2 d-flex flex-column"> <span>{userData.phone}</span> </div>
                </td>
                {userData.isAdmin && <td  className="col td4">
                    <div className="p-2 d-flex flex-column"> <span>Admin</span> </div>
                </td>}
                {userData.isSeller && <td  className="col td4">
                    <div className="p-2 d-flex flex-column"> <span>Seller</span> </div>
                </td>}
                {!userData.isAdmin && !userData.isSeller &&<td  className="col td4">
                    <div className="p-2 d-flex flex-column"> <span>User</span> </div>
                </td>}
               
                <td className="col h-100">
                    <div className=" row justify-content-between align-content-center  ">
                    <Link to={'/UserDetails/' + userData._id}className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center">
                             <i class="bi bi-eye showicon" data-bs-toggle="tooltip" data-bs-placement="top" title="Addresses"
                             ></i></Link>
                      <Link to={'/EditUser/'+userData._id} className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" >
                      <i class="bi bi-pencil-square upicon"></i>
                      </Link> <i class="bi bi-trash-fill delicon   col-12 d-flex col-md-4 justify-content-center text-center align-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={()=>handeldelete(userData._id)}></i> </div>
                </td>
            </tr>    
      </>
    );
  }