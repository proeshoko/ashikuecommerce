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
        {
          productData.map((product) => {
            return <div className='card'>
              <div className="card-header">
                <img src={product.image} width={300} height={300} />
              </div>
              <div className="card-body">
                <h4>{product.title}</h4>
              </div>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Product