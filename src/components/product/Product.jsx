import { useEffect } from 'react'
import './Product.css';
import { getAllProducts } from '../../pages/service/ProductService';
import { useDispatch, useSelector } from 'react-redux';


function Product() {
  const dispatch = useDispatch();
  const productData = useSelector((store) => {
    return store.productReducer.data
  });
  useEffect(() => {
    if (productData.length === 0) {
      getAllProducts(dispatch);
    }
  }, []);

  return (
    <div>
      <div className='option'>
        <div>
          <input type="radio" name='product' defaultChecked />
          <label>All</label>
        </div>
        <div>
          <input type="radio" name='product' />
          <label>Electronic</label>
        </div>
        <div>
          <input type="radio" name='product' />
          <label>Clothing</label>
        </div>
        <div>
          <input type="radio" name='product' />
          <label>Men's clothing</label>
        </div>
      </div>

      <div className='products'>
       {productData.map((product)=>{
          console.log(product);
          {product.image}
        })}
      </div>

    </div>
  );
}

export default Product