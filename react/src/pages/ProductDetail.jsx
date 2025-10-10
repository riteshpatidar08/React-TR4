import React from 'react';
import { useParams } from 'react-router-dom';
function ProductDetail() {
  console.log(useParams());
//   getting the value of dynamic part in the url which is name using useParams hook
  const { name } = useParams();
  return <div>Product Name : {name}</div>;
}

export default ProductDetail;
