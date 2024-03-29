import React from "react";
import "./list.css";
import DisplayElement from "../displayElement";
import { useNavigate } from "react-router-dom";

const List = ({ headers, mockData }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`${id}/detail`);
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.id}>{header.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {mockData.map((item, index) => (
          <tr key={index}>
            {headers.map((data) => {
              return (
                <DisplayElement
                  key={data.id}
                  type={data.id}
                  header={data}
                  currentData={item}
                />
              );
            })}
            <td>
              <button
                onClick={() => {
                  return handleClick(item.serialNo);
                }}
              >
                view
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
