import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getAllGovernmentByCountryName } from '../../../redux/actions/Governate'
import Pagination from "../../../components/Pagination/Pagination";
// ===========================
import { getCountriesList } from './../../../redux/actions/country';
import { getAllCitiesByGovName } from '../../../redux/actions/Cities'
import { AddAddressForUser } from './../../../redux/actions/user';




export default function AddAddress({userId}) {
  const history = useHistory();
 const dispatch = useDispatch();
  


    const [state, setState] = useState({
      
      country: '',
      city: '',
      governate: '',
      isdefault:false,
     
  });

  const [error, setError] = useState("")

  const { country, city, governate ,isdefault} = state
 
  const handelInputChange = (e) => {
      let { name, value } = e.target;
      setState({ ...state, [name]: value })
      // console.log( "fdghhgfhddgf",name, value);
  };
 

    const handelSubmet = (e) => {
      
      // setState({ id: userId }) 
      e.preventDefault();
    console.log(state);
      if ( !country|| !city|| !governate) {
          setError("please enter values in fields")

      } else {

  
  dispatch(AddAddressForUser(userId,state));

  setError("");

          history.push("/UserDetails/"+userId) 
      }
  }

 

  const { govers } = useSelector(state => state.goverments)


 



  const handCountry = (e) => {
    console.log(e.target.value);
   
    dispatch(getAllGovernmentByCountryName(e.target.value)); 
    
  }

  function testFunction(e) {
    

    handCountry(e)
    handelInputChange(e)
 }

function testFunction_2(e) {
  handGovernment(e)
  handelInputChange(e)
}



  // ==============================================
  const { countries } = useSelector(state => state.countries)


  useEffect(() => {
    dispatch(getCountriesList());
  }, []);



  // ====================================================

  const { cities } = useSelector(state => state.Cities)

  const handGovernment = (e) => {
    console.log(e.target.value);

    dispatch(getAllCitiesByGovName(e.target.value));
  }




  return (
    <div className="modal fade" id="AddAddress" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New Address</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body mx-2">
            <form  onSubmit={handelSubmet}>

              <div className="mb-3">

                <p className="my-0 py-0">
                  <div class="mb-3 row">
                    <label for="Country" class="form-label col">Country : </label>
                    <select class="form-control col w-50 me-auto" name="country" id="country"
                    onChange={testFunction}  >
<option disabled  selected> Select Country </option>
                      {countries.map((country, i) => {
                        return (
                          <option value={country.name} >{country.name}</option>
                        )
                      })}
                    </select>
                  </div>
                </p>

                <p className="my-0 py-0">
                  <div class="mb-3 row">
                    <label for="Government" class="form-label col">Government : </label>
                    <select class="form-control col w-50 me-auto" name="governate" id="Government" onChange={testFunction_2}>
                    <option disabled  selected> Select Government </option>

                      {govers && govers.map((Government, i) => {
                        return (
                          <option value={Government.name || ""} >{Government.name || ""}</option>
                        )
                      })}
                    </select>
                  </div>

                </p>
                <p className="my-0 py-0">
                  <div class="mb-3 row">
                    <label for="Government" class="form-label col">City : </label>
                    <select class="form-control col w-50 me-auto" name="city" id="City" onChange={handelInputChange} >
                    <option disabled  selected> Select City </option>

                      {cities && cities.map((City, i) => {
                        return (
                          <option value={City.name || ""} >{City.name || ""}</option>
                        )
                      })}
                    </select>
                  </div>




                </p>

              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-btn rounded-3 "  data-bs-dismiss="modal">Add Address</button>
              </div> </form>
          </div>
        </div>
      </div>
    </div>

  )
}
