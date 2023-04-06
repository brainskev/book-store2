import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const res = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <span>{res}</span>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
};

export default Categories;
