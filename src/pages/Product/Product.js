import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProductList, total } from "../../redux/actions/Product";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ProductsTable from "../../components/ProductTable/ProductTable";
import Pagination from "../../components/Pagination/Pagination";
import { getCategoryListAll } from "../../redux/actions/Category";

export default function Products() {
    const [searchTerm, setSearchTerm] = useState('')

    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch();
    const { num } = useParams() || 1;

    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    const [page, setPage] = useState(num);
    // const [pages, setPages] = useState(1);
    const pages = total
    const { categories } = useSelector(state => state.categories)
    useEffect(() => {
        dispatch(getCategoryListAll())
    }, []);
    const [state, setState] = useState({
        checValue: "",
        checkKey: ""
    });

    const { checkKey, checValue } = state

    const handelIKeyChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const handelValuChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    //    Math.ceil
    // console.log(pages)
    useEffect(() => {
        dispatch(getProductList(page, state))

        // setPages(total)
    }, [page, state]);

    console.log(products, total, 'ppp')


    /////////////////////////////////////////////////
    const [names, setName] = useState('');
    // const submitHandler = (e) => {
    //     e.preventDefault();

    //   };
    const handelInputChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    };

    // console.log(totalWords.replace(/ .*/,''),'test')

    return (
        <>

            {/* <form className="search m-4">
                <div className="row">
                    <input className="col-4 searshi"
                        type="text"
                        name="name"
                        value={names}
                        onChange={handelInputChange}
                    ></input>
                    <Link to={`/SearchScreen/${names}`} ><button className="primary col-1 searchp" >
                        <i class="bi bi-search"></i>
                    </button></Link>
                </div>
            </form> */}

            <div className="container ">
                <Link to="/AddProduct">
                    <button className="btn btn-btn m-3 ">New Product</button>
                </Link>
                {/* <Pagination page={page} pages={pages} changePage={setPage} /> */}
                <div className="container ">

                    <div className="ms-auto row mb-3 col-lg-6">
                    <div className="topnav__search col-6">
                            <input type="text" placeholder='Search here...' onChange={(event) => {
                                setSearchTerm(event.target.value)
                            }} />
                            <i className='bx bx-search'></i>
                        </div>
                        <div className="col-3">

                            <select placeholder="select " class="form-control  topnav__search"
                                name="checkKey" onChange={handelIKeyChange}>
                                <option hidden={true} value=''>select...</option>
                                <option value='stock'>Stock</option>
                                <option value='rating'>Rating</option>
                                <option value='price'>Price</option>
                                <option value='category'>Category</option>

                            </select>
                        </div>
                        <div className="col-3">
                            <select disabled={checkKey === ''} placeholder="checValue " class="form-control  topnav__search" name="checValue" onChange={handelValuChange}>
                                <option hidden={true} value=''>select...</option>
                                {checkKey && checkKey === 'rating' &&
                                    <>
                                        <option value='0'>no rating</option>
                                        <option value='1'>1up</option>
                                        <option value='2'>2up</option>
                                        <option value='3'>3up</option>
                                        <option value='4'>4up</option>
                                        <option value='5'>5</option>
                                    </>
                                }
                                {checkKey && checkKey === 'stock' &&
                                    <>
                                        <option value='in'>IN STOCK</option>
                                        <option value='out'>OUT OF STOCK</option>
                                    </>
                                }
                                {checkKey && checkKey === 'price' &&
                                    <>
                                        <option value='g'>UP 500$</option>
                                        <option value='l'>DOWN 500$</option>
                                    </>
                                } {checkKey && checkKey === 'category' &&
                                    categories && categories.map((categorys, index) => {
                                        return (
                                            <>
                                                <option value={categorys.name}>{categorys.name}</option>
                                            </>)
                                    })

                                }


                            </select>
                        </div>

                    </div>

                </div>

                <div className="table-responsive card">
                    <table className="table table-borderless ">
                        <thead className=" bg-table-th ">
                            <tr className="border-bottom">
                                <th className=""> <span className="col">#</span> </th>
                                <th className=""> <span className=" col">Name</span> </th>
                                <th className=""> <span className=" col">Image</span> </th>
                                <th className=""> <span className=" col">In Stock</span> </th>
                                <th className=""> <span className=" col">Rating</span> </th>
                                <th className=""> <span className=" col">Price</span> </th>
                                <th className=""> <span className=" col">Action</span> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.filter((val) => {
                                if (searchTerm == "") {
                                    return val
                                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                } else if (parseInt(val.ratings) === parseInt(searchTerm)) {
                                    return val
                                }
                            }).map((product, index) => {
                                return (
                                    <ProductsTable key={index} index={index} ProductData={product} />
                                );
                            })}
                        </tbody>
                    </table>
                    <Pagination page={page || 1} pages={pages} changePage={setPage} />
                </div>
            </div>

        </>
    );
}