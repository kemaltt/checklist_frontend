import React, { useEffect, useState } from "react";
import CheckListCardItem from "./CheckListCardItem";

export default function CheckListCard() {
  const [data, setData] = useState([]);

  const handleCheckList = () => {
    fetch("http://localhost:9000/dashboard")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    handleCheckList();
  }, []);

  return (
    <div className="dashboard_container">
      {data.map((item, i) => (
        <div className="check_list_card" key={i}>
          <CheckListCardItem name={item.name} id={item.id} img={item.img} />
        </div>
      ))}
    </div>
  );
}
