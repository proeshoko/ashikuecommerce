import axios from "axios";
import productActionCreator from "../action/ProductAction";

export const getAllProducts = (dispatch) => {
    
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res);
           // var productAction = productActionCreator()
             dispatch(productActionCreator(res.data))
        })
        .catch((error) => {
            console.log(error);
            //console.log(productData);
        });
        
};
