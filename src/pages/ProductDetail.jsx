import React from 'react';
import { useParams } from 'react-router-dom';
function ProductDetail() {
  console.log(useParams());
  const { name } = useParams();
  return <div>Product Name : {name}</div>;
}

export default ProductDetail;
