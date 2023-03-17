import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { GetSingleGov, UpdateGov } from '../../../redux/actions/Governate'
import './EditGovernate.css'
import { getCountriesList } from './../../../redux/actions/country';



export default function EditeGovernate() {
    const { gov } = useSelector(state => state.goverments)
    const { countries } = useSelector(state => state.countries)
    const [state, setState] = useState({
        name: '',
        arName: '',
        ctryName: '',
        arCtryName: ''
    });
    let { nameg } = useParams();

    const [error, setError] = useState("")
    const { name, arName, ctryName, arCtryName } = state
    console.log(state)
    useEffect(() => {
        dispatch(getCountriesList());
    }, []);
    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(GetSingleGov(nameg))
    }, [])
    useEffect(() => {
        if (gov) {
            setState({ ...gov })
        }
    }, [gov])
    const handelSubmet = (e) => {
        e.preventDefault();
        if (!name || !arName || !ctryName || !arCtryName) {
            setError("please input all input field")
        } else {
            console.log(state, 'state')
            dispatch(UpdateGov(state, state._id))
            setError("")
            history.push("/Governate")
        }
    }
    return (
        <>  
            <div className="user "> 
                 <Link to="/governate" className="nav-link  col-12"><button type="button" class="btn btn-btn px-5 ">Back</button></Link>
                 <div className="userTitleContainer ">  
                   <h1 className="userTitle col-10">Edit Gov</h1>
                    <Link to="/AddGovernate"   className="userTitle col-1 me-auto">
                        <button className="btn btn-btn">Create</button>
                    </Link>
                </div>
                <div className="userContainer row ">
                    <div className="userShow col-12 col-md-6">
                        <div className="userShowBottom">
                            <span className="userShowTitle">Governate Details</span>
                            <div className="userShowInfo">
                                <span className="userShowInfoTitle">Name : </span>
                                <span className="userShowInfoTitle">{name || ""}</span>
                            </div>
                            <div className="userShowInfo text-start w-100" dir='rtl'>
                                <span className="userShowInfoTitle">الاسم :</span>
                                <span className="userShowInfoTitle">{arName || ""}</span>
                            </div>
                            <div className="userShowInfo">
                                <span className="userShowInfoTitle">Country Name :</span>
                                <span className="userShowInfoTitle">{ctryName}</span>
                            </div>
                            <div className="userShowInfo" dir='rtl'>
                                <span className="userShowInfoTitle">اسم المدينة :</span>
                                <span className="userShowInfoTitle">{arCtryName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate col-12 col-md-6">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm row " onSubmit={handelSubmet}>
                            <div className="userUpdateLeft col-12">
                                <div className="userUpdateItem">
                                    <label>name</label>
                                    <input
                                        type="text"
                                         placeholder=""
                                        className="userUpdateInput" name="name"
                                        value={name || ""} onChange={handelInputChange}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label dir='rtl'>الاسم</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="userUpdateInput" name="arName"
                                        value={arName || ""} onChange={handelInputChange} />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Country Name</label>
                                    {/* <input
                                        type="text"
                                        placeholder=""
                                        className="userUpdateInput" name="ctryName"
                                        value={ctryName || ""} onChange={handelInputChange} /> */}
                                    <select placeholder="select Category " class="form-control" name="ctryName" id="" onChange={handelInputChange}>
                                        {countries && countries.map((country, index) => {
                                            return (
                                                <option value={country.name} >{country.name}</option>
                                            );
                                        })}</select>
                                </div>
                                <div className="userUpdateItem">
                                    <label dir='rtl'>اسم الدولة</label>
                                    {/* <input
                                        type="text"
                                        placeholder=""
                                        className="userUpdateInput" name="arCtryName"
                                        value={arCtryName || ""} onChange={handelInputChange} /> */}
                                    <select placeholder="select Category " class="form-control" name="arCtryName" id="" onChange={handelInputChange}>
                                        {countries && countries.map((country, index) => {
                                            return (
                                                <option value={country.arName} >{country.arName}</option>
                                            );
                                        })}</select>
                                </div>
                            </div>
                            <div className="userUpdateRight my-3">
                             
                                  
                                <button type="submit" className="btn btn-btn w-50 " style={{ color: "black", fontSize: "14px" }}>Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}