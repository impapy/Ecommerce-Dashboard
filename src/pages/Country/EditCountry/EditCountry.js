import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {  GetSingleCountry, UpdateCountry } from './../../../redux/actions/country';
import './EditCountry.css'

export default function EditCountry() {
    const { country } = useSelector(state => state.countries)
    const dispatch = useDispatch();
    let { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        dispatch(GetSingleCountry(id))
    }, [])

    useEffect(() => {
        if (country) {
            setState({ ...country })
        }
    }, [country])
    const [state, setState] = useState({
        name: '',
        arName: ''
    })
    const [error, setError] = useState("")
    const { name, arName} = state

    console.log("EditCountry..",id)
    console.log("EditCountry..",state)
    
    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };    

    const handelSubmet = (e) => {
        e.preventDefault();
        if (!name || !arName) {
            setError("please enter values in fields")
        } else {
            console.log("handle")
            dispatch(UpdateCountry(state, id))
            setError("")
            history.push("/Countries")
        }
    }
    return (
        <>    
         <Link to="/Countries" className="nav-link">
                                    <button type="button" class="btn btn-btn">Back</button></Link>
            <div className="user ">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Edit Country</h1>
                    <Link to="/AddCountry">
                        <button className="userAddButton btn-btn">Create</button>
                    </Link>
                </div>
                <div className="userContainer row">
                    <div className="userShow col-md-6 col-12">
                        {/* <div className="userShowTop">
                            <i className="bi bi-person-circle fs-1 userShowImg"></i>
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Hanaa Mohammed</span>
                            </div>
                        </div> */}
                        <div className="userShowBottom">
                            <span className="countryShowTitle">Country Details</span>
                            <div className="countryShowInfo">
                                <i className="bi bi-phone countryShowIcon"></i>
                                <span className="countryShowInfoTitle">{name || ""}</span>
                            </div>
                            <div className="userShowInfo">
                                <i className="bi bi-envelope countryShowIcon"></i>
                                <span className="countryShowInfoTitle">{arName || ""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate m-0 ms-md-4 col-md-6 col-12">
                        <span className="userUpdateTitle">Edit</span>
                        <form className=" container-fluid  " onSubmit={handelSubmet}>
                            <div className=" col-12 ">
                                <div className="userUpdateItem">
                                    <label>name</label>
                                    <input
                                        type="text"
                                        placeholder="Egypt"
                                        className="userUpdateInput" name="name"
                                        value={name} onChange={handelInputChange}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label dir='rtl'>الاسم</label>
                                    <input
                                        type="text"
                                        placeholder="مصر"
                                        className="userUpdateInput" name="arName"
                                        value={arName} onChange={handelInputChange} />
                                </div>
                            </div>
                            <div className=" col-12 m-3">                               
                                <button type="submit" className="btn w-100 btn-btn " style={{ color: "black", fontSize: "14px" }}>Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>











            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}








        </>
    );
}