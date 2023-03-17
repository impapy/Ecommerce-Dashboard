import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { UpdateCategory, GetSingleCategory, deleteSubCategory } from './../../redux/actions/Category';
import { APIURL } from '../../netWork/netWork';
export default function SubCategory() {

    const handeldelete = (name) => {
        // if (window.confirm("Are you sure delete this user")) {
            dispatch(deleteSubCategory(name));
        // }
    }
    const { category } = useSelector(state => state.categories)
    console.log("87378378", category)
    const [state, setState] = useState({

        subCategories: [{ name: "", arName: "", image: "" }],
        // arSubCategories:[{image:""}],
        // image: [''],
    });


    const {
        name,
        arName,
        // subCategories,
        // arSubCategories,
        image 
    } = state;


    let { nameCat } = useParams();
    console.log(nameCat);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetSingleCategory(nameCat))

    }, []);


    useEffect(() => {
        if (category) {
            setState({ ...category })
        }
    }, [category])

    // console.log("dsfaasdf", category)

    const [error, setError] = useState("");

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    // const APIURL = 'http://localhost:3000/'
    return (
        <> <Link to="/category" className="nav-link ms-auto">
        <button type="button" class="btn btn-btn">Back</button></Link>


            <div className="container m-auto my-5 d-flex row justify-content-between" >
                <span className="d-flex text-start w-10  col"> <h1 className="d-inline-flex" > SubCategory </h1></span>
                <span className="d-flex   col w-10">
                    <Link to="/AddCat" className="ms-sm-auto" >
                        <button className="btn btn-btn ">New Category</button>
                    </Link></span></div>
            <div className="container m-auto  table-responsive card">

                <table className="table table-borderless   ">
                    <thead className="bg-table-th">
                        <tr className="border-bottom ">
                            <th className=""> <span className="col">#</span> </th>
                            <th className=""> <span className=" col">Name</span> </th>
                            <th className=""> <span className=" col">Arabic Name</span> </th>
                            <th className=""> <span className=" col">image</span> </th>

                            <th className=""> <span className=" col">Action</span> </th>
                        </tr>
                    </thead>
                    <tbody>

                        {category.subCategories && category.subCategories.map((category, index) => {
                            return (
                                <>

                                    <tr className="border-bottom">
                                        <td className="col ">
                                            <div className="p-2 " > <span className="d-block font-weight-bold"></span> </div>
                                        </td>
                                        <td className="col ">
                                            <div className="p-2 d-flex flex-row align-items-center mb-2">
                                                <div className="d-block "> <span className="d-block font-weight-bold">{category.name}</span></div>
                                                {/* <div className="d-block "> <span className="d-block font-weight-bold">{category.name.slice(0,5)}...</span></div> */}
                                            </div>

                                        </td>   <td className="col ">
                                            <div className="p-2 d-flex flex-row align-items-center mb-2">
                                                <div className="d-block "> <span className="d-block font-weight-bold">{category.arName}</span></div>
                                                {/* <div className="d-block "> <span className="d-block font-weight-bold">{category.name.slice(0,5)}...</span></div> */}
                                            </div>

                                        </td>
                                        <td className="col">
                                            <div className="p-2 "> <img src={APIURL + category.image[0]} alt="" className="rounded-3 " width="70px" /> </div>
                                        </td>

                                        <td className="col h-100">
                                            <div className=" row justify-content-between align-content-center  ">
                                               
                                               <Link to={'/EditSubCate/' + category._id} className=" col-12 d-flex col-md-4 justify-content-center text-center align-content-center"> <i className="bi bi-pencil-square upicon"></i></Link> <i className="bi bi-trash-fill delicon col-12 d-flex col-md-4 justify-content-center text-center align-content-center" onClick={() => handeldelete(category.name)}  ></i> </div>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}

                    </tbody>
                </table>
            </div>

        </>
    )
}