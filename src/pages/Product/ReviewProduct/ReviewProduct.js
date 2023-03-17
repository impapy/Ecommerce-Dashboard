import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleProduct, deleteSingleReview } from '../../../redux/actions/Product'
import './ReviewProduct.css'
export default function GetReviewsProduct() {
    const { product } = useSelector(state => state.products)
    const [state, setState] = useState({

        reviews: [{
            name: '',
            comment: "",
            rating: '',
            userId: ""
        }]
    });

    let { id } = useParams();
    console.log(product, id, 'jhjhjh');
    const { reviews } = state
    // const {reviews} = state
    const dispatch = useDispatch();
    // const history = useHistory();
    // console.log(id,state,'ooo')
    useEffect(() => {
        dispatch(GetSingleProduct(id))
    }, [])
    useEffect(() => {
        if (product) {
            setState({ ...product })
        }
    }, [product])
    const handeldelete = (pid, rid) => {
        // if (window.confirm("Are you sure delete this product")) {
            dispatch(deleteSingleReview(pid, rid));
        // }
    }
    return (
        <>
            <div className="container ">
                {/* <div>{reviews[0].comment}</div> */}
                <Link to="/Products" className="nav-link">
                    <button type="button" class="btn btn-btn">Back</button></Link>
                {reviews && reviews.length > 0 &&
                <div className="table-responsive card  ">
                    <table className="table table-borderless   ">
                        <thead className="bg-table-th">
                            <tr className="border-bottom">
                                <th className=""> <span className="ml-2 col">User ID</span> </th>
                                <th className=""> <span className="ml-2 col">Name</span> </th>
                                <th className=""> <span className="ml-2 col">Comment</span> </th>
                                <th className=""> <span className="ml-2 col">Rating</span> </th>
                                <th className=""> <span className="ml-2 col">Action</span> </th>
                            </tr>
                        </thead>
                        {
                            reviews && reviews.map((data, i) => {
                                return (
                                    <tr className="border-bottom">
                                        <td className="col ">
                                            <div className=" " > <span className=" font-weight-bold"> {data.userId.slice(0,10) }</span> </div>
                                        </td>
                                        <td className="col ">
                                            <div className=" " > <span className="d-block font-weight-bold"> {data.name || "none"}</span> </div>
                                        </td>
                                        <td className="col ">
                                            <div className=" d-flex flex-row align-items-center mb-2">
                                                <div className="d-block "> <span className="d-block font-weight-bold">{data.comment || "none"}</span></div>
                                            </div>
                                        </td>
                                        <td className="col">
                                            <div className=" "> <span className="text-warning">{data.rating || "none"}</span> </div>
                                        </td>
                                        <td className="col ">
                                            <div className=" d-flex flex-column "> <span className="text-warning ">
                                                <Link to={'/EditUser/' + data.userId} className="nav-link d-inline"> <i class="bi bi-eye showicon hover"></i></Link>
                                                <i className="bi bi-trash-fill delicon" onClick={() => handeldelete(id, data._id)}></i></span></div>
                                        </td>
                                    </tr>
                                )

                            })
                        }



                        <tbody>
                        </tbody>
                    </table></div>}

                {reviews && reviews.length < 1 &&
                    <div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="error-template">
                                        <h1>
                                            Oops!</h1>
                                        <h2>
                                            reviews Not Found</h2>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </>
    );
}