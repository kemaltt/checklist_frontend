import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CheckPointItem from "./CheckPointItem";

export default function CheckPoint() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleCheckList = () => {
    fetch("http://localhost:9000/dashboard")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const handleChecked = (id) => {
    fetch(`http://localhost:9000/checkedlist/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((newData) => setData(newData));
  };

  const handleReset = () => {
    fetch("http://localhost:9000/reset", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((newData) => setData(newData));
  };

  useEffect(() => {
    handleCheckList();
  }, []);

  return (
    <div className="dashboard_container">
      {data.map((item, i) => (
        <div key={i}>
          <CheckPointItem
            title={item.title}
            id={item.id}
            checked={item.checked}
            handleChecked={handleChecked}
          />
        </div>
      ))}

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
