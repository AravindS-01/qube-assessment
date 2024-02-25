import React, { useMemo, useState } from 'react';
import './deviceList.css'
import StatusSummary from '../statusSummary';
import mockData from '../../mockData';
import DisplayElement from '../../common-component/displayElement';
import search from '../../asset/search.png';
import filter from '../../asset/filter.png'
import List from '../../common-component/list'

const DeviceList = () => {
   const headers = useMemo(()=>{ return [
    {id:'serialNo', name: 'Device Serial'},
    {id:'location', name: 'Location'},                
    {id:'bandwidth', name: 'Bandwidth'},                
    {id:'deviceStatus', name: 'Status'},                
    {id:'downloadStatus', name: 'Download Status'},                
    {id:'osVersion', name: 'OS Version'},                               
] },[]);
   const [data,setData] = useState(mockData);

   

  return (
    <>
    <div className='title'>Devices</div>
    <StatusSummary statusData={data} />
    <section>
      <div>
      <div className='filters'>
      <div className='search-field'>
      <input
        type="text"
        placeholder="Search..."
        value={''}
        onChange={()=>{}}
      />
      <img src={search} alt='search' />
      </div>
      <button>
        <img src={filter} alt='filter'/>
        <span>{'filter'}</span>
      </button>
      </div>
      <div>
        <div>
        <label htmlFor="itemsPerPage">Show </label>
      <select id="itemsPerPage" value={''} onChange={'handleItemsPerPageChange'}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
          
        </div>
      </div>
      </div>
<List headers={headers} mockData={data} />
    {/* <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header.id}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((item,index) => (
            <tr key={index}>
              {headers.map(data => {
                return (<DisplayElement key={data.id} type={data.id} header={data} currentData={item}/>)
              })}
              <td><button>view</button></td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </section>
    </>
  )
}

export default DeviceList