import React from "react";
import search from "../../asset/search.png";
import filter from "../../asset/filter.png";
import "./search.css";

const Search = ({ searchTerm, handleSearchChange }) => {
  return (
    <section className="filters">
      <div className="search-field">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          title={"Search by Status, "}
        />
        <img src={search} alt="search" />
      </div>
      <button>
        <img src={filter} alt="filter" />
        <span>{"filter"}</span>
      </button>
    </section>
  );
};

export default Search;
