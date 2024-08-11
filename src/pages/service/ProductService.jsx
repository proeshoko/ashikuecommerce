import axios from "axios";
import productActionCreator from "../action/ProductAction";

export const getAllProducts = () => {
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res);
            var productAction = productActionCreator()
             dispatch(productAction(res.data))
        })
        .catch((error) => {
            console.log(error);
            //console.log(productData);
        });
        
};
