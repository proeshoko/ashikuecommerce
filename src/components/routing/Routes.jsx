import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import PageNotFound from "../pageNotFound/PageNotFound";
import AllProducts from "../product/AllProducts";
import Product from "../product/Product";


export var routes = [
    { parth: "/", component: true ? <Home /> : <Login />},
    //{ path: "/signup", component: <Login /> },    
    { path: "/signup", component: <Signup /> },
    { path: "*", component: <PageNotFound /> },
    {path: "/product", component: <Product />},
    {path: "/allproduct", component: <AllProducts />}
    

];