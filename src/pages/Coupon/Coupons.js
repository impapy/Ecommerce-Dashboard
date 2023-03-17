import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import CouponTable from "../../components/CouponTable/CouponTable";
import { getCouponsList } from "../../redux/actions/coupon";

export default function Coupon() {
    const [searchTerm,setSearchTerm] = useState('')

    const { coupons } = useSelector(state => state.coupons)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCouponsList())

    }, [dispatch]);


    return (
        <>

            <div className="container ">

                <div className="col-6">
                    <div className=" container my-4 ">
                        <Link to="/AddCoupon">
                            <button className="btn btn-btn ">New Coupon</button>
                        </Link>
                    </div>

                </div>


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
                                <th > <span className="col">#</span> </th>
                                <th > <span className="ml-2 col">Coupon Code </span> </th>
                                <th> <span className="ml-2 col">Rate</span> </th>
                                <th > <span className="ml-2 col">Owner</span> </th>
                                <th > <span className="ml-2 col">Date created</span> </th>
                                <th > <span className="ml-2 col">Expiry Date </span> </th>
                                <th > <span className="ml-2 col"> Count Users</span> </th>

                                <th> <span className="ml-2 col">Action</span> </th>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {coupons && coupons.filter((val)=>{
                if(searchTerm == ""){
                  return val
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).map((coupon, index) => {
                                return (
                                    <CouponTable key={index} i={index} CouponData={coupon} />
                                );
                            })}

                        </tbody>
                    </table>
                    </div>
            </div>
        </>
    )
}
