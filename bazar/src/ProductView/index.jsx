import React from "react";
import { Route, Routes } from "react-router-dom";
import PlpPages from "../Pages/PlpPages"

const ProductView = () => {
  return (
    <Routes>
      <Route index element={<PlpPages />} />
      <Route path=":categoryId" element={<PlpPages />} />
    </Routes>
  );
};

export default ProductView;