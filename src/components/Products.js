import React from "react";
import Product from "./Product";
function Products({ data, setData, handleEdit, removeItem }) {
  return (
    <div>
      <table
        width="100%"
        className="table-striped table-bordered text-center mt-5"
      >
        <thead>
          <tr>
            <th width="5%">ID</th>
            <th width="25%">Title</th>
            <th width="15%">Price</th>
            <th width="15%">Stock</th>
            <th width="20%">Brand</th>
            <th width="20%">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Product
              key={index}
              index={index}
              product={item}
              onClick={handleEdit}
              item={item}
              removeItem={removeItem}
              data={data}
              setData={setData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
