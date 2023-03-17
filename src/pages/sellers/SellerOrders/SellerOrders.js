import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { getSellerOrders } from './../../../redux/actions/Seller';
import SellerOrdersTable from "../../../components/SellerOrdersTable/SellerOrdersTable";



export default function SellerOrders() {
    const { sellerOrders } = useSelector(state => state.sellers)
    const dispatch = useDispatch(); 
    let { id } = useParams();
    
    useEffect(() => {
        dispatch(getSellerOrders(id));
    }, []);
    return (
        <div>
            <div className="container table-responsive card">

<table className="table table-borderless  ">
    <thead className="bg-table-th" >
        <tr className="border-bottom ">
            <th className="th1"> <span className=" ml-2 col">#</span> </th>
            <th className="th2"> <span className="ml-2 col">Order_Id</span> </th>
            <th className="th3"> <span className="ml-2 col">Products Number</span> </th>
            <th className="th3"> <span className="ml-2 col">totalPrice</span> </th>
            {/* <th className="th4"> <span className="ml-2 col">Status</span> </th>
            <th className="th5"> <span className="ml-2 col">Cancel</span> </th> */}
        </tr>
    </thead>
    <tbody>
        {sellerOrders && sellerOrders.map((order, index) => {
            return (
                <SellerOrdersTable key={order._id} index={index} orderData={order} />
            );
        })}
    </tbody>
</table>
</div>
        </div>
    )
}
