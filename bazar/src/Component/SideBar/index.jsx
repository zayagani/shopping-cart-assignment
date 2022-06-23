import React from "react";
import "../SideBar/sidebar.scss";

const CategorySidebar = ({ category, handleClick, active }) => {
  const { name, id } = category;
  return (
    <div
      className={`category-sidebar ${active ? "active" : null}`}
      onClick={() => handleClick(category)}
      key={id}
    >
      {name}
    </div>
  );
};

export default CategorySidebar;