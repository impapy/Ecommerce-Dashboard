import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./CatrgoryTable.css"
import { deleteCategory } from '../../redux/actions/Category'
import { useHistory } from 'react-router-dom';
import { APIURL } from '../../netWork/netWork';

export default function CategoryTable({ CategoryData, i }) {
    const history = useHistory();
    let dispatch = useDispatch()
    const handeldelete = (id) => {
        dispatch(deleteCategory(id));
        history.push("/category")
    }
    // const APIURL = 'http://localhost:3000/'
    return (
        <>
            <tr className="border-bottom">
                <td className="col ">
                    <span className="d-block font-weight-bold">{i}</span>
                </td>
                <td className="col ">

                    <span className="d-block font-weight-bold">{CategoryData.name}</span>




                </td>
                <td className="col">
                    <img src={APIURL + CategoryData.image} alt="" className="rounded-3 " height="70px" />
                </td>

                <td className="col ">

                    <div className=" d-flex flex-column"><ul>{CategoryData.subCategories.map((category, index) => {
                        return (
                            <>
                                <li className="d-flex row justify-content-between align-content-center   " >
                                    <span className=" col m-auto ">{category.name}</span>
                                    <span className="p-1 col">
                                        <img src={APIURL + category.image} alt="" className="rounded-3 " height="50px" />
                                    </span>

                                </li>
                            </>
                        );
                    })}</ul>
                    </div>
                </td>

                <td className="col h-100">
                    <div className=" row justify-content-between align-content-center  ">
                        <Link to={'/SubCate/' + CategoryData.name} className="  col-12 d-flex col-md-4 justify-content-center text-center align-content-center">   <i class="bi bi-eye showicon"></i>
                        </Link><Link to={'/EditCate/' + CategoryData.name} className=" col-12 d-flex col-md-4 justify-content-center text-center align-content-center"> <i className="bi bi-pencil-square upicon"></i></Link> <i className="bi bi-trash-fill delicon col-12 d-flex col-md-4 justify-content-center text-center align-content-center" onClick={() => handeldelete(CategoryData.name)}  ></i> </div>
                </td>
            </tr>


        </>
    )
}