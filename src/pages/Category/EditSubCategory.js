import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetSingleSubCategory, UpdateSubCategory } from './../../redux/actions/Category';
import { useHistory } from 'react-router-dom';



export default function EditCategory() {
    const { category } = useSelector(state => state.categories)
    const history = useHistory();
    const [filesp, setFiles] = useState();
    
    const formData = new FormData();
    const [state, setState] = useState({
        name: '',
        arName: '',
        files: []
    });
    const { name, arName, files } = state
    const [error, setError] = useState("")
    let { id } = useParams();

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetSingleSubCategory(id))
    }, [])

    useEffect(() => {
        if (category) {
            setState({ ...category })
        }
    }, [category])

    const onInputChange = (e) => {
        setFiles(e.target.files);
    };

    const handelSubmet = (e) => {
        // e.preventDefault();
        // if (!name || !arName) {
        //     setError("please input all input field")
        // } else {
        //     dispatch(UpdateSubCategory(state, category._id))
        //     setError("")
        //      history.push(`/category`)

        // }
        for (let i = 0; i < filesp.length; i++) {
            formData.append('files', filesp[i]);
        }
        for (let key in state) {
            formData.append(key, state[key]);
        }

        console.log(formData.get("files"))
        dispatch(UpdateSubCategory(formData, category._id))
        setError("");
        history.push(`/category`)
    }


    return (
        <>
        <Link to="/category" className="nav-link ms-auto">
            <button type="button" class="btn btn-btn">Back</button></Link>


        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit Category</h1>
                <Link to="/AddCat">
                    <button className="userAddButton btn-btn">Create</button>
                </Link>
            </div>
            <div className="userContainer row">
                <div className="userShow col-md-6 col-12">
                    <div className="userShowTop">

                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Category</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Category Name</span>
                        <div className="userShowInfo">

                            <span className="userShowInfoTitle">{name || ""}</span>
                        </div>

                        <span className="userShowTitle" dir="rtl">الاسم</span>
                        <div className="userShowInfo">

                            <span className="userShowInfoTitle">{arName || ""}</span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate m-0 ms-md-4 col-md-6 col-12">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm" onSubmit={handelSubmet}>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>name</label>
                                <input
                                    type="text"
                                    placeholder="name"
                                    className="userUpdateInput w-100" name="name"
                                    value={name || ""} onChange={handelInputChange}
                                />
                            </div>
                            <div className="userUpdateItem  ">
                                <label dir="rtl">الاسم</label>
                                <input
                                    type="text"
                                    placeholder="test@test.com"
                                    className="userUpdateInput " name="arName"
                                    value={arName || ""} onChange={handelInputChange} />
                            </div>
                            <label>images</label>
                                <input
                                    type="file"
                                    name="files"
                                    label="add image"
                                    onChange={onInputChange}
                                    multiple accept='image/*'
                                />

                            <div className="userUpdateRight">
                                <button type="submit" className="btn btn-btn m-2" style={{ color: "black", fontSize: "14px" }}>Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </>
    );
}