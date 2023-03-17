import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNewProduct,
  AddNewElecModel,
  EleModel,
} from "../../../redux/actions/Product";
import { useHistory } from "react-router-dom";
import { getCategoryListAll } from "../../../redux/actions/Category";

import "./AddProduct.css";

export default function AddProduct() {
  const { categories } = useSelector((state) => state.categories);
  // console.log(categories)
  // const modelid = EleModel
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryListAll());
  }, []);
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
    discount: 0,
  });
  const [allmodel, setAllModel] = useState({
    model: [],
  });
  const [modelp, setModel] = useState({
    brandm: "",
    color: "",
    os: "",
    ram: "",
    memoryStrage: "",
    itemModelNumber: "",
    itemWeight: "",
    dateFirstAvailable: "",
  });

  const [AllDataModelF, setAllDataModelF] = useState({
    colormodel: "",
    size: "",
    sizePrice: "",
  });
  const { colormodel, size, sizePrice } = AllDataModelF;

  const { model } = allmodel;
  const {
    brandm,
    color,
    os,
    ram,
    memoryStrage,
    itemModelNumber,
    itemWeight,
    dateFirstAvailable,
  } = modelp;
  const [filesp, setFiles] = useState();
  const history = useHistory();

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const [error, setError] = useState("");
  const {
    name,
    arname,
    files,
    brand,
    category,
    arcategory,
    subcategory,
    arsubcategory,
    description,
    ardescription,
    price,
    countInStock,
    ModelId,
    discount,
  } = state;
  const [show, setShow] = useState(true);

  const showFormModel = () => {
    setShow(false);
  };
  const [showFashon, setShowFashon] = useState(true);

  const showFormModelFash = () => {
    setShowFashon(false);
  };
  const handelInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const formData = new FormData();

  const handelSubmet = async (e) => {
    e.preventDefault();
    if(EleModel!=''){
      state.ModelId=EleModel
    }
    if(!EleModel){
      state.ModelId="61bb14chgc67647f902d19a4"
    }
    for (let i = 0; i < filesp.length; i++) {
      formData.append("files", filesp[i]);
    }
    for (let key in state) {
      formData.append(key, state[key]);
    }

    // console.log(formData.get("files"))
    dispatch(AddNewProduct(formData));
    console.log(state);
    setError("");
    history.push("/products");
  };
  const handelInputChangemodel = (e) => {
    let { name, value } = e.target;
    setModel({ ...modelp, [name]: value });
  };
  const handelInputChangemodelF = (e) => {
    let { name, value } = e.target;
    setAllDataModelF({ ...AllDataModelF, [name]: value });
  };
  const handelSubmetmodel = (e) => {
    e.preventDefault();
    model.push(modelp);
    setShow(true);
  };
  const handelSubmetmodelF = (e) => {
    e.preventDefault();
    model.push(AllDataModelF);
    setShowFashon(true);
  };

  const AddModel = async () => {
    // console.log(model)
    dispatch(AddNewElecModel(allmodel));
    allmodel.model = [];
  };
  return (
    <>
      <div className="productBottom">
        <div className=" card">
          <form className="row" onSubmit={handelSubmet}>
            <div className="row col-12 col-xl-4 col-lg-6 p-4 productFormLeft">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handelInputChange}
              />
              <label>Category</label>
              <select
                placeholder="select Category "
                class="form-control"
                name="category"
                id=""
                onChange={handelInputChange}
              >
                <option disabled={true} value="">
                  select...
                </option>
                <option value="">all...</option>
                {categories &&
                  categories.map((categorys, index) => {
                    if (categorys.arName === arcategory) {
                      return (
                        <option value={categorys.name} dir="rtl">
                          {categorys.name}
                        </option>
                      );
                    } else if (arcategory === "") {
                      return (
                        <option value={categorys.name} dir="rtl">
                          {categorys.name}
                        </option>
                      );
                    }

                    // return (
                    //   <option value={category.name} >{category.name}</option>
                    // );
                  })}
              </select>
              <label>Subcategory</label>
              <select
                placeholder="select Category "
                class="form-control"
                name="subcategory"
                id=""
                onChange={handelInputChange}
              >
                <option disabled={true} value="">
                  select...
                </option>
                {categories &&
                  categories.map((categorys, index) => {
                    if (
                      categorys.name === category ||
                      categorys.arName === arcategory
                    ) {
                      return (
                        categorys.subCategories &&
                        categorys.subCategories.map((supcat, i) => {
                          console.log(supcat);
                          return (
                            <option value={supcat.name}>{supcat.name}</option>
                          );
                        })
                      );
                    }
                  })}
              </select>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={handelInputChange}
              />
            </div>
            <div className=" row col-12 col-xl-4 col-lg-6 p-4 productFormLeft">
              <label dir="rtl">الاسم</label>
              <input
                type="text"
                dir="rtl"
                name="arname"
                value={arname}
                onChange={handelInputChange}
              />
              <label dir="rtl">الفئة</label>
              <select
                placeholder="select Category "
                class="form-control"
                name="arcategory"
                id=""
                onChange={handelInputChange}
              >
                <option disabled={true} value="">
                  select...
                </option>
                <option value="">all...</option>
                {categories &&
                  categories.map((categorys, index) => {
                    if (categorys.name === category) {
                      return (
                        <option value={categorys.arName} dir="rtl">
                          {categorys.arName}
                        </option>
                      );
                    } else if (category === "") {
                      return (
                        <option value={categorys.arName} dir="rtl">
                          {categorys.arName}
                        </option>
                      );
                    }
                  })}
              </select>
              <label dir="rtl">الفئة الفرعية</label>
              <select
                placeholder="select Category "
                class="form-control"
                name="arsubcategory"
                id=""
                onChange={handelInputChange}
              >
                <option disabled={true} value="">
                  select...
                </option>
                {categories &&
                  categories.map((categorys, index) => {
                    if (
                      categorys.name === category ||
                      categorys.arName === arcategory
                    ) {
                      return (
                        categorys.subCategories &&
                        categorys.subCategories.map((checksup, i) => {
                          return (
                            <option value={checksup.arName} dir="rtl">
                              {checksup.arName}
                            </option>
                          );
                        })
                      );
                    }
                  })}
              </select>
              <label dir="rtl">الوصف</label>
              <input
                type="text"
                name="ardescription"
                value={ardescription}
                onChange={handelInputChange}
              />
            </div>
            <div className="row col-12 col-xl-4 col-md-6 p-4 productFormLeft">
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={handelInputChange}
              />
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={handelInputChange}
              />
              <label>In Stock</label>
              <input
                type="number"
                name="countInStock"
                value={countInStock}
                onChange={handelInputChange}
              />
              {/* <input type="text" 
                  name="imge" value={imagePath}
                  onChange={(e) => setImage(e.target.value)} 
                /> */}
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
          {/* <input type="submit" className="productButton w-75" value="add" /> */}
            {/* <FileBase64
        multiple={ true }
        onDone={onInputChange.bind(this) } />
                   */}
            </div>
            <div className="col-12 text-center ">
              <button type="submit" className="btn-btn  btn m-auto w-50">
                Add
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div hidden={category != "Electronics"}>
          <button
            className="productButton btn btn-btn w-25"
            value=""
            onClick={showFormModel}
          >
            add model
          </button>
          <button
            hidden={model.length < 1}
            className="productButton btn btn-btn w-25 ms-5"
            onClick={AddModel}
          >
            add all
          </button>
        </div>

        <form
          hidden={show || category != "Electronics"}
          className="productForm card  "
          onSubmit={handelSubmetmodel}
        >
          <div className="row ">
            <h2>Add Model</h2>
            <div className="productFormLeft col-12  col-md-6 ">
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
            <div className="productFormLeft col-12  col-md-6 ">
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
            <div className=" col-12  ">
              <button type="submit" className="productButton btn btn-btn w-75">
                add model{" "}
              </button>
            </div>
          </div>
        </form>
        {/* /////////////////////////////////////






////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////// */}
        <div hidden={category != "Fashion"}>
          <button
            className="productButton btn btn-btn w-25"
            value=""
            onClick={showFormModelFash}
          >
            add model
          </button>
          <button
            hidden={model.length < 1}
            className="productButton btn btn-btn w-25 ms-5"
            onClick={AddModel}
          >
            add all
          </button>
        </div>

        <form
          hidden={showFashon || category != "Fashion"}
          className="productForm row card"
          onSubmit={handelSubmetmodelF}
        >
          <h2>Add Model</h2>
          <label>color</label>
          <input
            type="text"
            className="col-12  "
            name="colormodel"
            value={colormodel}
            onChange={handelInputChangemodelF}
          />
          <label>size</label>
          <input
            type="text"
            className="col-12 "
            name="size"
            value={size}
            onChange={handelInputChangemodelF}
          />

          <label>Price</label>
          <input
            className="col-12  "
            type="number"
            name="sizePrice"
            value={sizePrice}
            onChange={handelInputChangemodelF}
          />
          <div className="col-12">
            <button
              type="submit"
              className=" btn btn-btn p-2 my-4"
            >
              add model{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
