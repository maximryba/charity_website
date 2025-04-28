import React from "react";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const CategoryFilter = ({ onSelectCategory }) => {
  return (
    <div className="category-filter">
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;