import React, { useEffect, useState } from 'react'
import { Link ,useParams } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getAllCities ,total,getCityPaginationtList} from '../../redux/actions/Cities'
import CetyTable from '../../components/CitiesTable/CitiesTable'; 
import Pagination from "../../components/Pagination/Pagination";
export default function GetCities() {
    const { cities } = useSelector(state => state.Cities)
    // const { City } =useSelector(states => states.Cities)

    const { num } = useParams() || 1;
    const [page, setPage] = useState(num);
    const pages  =total || 1 ;

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllCities())
    }, [])

    useEffect(() => {
        dispatch(getCityPaginationtList(page))
    }, [dispatch,page])


    return (
        <>





            <div className="container ">
                <Link to="/AddCety">
                    <button className="btn btn-btn m-4 ">New Cities</button>
                </Link>
                <div className="table-responsive card">
                    <table className="table table-borderless  ">
                        <thead className=" bg-table-th ">
                            <tr className="border-bottom ">
                                <th className=""> <span className="col">#</span> </th>
                                <th className=""> <span className="ml-2 col">Name</span> </th>
                                <th className=""> <span className="ml-2 col">Arabic Name</span> </th>
                                <th className=""> <span className="ml-2 col">Governate Name</span> </th>
                                <th className=""> <span className="ml-2 col">Arabic Governate Name</span> </th>
                                <th className=""> <span className="ml-2 col">Action</span> </th>

                            </tr>
                        </thead>
                        <tbody>
                            {cities && cities.map((City, i) => {
                                return (
                                    <CetyTable keyc={i} CityData={City} />
                                )
                            })}
                        </tbody>
                    </table>
                </div></div>






                <Pagination page={page || 1} pages={pages} changePage={setPage} />


        </>


    );
}