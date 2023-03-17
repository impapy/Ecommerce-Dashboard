import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import SellerTable from "../../../components/SellerTable/SellerTable";
import { getSellerList } from './../../../redux/actions/Seller';
import '../../User/Users/Users.css'

export default function Sellers() {
const [searchTerm,setSearchTerm] = useState('')

    const { sellers } = useSelector(state => state.sellers)
    const dispatch = useDispatch(); 

    
    useEffect(() => {
        dispatch(getSellerList());
    }, [dispatch]);
    return (
        <>
            <div className="container ">

                {/* <div className="col-6">
                    <div className=" container my-4 ">
                        <Link to="/AddUser">
                            <button className="btn btn-btn ">New User</button>
                        </Link>
                    </div>

                </div> */}

                {/* <div className=" col-12 col-lg-6 ms-auto row mb-3">
                    <div className="col-6"></div>
                    <div className="col-6">


                        <select placeholder="select " class="form-control w-100 topnav__search " name="status" onChange={handelStatusChange}>
                            <option hidden={true} value=''>select...</option>
                            <option value='Users'>Users</option>
                            <option value='Admins'>Admins</option>
                            <option value='Seler'>Selers</option>

                        </select>


                    </div>

                </div> */}
               <div className="topnav__search col-6 mb-3">
                <input type="text" placeholder='Search here...' onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}/>
                <i className='bx bx-search'></i>
            </div>
                <div className="table-responsive container-fluid card">
 
                    <table className="table table-borderless  ">
                        <thead className="bg-table-th">
                            <tr className="border-bottom ">
                                <th className="th1"> <span className="col">#</span> </th>
                                <th className="th2"> <span className="ml-2 col">Name</span> </th>
                                <th className="th3"> <span className="ml-2 col">Email</span> </th>
                                <th className="th4"> <span className="ml-2 col">Phone</span> </th>
                                <th className="th4"> <span className="ml-2 col">Shop Name</span> </th>
                                <th className="th5"> <span className="ml-2 col">Show orders</span> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {sellers && sellers.filter((val)=>{
                if(searchTerm == ""){
                  return val
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).map((seller, index) => {
                                return (
                                    <SellerTable key={seller._id} sellerData={seller} index={index} />
                                );
                            })}


                        </tbody>
                    </table></div>
            </div>
        </>
    );
}