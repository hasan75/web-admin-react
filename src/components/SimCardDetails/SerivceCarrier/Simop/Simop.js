import React, { useState } from 'react';
// import './App.css';
import MaterialTable from 'material-table' 
import ntStyle from './Styles/Simop.module.css';
const empList = [
  { name: "Neeraj", email: 'neeraj@gmail.com',   city: "Bangalore" }
  ,
  { name: "Raj", email: 'raj@gmail.com',   city: "Chennai" }
//   { name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
//   { name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
]
function Simop() {

  const [data, setData] = useState(empList)
  const columns = [    
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "City", field: "city", }
  ]
  return (
    <div className={ntStyle.container}>    
    {/* <p className={ntStyle.title}>SIM CARD<p/> */}
    <p className={ntStyle.title}>SIM-Operating-log</p>
    <MaterialTable style={{boxShadow:'none',border:'none',margin:'20px',border:'1px solid #000',marginBottom:'20px'}}
title=""
data={data}
columns={columns}
editable={{
//   onRowAdd: (newRow) => new Promise((resolve, reject) => {
//     const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
//     setTimeout(() => {
//       setData(updatedRows)
//       resolve()
//     }, 2000)
//   }),
//   onRowDelete: selectedRow => new Promise((resolve, reject) => {
//     const index = selectedRow.tableData.id;
//     const updatedRows = [...data]
//     updatedRows.splice(index, 1)
//     setTimeout(() => {
//       setData(updatedRows)
//       resolve()
//     }, 2000)
//   }),
//   onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
//     const index=oldRow.tableData.id;
//     const updatedRows=[...data]
//     updatedRows[index]=updatedRow
//     setTimeout(() => {
//       setData(updatedRows)
//       resolve()
//     }, 2000)
//   })

}}
options={{
  actionsColumnIndex: -1, addRowPosition: "first",
  search:false,
  paging:false,
  toolbar:false
}}
/>      
    </div>
  );
}

export default Simop;
