import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AddCategory, getCategoryList } from "../../redux/actions/Category";
import { Link } from "react-router-dom";
import "../User/AddUser/AddUser.css";



export default function NewCategory() {
    const { categories } = useSelector(state => state.categories)
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryList())
    }, []);

    const [state, setState] = useState({
        name: '',
        arName: '',
        files: [],
        parent: ''
    });
    const [filesp, setFiles] = useState();

    const onInputChange = (e) => {

        setFiles(e.target.files);
    };
    const [error, setError] = useState("")
    const {
        name,
        arName,
        parent,
        files } = state

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const formData = new FormData();

    const handelSubmet = (e) => {
        e.preventDefault();
        if (!name || !arName) {
            setError("please input all input field")
        } else {
            for (let i = 0; i < filesp.length; i++) {
                formData.append('files', filesp[i]);
            }
            for (let key in state) {
                formData.append(key, state[key]);
            }
            console.log("*****",formData.get("files"))
            dispatch(AddCategory(formData))
            setError("")
            history.push('/category')

        }
    }

    return (
        <>
            <Link to="/category" className="nav-link ms-auto">
                <button type="button" class="btn btn-btn">Back</button></Link>


            <div className="container p-0  d-flex flex-column justify-content-center">

                <div className="col-12 d-flex justify-content-center">
                    <div className="form">
                        <form className="row g-3" onSubmit={handelSubmet} >
                            <h4 className="fs-3">Add Category</h4>
                            {error && <h3 style={{ color: "red" }}>{error}</h3>}
                            <div className="col-md-12">
                                <label className="form-label fw-bold" style={{ fontSize: "13px" }}>name </label>
                                <input type="text" className="form-control" id="inputname4" name="name"
                                    placeholder="Category Name" value={name} onChange={handelInputChange} />
                            </div>
                            <div className="col-md-12">
                                <label className="form-label fw-bold" style={{ fontSize: "13px" }} dir="rtl">الاسم </label>
                                <input type="text" className="form-control" id="inputarName4" name="arName"
                                    placeholder="اسم Category" value={arName} onChange={handelInputChange} />
                            </div>
                            <div className="col-md-12">
                                <label className="form-label fw-bold" style={{ fontSize: "13px" }}>image  </label>

                                <input className="form-control" type="file" name="files" label="add image"
                                    onChange={onInputChange} multiple accept='image/*' />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">parent</label>
                                <select placeholder="select Category " class="form-control" name="parent" id="" onChange={handelInputChange}>
                                    <option value="null">select Category</option>
                                    {categories && categories.map((category, index) => {
                                        return (
                                            <option value={category.name} >{category.name}</option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-btn" style={{ color: "black", fontSize: "14px" }}
                                >Add</button>
                            </div>


                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}