
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { GetSingleCity, UpdateCity } from '../../../redux/actions/Cities'
import './EditCities.css'
import { getAllGovernment } from './../../../redux/actions/Governate';



export default function EditeCity() {
    const { city } = useSelector(state => state.Cities)
    const { govers } = useSelector(state => state.goverments)
    // console.log(c)
    const [state, setState] = useState({
        name: '',
        arName: '',
        governateName: '',
        arGovernateName: ''
    });
    let { id } = useParams();
    // console.log(id)
    const [error, setError] = useState("")

    const { name, arName, governateName, arGovernateName } = state
    console.log(state)
    useEffect(() => {
        dispatch(getAllGovernment());
    }, []);
    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(GetSingleCity(id))
    }, [])

    useEffect(() => {
        if (city) {
            setState({ ...city })
        }
    }, [city])

    const handelSubmet = (e) => {
        e.preventDefault();
        if (!name || !arName || !governateName || !arGovernateName) {
            setError("please input all input field")
        } else {
            // console.log(state,'state')
            dispatch(UpdateCity(state, id))
            setError("")
            history.push("/Cities")
        }
    }
    return (
        <>
            <Link to="/governate" className="nav-link">
                <button type="button" class="btn btn-btn">Back</button></Link>

            <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Edit city</h1>
                    <Link to="/AddGovernate">
                        <button className="userAddButton btn-btn">Create</button>
                    </Link>
                </div>
                <div className=" row">
                    <div className="userShow col-12 col-lg-6">
                        <div className="userShowBottom">
                            <span className="userShowTitle">City Details</span>
                            <div className="userShowInfo">
                                <span className="userShowInfoTitle">Name : </span>
                                <span className="userShowInfoTitle">{name || ""}</span>
                            </div>
                            <div className="userShowInfo">
                                <span className="userShowInfoTitle">الاسم</span>
                                <span className="userShowInfoTitle">{arName || ""}</span>
                            </div>
                            <div className="userShowInfo">
                                <span className="userShowInfoTitle">City Name :</span>
                                <span className="userShowInfoTitle">{governateName || ""}</span>
                            </div>
                            <div className="userShowInfo">
                                <span className="userShowInfoTitle">المدينة</span>
                                <span className="userShowInfoTitle">{arGovernateName || ""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate  col-12 col-lg-6">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm row" onSubmit={handelSubmet}>
                            <div className="userUpdateLeft co1-12 col-lg-6">
                                <div className="userUpdateItem">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="userUpdateInput" name="name"
                                        value={name || ""} onChange={handelInputChange}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>الاسم</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="userUpdateInput" name="arName"
                                        value={arName || ""} onChange={handelInputChange} />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Governate Name</label>
                                    {/* <input
                                        type="text"
                                        placeholder=""
                                        className="userUpdateInput" name="governateName"
                                        value={governateName || ""} onChange={handelInputChange} /> */}
                                    <select placeholder="select Category " class="form-control" name="governateName" id="" onChange={handelInputChange}>
                                        {govers && govers.map((country, index) => {
                                            return (
                                                <option value={country.name} >{country.name}</option>
                                            );
                                        })}</select>
                                </div>
                                <div className="userUpdateItem">
                                    <label>المحافظة</label>
                                    {/* <input
                                        type="text"
                                        placeholder=""
                                        className="userUpdateInput" name="arGovernateName"
                                        value={arGovernateName || ""} onChange={handelInputChange} /> */}
                                    <select placeholder="select Category " class="form-control" name="arGovernateName" id="" onChange={handelInputChange}>
                                        {govers && govers.map((country, index) => {
                                            return (
                                                <option value={country.arName} >{country.arName}</option>
                                            );
                                        })}</select>
                                </div>
                            </div>
                            <div className="userUpdateRight co1-12 col-lg-6 p-5">
                                <button type="submit" className="btn btn-btn m-auto w-50" style={{ color: "black", fontSize: "14px" }}>Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}