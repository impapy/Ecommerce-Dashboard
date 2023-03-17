import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllGovernment, total, getGovPaginationtList } from '../../redux/actions/Governate'
import GovernatesTable from '../../components/GovernateTable/GovernateTable';
import Pagination from "../../components/Pagination/Pagination";
export default function GetGoverment() {
const [searchTerm,setSearchTerm] = useState('')

    const { govers } = useSelector(state => state.goverments)
    // const { City } =useSelector(states => states.Cities)
    const { num } = useParams() || 1;
    const [page, setPage] = useState(num);
    const pages = total || 1;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGovernment())
    }, [])

    useEffect(() => {
        dispatch(getGovPaginationtList(page))
    }, [page])

    
    return (
        <>
            <div className="container ">
                <Link to="/AddGovernate">
                    <button className="btn btn-btn m-5 ">New governate</button>
                </Link>
                <div className="topnav__search col-6 mb-3">
                <input type="text" placeholder='Search here...' onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}/>
                <i className='bx bx-search'></i>
            </div>
                <div className="table-responsive card card">

                    <table className="table table-borderless  ">
                        <thead className="bg-table-th">
                            <tr className="border-bottom ">
                                <th className=""> <span className="col">#</span> </th>
                                <th className=""> <span className="ml-2 col">Name</span> </th>
                                <th className=""> <span className="ml-2 col">Arabic Name</span> </th>
                                <th className=""> <span className="ml-2 col">Country Name</span> </th>
                                <th className=""> <span className="ml-2 col">Arabic Country Name</span> </th>
                                <th className=""> <span className="ml-2 col">Action</span> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {govers && govers.filter((val)=>{
                if(searchTerm == ""){
                  return val
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).map((g, i) => {
                                return (
                                    <GovernatesTable keyg={i} govData={g} />
                                )
                            })}
                        </tbody>
                    </table>
                    <Pagination page={page || 1} pages={pages} changePage={setPage} />
                </div>
            </div>
        </>
    );
}