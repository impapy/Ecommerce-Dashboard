import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AddCoupon } from '../../redux/actions/coupon';



export default function AddCoupons() {

    const [state, setState] = useState({
        name: '',
        Rate:0.1,
        ExpiryDate:new Date
      
    });

    const [error, setError] = useState("")

    const { name, Rate, ExpiryDate} = state

    const handelInputChange = (e) => {

        let { name, value } = e.target;
        setState({ ...state, [name]: value })
   
    };
    const dispatch = useDispatch();
    const history = useHistory();


    const handelSubmet = (e) => {
    
        e.preventDefault();
        if (!name || !Rate || !ExpiryDate ) {
            setError("please enter values in fields")
        } else {
            dispatch(AddCoupon(state))
            setError("")
            history.push("/Coupons") 
        }
    }



    return (
        <>
        <Link to="/Coupons" className="nav-link m-3">
            <button type="button" class="btn btn-btn">Back</button></Link>

        <div className="container p-0  d-flex flex-column justify-content-center">
      
            <div className="col-12 d-flex justify-content-center">
                <div className="form card">
                    <form className="row g-3" onSubmit={handelSubmet}>
                        <h4 className="fs-3">Add Coupon</h4>
                        {error && <h3 style={{ color: "red" }}>{error}</h3>}
                        <div className="col-md-12">
                            <label className="form-label fw-bold" style={{ fontSize: "13px" }}>Coupon Code </label>
                            <input type="text" className="form-control" id="inputpassn" name="name"
                                placeholder="Coupon Code " value={name} onChange={handelInputChange} />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label fw-bold" style={{ fontSize: "13px" }}>Rate </label>
                            <input type="number`" className="form-control" id="inputpassp" name="Rate"
                                placeholder="20%" value={Rate} onChange={handelInputChange} />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label fw-bold" style={{ fontSize: "13px" }}>Expiry Date </label>
                            <input type="date" className="form-control" id="inputemail4" name="ExpiryDate"
                                placeholder="2022-1-1" value={ExpiryDate} onChange={handelInputChange} />
                        </div>
             
                        <div className="col-12 p-3">
                            <button type="submit" className="btn w-100 btn-btn" style={{ color: "black", fontSize: "14px" }}
                            >Add</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </>
    )
}
