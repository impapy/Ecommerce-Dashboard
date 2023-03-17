import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryPaginationtList ,total} from "../../redux/actions/Category";
import { Link } from "react-router-dom";
import CategoryTable from "../../components/CategoryTable/CaregoryTable";
import Pagination from "../../components/Pagination/Pagination";


export default function Category() {
const [searchTerm,setSearchTerm] = useState('')

    const { categories } = useSelector(state => state.categories)
    const { num } = useParams() || 1;
    const [page, setPage] = useState(num);
    const pages  =total || 1 ;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryPaginationtList(page,pages))

    }, [page,pages]);
    return (
        <>

            <div className="container m-auto my-5">
                <div className="container m-auto my-5 d-flex row justify-content-between" >
                    <span className="d-flex text-start w-10  col"> <h1 className="d-inline-flex" >Category </h1></span>
                    <span className="d-flex   col w-10">
                        <Link to="/AddCat" className="ms-sm-auto" >
                            <button className="btn btn-btn ">New Category</button>
                        </Link>
                    </span>
                    
 
                </div>
                <div className="topnav__search col-6 mb-3 ">
                <input type="text" placeholder='Search here...' onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}/>
                <i className='bx bx-search'></i>
            </div>
                <div className="table-responsive card">
                    <table className="table table-borderless   ">
                        <thead className=" bg-table-th">
                            <tr className="border-bottom">
                                <th className=""> <span className="col">#</span> </th>
                                <th className=""> <span className=" col">name</span> </th>
                                <th className=""> <span className=" col">image</span> </th>
                                <th className=""> <span className=" col">SubCategory</span> </th>
                                <th className=""> <span className=" col">Action</span> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {categories && categories.filter((val)=>{
                if(searchTerm == ""){
                  return val
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).map((category, index) => {
                                return (
                                    <CategoryTable key={index} i={index} CategoryData={category} />
                                );
                            })}


                        </tbody>
                    </table></div>
            </div>
            <Pagination page={page || 1} pages={pages} changePage={setPage} />
        </>
    );
}