/* import React from 'react'
import axios from 'axios'

function AllProducts() {
  const getAllProducts = ()=>{
    var promiseObject = axios.get("https://fakestoreapi.com/products");
    promiseObject
    .then((res)=>{
        console.log("then");
        console.log(res.data)
    })
    .catch((error) =>{
        console.log("error");
        console.log(error);
    });
  };
  <button onClick={getAllProducts}>Sao Tome</button>
}

export default AllProducts
*/
import axios from 'axios'
import React from 'react'


function AllProducts() {
    const getAllProducts = ()=>{
        axios.get("")
    }
  return (
    <div>
        <p>hi</p>
        <button onClick={getAllProducts}>SAO</button>
    </div>
  )
}

export default AllProducts