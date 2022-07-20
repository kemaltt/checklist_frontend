import React from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Checklist</h1>
      <ul>
        <li>
          <a onClick={() => navigate("/")} href="">
            Dashboard
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/newlist")} href="">
            Add checklist
          </a>
        </li>
      </ul>
    </nav>
  );
}
