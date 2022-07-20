import React from "react";

const CheckList = ({ title, id, checked, handleChecked }) => {
  console.log(checked);

  return (
    <div className="check_list">
      <input
        onClick={() => handleChecked(id)}
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={checked}
      />
      <label htmlFor="">{title}</label>
    </div>
  );
};

export default CheckList;
