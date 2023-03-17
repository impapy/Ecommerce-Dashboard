import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import CountryTable from "../../../components/CountryTable/CountryTable";
import { getCountriesList,total ,getCountryPaginationtList} from './../../../redux/actions/country';
import { Link,useParams  } from "react-router-dom";
import './Countries.css'
import Pagination from "../../../components/Pagination/Pagination";

export default function Countries() {
const [searchTerm,setSearchTerm] = useState('')
    
    const { countries } = useSelector(state => state.countries)
    const { num } = useParams() || 1;
    const [page, setPage] = useState(num);
    const pages  =total || 1 ;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountriesList());
    }, []);


    useEffect(() => {
        dispatch(getCountryPaginationtList(page));
    }, [page]);
    return (
        <>


<div className="container m-auto my-5">

                <div className="container m-auto my-5 d-flex row justify-content-between" >
                    
                    <span className="d-flex text-start w-10  col"> <h1 className="d-inline-flex" >Country </h1></span>
                    <span className="d-flex   col w-10">
                    <Link to="/AddCountry"  className="ms-sm-auto">
                    <button className="btn btn-btn ">New Country</button>
                </Link>
                    </span>
                </div>
                <div className="topnav__search col-6 mb-3">
                <input type="text" placeholder='Search here...' onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}/>
                <i className='bx bx-search'></i>
            </div>
                <div className="table-responsive card">      
                     
                <table className="table table-borderless  ">
                <thead className=" bg-table-th">
                        <tr className="border-bottom">
                            <th className="th1"> <span className="col">#</span> </th>
                            <th className="th2"> <span className="ml-2 col">Name</span> </th>
                            <th className="th3"> <span className="ml-2 col">Arabic Name </span> </th>
                            <th className="th3"> <span className="ml-2 col"> </span> </th>

                        </tr>
                    </thead>
                    <tbody>

                        {countries && countries.filter((val)=>{
                if(searchTerm == ""){
                  return val
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).map((country, index) => {
                            return (
                                <CountryTable key={country._id} index={index}  countryData={country} />
                            );
                        })}


                    </tbody>
                </table></div>
            </div>
            <Pagination page={page || 1} pages={pages} changePage={setPage} />
        </>
    );
}