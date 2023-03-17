import React from "react"
export const Dashboard = React.lazy(() => import('./../pages/Dashboard'))
export const Login = React.lazy(() => import ('./../pages/Login/Login'))
export const Users = React.lazy(() => import ('./../pages/User/Users/Users'))
export const AddUser = React.lazy(() => import ('./../pages/User/AddUser/AddUser'))
export const EditUser = React.lazy(() => import ('./../pages/User/EditUser/EditUser'))
export const UserDetails = React.lazy(() => import ('./../pages/User/UserDetails/UserDetails'))

export const Countries = React.lazy(() => import ('./../pages/Country/Countries/Countries'))
export const AddCountry = React.lazy(() => import ('./../pages/Country/AddCountry/AddCountry'))
export const EditCity = React.lazy(() => import ('./../pages/Country/EditCountry/EditCountry'))
export const Orders = React.lazy(() => import ('./../pages/Order/Orders/Orders'))
export const orderDetails = React.lazy(() => import ('./../components/OrderDetails/OrderDetails'))
export const NewCategory = React.lazy(() => import ('../pages/Category/NewCategory'))
export const EditCategory = React.lazy(() => import ('../pages/Category/EditCategory'))
export const EditSubCategory = React.lazy(() => import ('../pages/Category/EditSubCategory'))
export const SubCategory = React.lazy(() => import ('../pages/Category/SubCategory'))
export const Category = React.lazy(() => import ('../pages/Category/Category'))
export const Products = React.lazy(() => import ('../pages/Product/Product'))

/////////////////////////////////////////////

export const EditProduct = React.lazy(() => import ('../pages/EditeProduct/EditeProduct'))
export const AddProduct = React.lazy(() => import ('../pages/AddProduct/AddProduct'))
export const ReviewsProduct = React.lazy(() => import ('../pages/ReviewsProduct/ReviewsProduct'))
export const Governates = React.lazy(() => import ('../pages/Governates/Governates'))
export const Cities = React.lazy(() => import ('../pages/Cities/Cities'))
export const AddGovernate = React.lazy(() => import ('../pages/AddGovernate/AddGovernate'))
export const EditeGovernate = React.lazy(() => import ('../pages/EditeGovernate/EditeGovernate'))
export const EditeCity = React.lazy(() => import ('../pages/EditeCity/EditeCity'))
export const AddCities = React.lazy(() => import ('../pages/AddCety/AddCety'))
export const SearchScreen = React.lazy(() => import ('../pages/SearchScreen/SearchScreen'))
export const Coupons = React.lazy(() => import ('../pages/Coupon/Coupons'))
export const AddCoupons = React.lazy(() => import ('../pages/Coupon/AddCoupons'))
export const EditCoupon = React.lazy(() => import ('../pages/Coupon/EditCoupon'))
export const Sellers = React.lazy(() => import ('../pages/sellers/sellers/sellers'))
export const SellerOrders = React.lazy(() => import ('../pages/sellers/SellerOrders/SellerOrders'))


