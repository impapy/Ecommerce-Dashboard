import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { GetSingleUser, GetAddressesForUser, deleteAddress, DefaultAddress } from './../../../redux/actions/user';
import AddAddress from './AddAddress';
import EditAddress from './EditAddress';

export default function UserDetails() {


    const { user } = useSelector(state => state.users)
    const { addresses } = useSelector(state => state.users)




    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetSingleUser(id))
    }, [])
    useEffect(() => {
        dispatch(GetAddressesForUser(id))

    }, [])

    const handDelete = (AddressId) => {
        dispatch(deleteAddress(AddressId, id))
    }


    const handDefault = (AddressId) => {
        dispatch(DefaultAddress(AddressId, id))
    }





    return (
        <>
            <div className="container">
                <div className="userTitleContainer">
                    <h1 className="userTitle">User Details</h1>
                </div>

                <div className="container mt-5 mb-5 mx-auto">
                    <div className="row">
                    <div className="row   my-md-3 col-12 col-lg-6">

                        <div className="  card  col-12">
                            <div className="userShowTop">
                                <i className="bi bi-person-circle fs-1 userShowImg"></i>
                                <div className="userShowTopTitle">
                                    {/* <span className="userShowUsername">Anna Becker</span> */}
                                </div>
                            </div>
                            <div className="userShowBottom">
                                <span className="userShowTitle">Account Details</span>
                                <div className="userShowInfo">
                                    <i className="bi bi-file-person userShowIcon"></i>

                                    <span className="userShowInfoTitle">{user.name || ""}</span>
                                </div>

                                <span className="userShowTitle">Contact Details</span>
                                <div className="userShowInfo">
                                    <i className="bi bi-phone userShowIcon"></i>

                                    <span className="userShowInfoTitle">{user.phone || ""}</span>
                                </div>
                                <div className="userShowInfo">
                                    <i className="bi bi-envelope userShowIcon"></i>

                                    <span className="userShowInfoTitle">{user.email || ""}</span>
                                </div>
                            </div>
                        </div>
                        {user.shop && <div className="card col-12">
                            <div><h1 className="userShowTitle">Shop Name: </h1><span>{user.shop.shopName}</span></div>
                            <div><h1 className="userShowTitle">Shop Description: </h1><span>{user.shop.description}</span></div>
                        </div>}


                        </div>
                        <div className=" my-md-3 col-12 col-lg-6 text-center">
                            <button className="btn bg-transparent m-0 p-0 m-auto" data-bs-toggle="modal" data-bs-target="#AddAddress">
                                <div className="card " style={{ width: "100%",  border: "2px dashed #C7C7C7" }}>
                                    <div className="card-body mt-5">
                                        <i className="fas fa-plus fa-3x" ></i>
                                        <h5 className="card-title">Add address</h5>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <pre>
                        </pre>
                        <h3>User Addresses</h3>

                        {addresses && addresses.map((addr, i) => {
                            return (



                                <div className="col-md-6 my-md-3 col-12 col-lg-6  my-4  m-auto" >
                                    <div className="card " >
                                        {addr.isdefault ? (<div className="card-header bg-transparent"    >
                                            <p className="text-muted p-0 m-0">Default: <i className="fab fa-amazon"></i></p>
                                        </div>) : (<div className="card-header bg-transparent"    >
                                            <p className="text-muted p-0 m-0">Not Default: <i className="fab fa-amazon"></i></p>
                                        </div>)}

                                        <div className="card-body m-0 pt-1">
                                            <p className="font-weight-bold my-0 py-0"> Name {addr.userId.name}</p>
                                            <p className="my-0 py-0">City : {addr.city} </p>
                                            <p className="my-0 py-0">Country : {addr.country} </p>
                                            <p className="my-0 py-0"> Government : {addr.governate} </p>
                                            <p className="my-0 py-0"> Phone Number : {addr.userId.phone} </p>
                                            <p className="my-0 py-0"> Date :{addr.updatedAt.slice(0, 10)},{addr.updatedAt.slice(11, 19)} </p>
                                        </div>
                                        <div className="card-footer bg-transparent">
                                            <a href={'/EditAddress/' + addr._id}
                                                data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"

                                                className="btn btn-outline-info btn-sm m-1 "><i className="fas fa-pencil-alt"></i></a>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
                                                onClick={() => handDelete(addr._id)} className="btn btn-outline-danger m-1 btn-sm"><i className="fas fa-trash-alt"></i></a>
                                            <a id="default" data-bs-toggle="tooltip" data-bs-placement="top" title="Set Default"
                                                onClick={() => handDefault(addr._id)} className="btn btn-outline-success m-1 btn-sm">

                                                <svg transform="scale(1.7)" stroke-width='3' width="16px" height="24px" version="1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" >

                                                    <g>
                                                        <path d="m559.62 298.67h33.043v-37.332h-38.285c-2.1484-23.875-8.4766-46.5-18.105-67.293l33.207-19.172-18.668-32.332-33.188 19.152c-13.535-19.098-30.184-35.785-49.297-49.297l19.172-33.188-32.332-18.668-19.172 33.207c-20.812-9.6328-43.457-15.961-67.332-18.125v-38.289h-37.332v38.285c-23.875 2.1484-46.5 8.4766-67.312 18.105l-19.172-33.188-32.332 18.668 19.152 33.172c-19.098 13.535-35.766 30.184-49.297 49.297l-33.172-19.133-18.684 32.312 33.207 19.172c-9.6328 20.812-15.941 43.438-18.105 67.312h-38.266l-0.023438 37.332h38.285c2.1484 23.875 8.4922 46.516 18.125 67.332l-33.207 19.152 18.668 32.348 33.188-19.172c13.516 19.098 30.184 35.785 49.297 49.297l-19.152 33.172 32.332 18.684 19.172-33.207c20.812 9.6328 43.418 15.941 67.293 18.105v38.289h37.332v-33.02c24.172 42 69.402 70.355 121.33 70.355 77.336 0 140-62.664 140-140 0.003906-51.934-28.371-97.164-70.371-121.34zm-209.62 168c-102.93 0-186.67-83.738-186.67-186.67s83.738-186.67 186.67-186.67 186.67 83.738 186.67 186.67c0 2.707-0.29688 5.3203-0.39062 7.9883-14.504-5.0781-30.035-7.9883-46.273-7.9883-16.707 0-32.668 3.0781-47.508 8.457 0.26172-2.8359 0.83984-5.5625 0.83984-8.457 0-51.559-41.777-93.332-93.332-93.332-51.559 0-93.332 41.777-93.332 93.332 0 51.559 41.777 93.332 93.332 93.332 2.8945 0 5.6172-0.59766 8.457-0.85938-5.375 14.859-8.457 30.801-8.457 47.523 0 16.238 2.9102 31.754 7.9883 46.273-2.6719 0.097657-5.2852 0.39844-7.9922 0.39844zm17.434-114.26c-5.6172 1.3477-11.422 2.2617-17.434 2.2617-41.234 0-74.668-33.434-74.668-74.668s33.434-74.668 74.668-74.668 74.668 33.434 74.668 74.668c0 6.0312-0.91406 11.816-2.2578 17.434-23.113 12.75-42.227 31.863-54.977 54.973zm122.57 188.93c-67.012 0-121.33-54.32-121.33-121.33s54.32-121.33 121.33-121.33 121.33 54.32 121.33 121.33-54.32 121.33-121.33 121.33z" />
                                                        <path d="m569.18 373.8-13.195-13.199-92.383 92.402-39.594-39.613-13.195 13.219 52.789 52.789z" />
                                                    </g>
                                                </svg>


                                            </a>
                                        </div >
                                    </div >
                                </div >




                            )
                        })}

                    </div>
                </div >
            </div >



            <AddAddress userId={user._id} />



        </>
    )
}
