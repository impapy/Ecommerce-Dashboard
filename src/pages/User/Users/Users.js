import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import UserTable from "../../../components/UserTable/UserTable";
import { getUsersList, getUsersListFilter, total, getUserPaginationtList } from './../../../redux/actions/user';
import Pagination from "../../../components/Pagination/Pagination";
import './Users.css'

export default function Users() {
const [searchTerm,setSearchTerm] = useState('')
  const { users } = useSelector(state => state.users)
  const { num } = useParams() || 1;
  const [page, setPage] = useState(num);
  const pages = total || 1;
  const [state, setState] = useState({
    status: "",
  });

  const { status } = state

  const handelStatusChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());

  }, []);

  const handFilterUser = (e) => {
    console.log(e.target.value);

    dispatch(getUsersListFilter(e.target.value));
  }
  useEffect(() => {
    dispatch(getUserPaginationtList(page, state));
  }, [page, state]);
  return (
    <>




      <div className="container ">
        
             <div className="col-6">
          <div className=" container my-4 ">
            <Link to="/AddUser">
              <button className="btn btn-btn ">New User</button>
            </Link>
            </div>

        </div>
        
        <div className="row ms-2 mb-3">
        <div className="topnav__search col-6 ">
                <input type="text" placeholder='Search here...' onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}/>
                <i className='bx bx-search'></i>
            </div>
        <div className="col-6  float-end" >

          <select placeholder="select " class="form-control w-100 topnav__search " name="status" onChange={handelStatusChange}>
            <option hidden={true} value=''>select...</option>
            <option value='Users'>Users</option>
            <option value='Admins'>Admins</option>
            <option value='seller'>sellers</option>

          </select>
        </div>
  
      </div>

        <div className="table-responsive container-fluid card">

          <table className="table table-borderless  ">
            <thead className="bg-table-th">
              <tr className="border-bottom ">
                <th className="th1"> <span className="col">#</span> </th>
                <th className="th2"> <span className="ml-2 col">Name</span> </th>
                <th className="th3"> <span className="ml-2 col">Email</span> </th>
                <th className="th4"> <span className="ml-2 col">Phone</span> </th>
                <th className="th4"> <span className="ml-2 col">Role</span> </th>
                <th className="th5"> <span className="ml-2 col">Action</span> </th>
              </tr>
            </thead>
            <tbody>

              {users && users.filter((val)=>{
                if(searchTerm == ""){
                  return val
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).map((user, index) => {
                return (
                  <UserTable key={user._id} userData={user} />
                );
              })}


            </tbody>
          </table></div>
      </div>
      <Pagination page={page || 1} pages={pages} changePage={setPage} />







      {/* 
        <div classNameNameName="container">
          
          <h1>Users</h1>
          <div classNameName="row">

          <Link to="/AddUser" classNameName="nav-link">
          <button type="button" className="btn btn-light">Add user</button></Link>
    <table classNameName="table mt-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">ubdate</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
        {users && users.map((user, index) => {
          return (
              <UserTable key={index} userData={user} />
          );
        })}
         </tbody>
        </table>
      </div>
        </div> */}
    </>
  );
}