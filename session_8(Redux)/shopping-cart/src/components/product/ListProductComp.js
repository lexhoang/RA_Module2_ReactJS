import React from 'react'
import { useSelector } from 'react-redux';
import ProductComp from './ProductComp';

export default function ListProductComp() {
  const listProduct = useSelector(state => state.listProductReducer);

  return (
    <div>
      {/* LIST PRODUCT : START */}
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {/* PRODUCT : START */}
            {
              listProduct.map((product, index) => {
                return (
                  <ProductComp key={product.productId} product={product} />
                )
              })
            }
            {/* PRODUCT : END */}
          </div>
        </div>
      </div>
      {/* LIST PRODUCT : END */}
    </div>
  )
}
