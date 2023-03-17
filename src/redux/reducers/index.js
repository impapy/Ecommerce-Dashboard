import ThemeReducer from "./ThemeReducer"
import authReducer from './authReducer';
import { combineReducers } from "redux";
import {usersReducer} from './users';
import {countriesReducer} from './country'
import orderReducer from './orderReducer'
import {categoryReducer} from './Categories'
import {ProductsReducer} from './Products'
import {GovReducer} from './Governate'
import {CitiesReducer} from './Cities'
import { CouponsReducer } from './coupons';
import { SellersReducer } from './Seller';

const rootReducer = combineReducers({
    ThemeReducer,
    auth: authReducer,
    users:usersReducer,
    orders:orderReducer,
    countries:countriesReducer,
    categories:categoryReducer,
    products:ProductsReducer,
    goverments:GovReducer,
    Cities:CitiesReducer,
    coupons:CouponsReducer,
    sellers:SellersReducer
})

export default rootReducer