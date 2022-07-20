import React from "react";

export default function CheckListCardItem({ img, id, name }) {
  console.log(img);
  return (
    <div className="check_list_card">
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div>
  );
}
