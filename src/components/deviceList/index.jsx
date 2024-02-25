import React, { useMemo, useState,useEffect } from "react";
import "./deviceList.css";
import StatusSummary from "../statusSummary";
import mockData from "../../mockData";
import List from "../../common-component/list";
import Pagination from "../../common-component/pagination";
import Search from "../search";


const URL = 'http://localhost:3001/api/v1/appliances'


const DeviceList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(5);

  const pagesList = useMemo(() => {
    return [5, 10, 20];
  }, []);

  

  const headers = useMemo(() => {
    return [
      { id: "serialNo", name: "Device Serial" },
      { id: "location", name: "Location" },
      { id: "bandwidth", name: "Bandwidth" },
      { id: "deviceStatus", name: "Status" },
      { id: "downloadStatus", name: "Download Status" },
      { id: "osVersion", name: "OS Version" },
    ];
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setData(mockData);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const performSearch = (term) => {
    const search = data.filter((val) => {
      return val.deviceStatus === term;
    });
    if (term === "") {
      setData(data);
    } else setData(search);
  };
  const debouncedSearch = debounce(performSearch, 1000);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value);
  };

  useEffect(()=>{
    fetch(URL).then((data)=>{
      return data.json();
    }).then((value)=>{
       const {appliances} = value
      setData(appliances);
    })
  },[]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="title">Devices</div>
      <StatusSummary statusData={data} />
      <section className="list-data">
        <div className="filter-pagination">
          <Search
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            setItemPerPage={setItemPerPage}
            pagesList={pagesList}
          />
        </div>
        <List headers={headers} mockData={currentItems} />
      </section>
    </>
  );
};

export default DeviceList;
