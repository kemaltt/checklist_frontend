import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckList from "./CheckList";

export default function Dashboard() {
  const [data, setData] = useState([]);

  const handleCheckList = () => {
    fetch("http://localhost:9000/dashboard")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    handleCheckList();
  }, []);

  const handleChecked = (id) => {
    fetch(`http://localhost:9000/checkedlist/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
      body: JSON.stringify({
        // id: id,
        checked: true,
      }),
    })
      .then((res) => res.json())
      .then((newData) => setData(newData));
  };

  return (
    <div className="dashboard_container">
      {data.map((item, i) => (
        <div key={i}>
          <CheckList
            title={item.title}
            id={item.id}
            checked={item.checked}
            handleChecked={handleChecked}
          />
        </div>
      ))}
    </div>
  );
}
