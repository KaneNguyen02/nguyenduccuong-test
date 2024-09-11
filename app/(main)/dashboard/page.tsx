import Pagination from "@/components/Pagination/Pagination";
import ProductItem from "@/components/ProductItem.tsx/ProductItem";
import TableHeader from "@/components/TableHeader/TableHeader";
import { productData } from "@/data";
import React from "react";



const ProductList: React.FC = () => {
  return (
    <div className="py-4 bg-gray-900 divide-y divide-gray-600 rounded-xl">
      <TableHeader />

      {productData.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          url={product.url}
          lastAssessed={product.lastAssessed}
          licenseStatus={product.licenseStatus}
          licenseType={product.licenseType}
          userRole={product.userRole}
        />
      ))}

      <Pagination />
    </div>
  );
};

export default ProductList;
