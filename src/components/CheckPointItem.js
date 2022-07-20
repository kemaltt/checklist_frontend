import React, { useState } from "react";

const CheckPointItem = ({ title, id, checked, handleChecked }) => {
  const [checkedState, setCheckedState] = useState(checked);
  //   console.log(checked);

  return (
    <div className="check_list">
      <div className="list">
        <input
          onClick={() => handleChecked(id)}
          type="checkbox"
          name="checkbox"
          // id="checkbox"
          checked={checked}
        />
        <label htmlFor="">{title}</label>
      </div>
    </div>
  );
};

export default CheckPointItem;
