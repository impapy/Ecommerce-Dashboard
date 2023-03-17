import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { GetSingleProduct, UpdateProduct, Updatemodel } from '../../../redux/actions/Product'
import { getCategoryListAll } from "../../../redux/actions/Category";
import './EditProduct.css'
import { APIURL } from '../../../netWork/netWork';
export default function EditProduct() {

    const { categories } = useSelector(state => state.categories)
    console.log(categories)
    useEffect(() => {
        dispatch(getCategoryListAll())
    }, []);

    const { product } = useSelector(state => state.products)
    const [state, setState] = useState({
        name: "",
        arname: "",
        files: [],
        brand: "",
        category: "",
        arcategory: "",
        subcategory: "",
        arsubcategory: "",
        description: "",
        ardescription: "",
        price: "",
        countInStock: "",
        ModelId: "",
        discount: 0
    });
    const [error, setError] = useState("")
    // const APIURL = 'http://localhost:3000/';
    const history = useHistory();
    let { id } = useParams();
    const [allmodel, setAllModel] = useState({
        model: []
    })
    const [modelp, setModel] = useState({
        brandm: '',
        color: '',
        os: '',
        ram: '',
        memoryStrage: '',
        itemModelNumber: '',
        itemWeight: '',
        dateFirstAvailable: ''
    });



    const [AllDataModelF, setAllDataModelF] = useState({
        colormodel: '',
        size: '',
        sizePrice: ''
    })
    const {
        colormodel,
        size,
        sizePrice
    } = AllDataModelF

    const {
        model
    } = allmodel
    const {
        brandm,
        color,
        os,
        ram,
        memoryStrage,
        itemModelNumber,
        itemWeight,
        dateFirstAvailable
    } = modelp;
    // setId(EleModel)
    console.log(modelp)
    const handelInputChangemodel = (e) => {
        let { name, value } = e.target;
        setModel({ ...modelp, [name]: value });
    }
    const handelInputChangemodelF = (e) => {
        let { name, value } = e.target;
        setAllDataModelF({ ...AllDataModelF, [name]: value });
    }

    const handelSubmetmodel = (e) => {
        e.preventDefault();
        model.push(modelp)
        setShow(true)
        console.log(model)
    }
    const handelSubmetmodelF = (e) => {
        e.preventDefault();
        model.push(AllDataModelF)
        setShowFashon(true)
        console.log(model)

    }
    // setShow(true)



    const [show, setShow] = useState(true);

    const showFormModel = () => {
        setShow(false)
    }
    const [showFashon, setShowFashon] = useState(true);

    const showFormModelFash = () => {
        setShowFashon(false)
    }
    const AddModel = async () => {
        console.log(allmodel, "lll")
        dispatch(Updatemodel(allmodel, ModelId))
        // allmodel.model=[]
    }
    const { discount, name, arname, files,
        brand, category, arcategory, subcategory,
        arsubcategory, description, ardescription, price,
        countInStock, ModelId } = state

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    const [filesp, setFiles] = useState();
    const onInputChange = (e) => {

        setFiles(e.target.files);
    };
    const dispatch = useDispatch();
    // console.log(id, state, 'ooo')
    useEffect(() => {
        dispatch(GetSingleProduct(id))
    }, [])

    useEffect(() => {
        if (product) {
            setState({ ...product })
        }
    }, [product])

    const formData = new FormData();

    const handelSubmet = (e) => {
        // let test = state
        // console.log(e)
        e.preventDefault();
        // if(!name || !arname || !files || !brand || !description || !ardescription || !price)
        // {
        //      setError("please input all input field")
        // }else{
        // console.log(e, 'ee')

        for (let i = 0; i < filesp.length; i++) {
            formData.append('files', filesp[i]);
        }
        for (let key in state) {
            formData.append(key, state[key]);
        }
        dispatch(UpdateProduct(formData, id))
        setError("")
        history.push("/products")
        // }
    }

    return (
        <>
            <div className="product">
                <h1 className="productTitle">Edit Product</h1>
                {/* <div className="productTitleContainer">
                    <Link to="/newproduct">
                        <button className="productAddButton btn-btn">Create</button>
                    </Link>
                </div> */}
                <div className="productTop">
                    <div className="productTopRight">
                        <div className="col-lg-6 col-12 float-start ">
                            <div className="productInfoTop">
                                {/* <img src={APIURL + product.imagePath[0] || APIURL + product.imagePath} alt="" className="productInfoImg" /> */}
                                <span className="productName"></span>
                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Name: <span className="text-warning"> {name || ""}</span></span>
                                    {/* <span className="productInfoValue"></span> */}
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Category: <span className="text-warning">{category || ""}</span></span>
                                    {/* <span className="productInfoValue">{category || ""}</span> */}
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Subcategory: <span className="text-warning">{subcategory || ""}</span></span>
                                    {/* <span className="productInfoValue">{subcategory || ""}</span> */}
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Description: <span className="text-warning">{description || ""}</span></span>
                                    {/* <span className="productInfoValue">{description || ""}</span> */}
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Brand: <span className="text-warning">{brand || ""}</span></span>
                                    {/* <span className="productInfoValue">{brand || ""}</span> */}
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Price: <span className="text-warning">{price || ""}</span></span>
                                    {/* <span className="productInfoValue">{price || ""}</span> */}
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">In Stock : {countInStock > 0 && <span className="text-warning"> yes </span>}
                                        {countInStock < 1 && <span className="text-danger">no</span>}</span>

                                    {/* <span className="productInfoValue">{countInStock || ""}</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 float-end mt-5">
                            <div className="productInfoBottom " dir="rtl">
                                <div className="productInfoItem">
                                    <span className="productInfoValue text-warning">{arname || ""}</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoValue text-warning">{arcategory || ""}</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoValue text-warning">{arsubcategory || ""}</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoValue text-warning">{ardescription || ""}</span>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="productBottom d-flex ">
                    <form className="productForm  row   d-flex justify-content-between"
                        onSubmit={handelSubmet}>
                        <div className="col-12">
                            <label>Product Name</label>
                            <input type="text"
                                name="name" className="col-12"
                                value={name} onChange={handelInputChange} />
                            <label>Category</label>
                            <select placeholder="select Category " class="form-control" name="category" id="" onChange={handelInputChange}>
                                <option disabled={true} value=''>select...</option>
                                <option hidden={true} value=''>select...</option>
                                <option value=''>all...</option>
                                {categories && categories.map((categorys, index) => {

                                    if (categorys.arName === arcategory) {
                                        return (
                                            <option value={categorys.name} dir="rtl">{categorys.name}</option>
                                        );
                                    } else if (category === '') {
                                        return (
                                            <option value={categorys.name} dir="rtl">{categorys.name}</option>
                                        );
                                    }

                                    // return (
                                    //   <option value={category.name} >{category.name}</option>
                                    // );
                                })}
                            </select>

                            {/* <input type="text"
                                name="category"
                                value={category} onChange={handelInputChange} /> */}
                            <label>Subcategory</label>
                            <select placeholder="select Category " class="form-control" name="subcategory" id="" onChange={handelInputChange}>
                                <option disabled={true} value=''>select...</option>
                                {categories && categories.map((categorys, index) => {
                                    if (categorys.name === category || categorys.arName === arcategory) {
                                        return (
                                            categorys.subCategories && categorys.subCategories.map((supcat, i) => {
                                                console.log(supcat)
                                                return (
                                                    <option value={supcat.name} >{supcat.name}</option>
                                                )
                                            })

                                        );
                                    }
                                })}
                            </select>
                            {/* <input type="text"
                                name="subcategory"
                                value={subcategory} onChange={handelInputChange} /> */}
                            <label>Description</label>
                            <textarea type="text"
                                name="description" className="col-12 py-5"
                                value={description} onChange={handelInputChange} />
                        </div>
                        <div className="col-12 text-center" dir='rtl'>
                            <label dir='rtl'>الاسم</label>
                            <input type="text" dir="rtl"
                                name="arname" className="col-12"
                                value={arname} onChange={handelInputChange} />
                            <label>الفئة</label>
                            <select placeholder="select Category " class="form-control" name="arcategory" id="" onChange={handelInputChange}>
                                <option disabled={true} value=''>select...</option>
                                <option hidden={true} value=''>select...</option>
                                <option value=''>all...</option>
                                {categories && categories.map((categorys, index) => {
                                    if (categorys.name === category) {
                                        return (
                                            <option value={categorys.arName} dir="rtl">{categorys.arName}</option>
                                        );
                                    } else if (arcategory === '') {
                                        return (
                                            <option value={categorys.arName} dir="rtl">{categorys.arName}</option>
                                        );
                                    }
                                })}
                            </select>
                            {/* <input type="text"
                                name="arcategory"
                                value={arcategory} onChange={handelInputChange} /> */}
                            <label>الفئة الفرعية</label>
                            <select placeholder="select Category " class="form-control" name="arsubcategory" id="" onChange={handelInputChange}>
                                <option disabled={true} value=''>select...</option>
                                {categories && categories.map((categorys, index) => {
                                    if (categorys.name === category || categorys.arName === arcategory) {
                                        return (
                                            categorys.subCategories && categorys.subCategories.map((checksup, i) => {
                                                return (
                                                    <option value={checksup.arName} dir="rtl">{checksup.arName}</option>
                                                )
                                            })
                                        );
                                    }
                                })}
                            </select>
                            {/* <input type="text"
                                name="arsubcategory"
                                value={arsubcategory} onChange={handelInputChange} /> */}
                            <label>الوصف</label>
                            <textarea type="text" dir="rtl"
                                name="ardescription" className="col-12 py-5"
                                value={ardescription} onChange={handelInputChange} />
                        </div>
                        <div className="productFormLeft">
                            <label>Brand</label>
                            <input type="text"
                                name="brand"
                                value={brand} onChange={handelInputChange} />
                            <label>Price</label>
                            <input type="number"
                                name="price"
                                value={price} onChange={handelInputChange} />
                            <label>In Stock</label>
                            <input type="number"
                                name="countInStock"
                                value={countInStock} onChange={handelInputChange} />
                            <label>Images</label>
                            <input
                                type="file"
                                name="files"
                                label="add image"
                                onChange={onInputChange}
                                multiple accept='image/*'
                            />
                            <label>discount%</label>
                                <input
                                    type="number"
                                    name="discount"
                                    value={discount}
                                    onChange={handelInputChange}
                                    />
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                {/* <img src={APIURL + product.imagePath || APIURL + product.imagePath[0]} alt="" className="productUploadImg" /> */}
                            </div>
                            <button type="submit" className="btn btn-btn w-75 m-auto my-3 text-white" >Edite</button>
                        </div>
                        {/* <button type="submit" className="productButton">Add</button> */}
                    </form>
                    </div>
                    <hr />
                    <div hidden={category != "Electronics"}>
                        <button className="productButton btn btn-btn w-25" value="" onClick={showFormModel}>add model</button>
                        <button hidden={model.length < 1} className="productButton btn btn-btn w-25 ms-5" onClick={AddModel} >add all</button>
                    </div>
                    
                    <form hidden={show || category != "Electronics"}
                        className="productForm card"
                        onSubmit={handelSubmetmodel}
                    ><div className='row'>
                        <h2>Add Model</h2>
                        <div className="productFormLeft col-12 col-md-6 col-xl-4">
                            <label>brand</label>
                            <input
                                type="text"
                                name="brandm"
                                value={brandm}
                                onChange={handelInputChangemodel}
                            />
                            <label>color</label>
                            <input
                                type="text"
                                name="color"
                                value={color}
                                onChange={handelInputChangemodel}
                            />
                            <label>OS</label>
                            <input
                                type="text"
                                name="os"
                                value={os}
                                onChange={handelInputChangemodel}
                            />

                            <label>ram</label>
                            <input
                                type="text"
                                name="ram"
                                value={ram}
                                onChange={handelInputChangemodel}
                            />

                        </div>
                        <div className="productFormLeft col-12 col-md-6 col-xl-4">
                            <label>memory Strage</label>
                            <input
                                type="text"
                                name="memoryStrage"
                                value={memoryStrage}
                                onChange={handelInputChangemodel}
                            />
                            <label>item model number</label>
                            <input
                                type="text"
                                name="itemModelNumber"
                                value={itemModelNumber}
                                onChange={handelInputChangemodel}
                            />
                            <label>item Weight</label>
                            <input
                                type="text"
                                name="itemWeight"
                                value={itemWeight}
                                onChange={handelInputChangemodel}
                            />

                            <label>date First Available</label>
                            <input
                                type="text"
                                name="dateFirstAvailable"
                                value={dateFirstAvailable}
                                onChange={handelInputChangemodel}
                            />

                        </div>
                        <div className="col-12">
                        <button type="submit" className="productButton my-3 btn btn-btn w-75" >
                             add model   
                            </button> </div></div>
                    </form>
                    {/* /////////////////////////////////////






////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////// */}
                    <div hidden={category != "Fashion"}>
                        <button className="productButton btn-btn btn w-25" value="" onClick={showFormModelFash}>add model</button>
                        <button hidden={model.length < 1} className="productButton btn-btn btn w-25 ms-5" onClick={AddModel} >add all</button>
                    </div>

                    <form hidden={showFashon || category != "Fashion"}
                        className="productForm card"
                        onSubmit={handelSubmetmodelF}
                    ><div className=' row'>
                        <h2>Add Model</h2>
                        <label>color</label>
                        <input
                            type="text" className="col-12"
                            name="colormodel"
                            value={colormodel}
                            onChange={handelInputChangemodelF}
                        />
                        <label>size</label>
                        <input
                            type="text" className="col-12"
                            name="size"
                            value={size}
                            onChange={handelInputChangemodelF}
                        />

                        <label>Price</label>
                        <input className="col-12"
                            type="number"
                            name="sizePrice"
                            value={sizePrice}
                            onChange={handelInputChangemodelF}
                        />
                        <div className="col-12">
                            <button type="submit" className="productButton btn btn-btn w-75" >
                             add model   
                            </button>
                        </div>  </div>

                    </form></div>
                
          
        </>
    );

}