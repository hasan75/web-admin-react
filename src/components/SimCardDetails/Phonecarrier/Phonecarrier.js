import React, { useState } from 'react';
// import * as ServiceWorker from './serviceWorker';
import MaterialTable from 'material-table'
import pcStyle from './Styles/Phonecarrier.module.css'
const simcard = [
  {  simStatus: " ", statusDate: ' ',serviceCarrier:' ' ,  phonePlane: " ",MDN:" " },
    // {  name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
  // {  name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
  // {  name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
]
 
function Phonecarrier() {
    const [data, setData] = useState(simcard)
    const columns = [
      { title: "simStatus", field: "simStatus" },
      { title: "statusDate", field: "statusDate" },
      { title: "phonePlane", field: "phonePlane", },
      { title: " serviceCarrier", field: " serviceCarrier" },
      { title: "MDN", field: "MDN", }
    ]
     
    // const columns = [
    //   { field: 'name', headerName: 'Name', width: 180, editable: true },
    //   { field: 'age', headerName: 'Age', type: 'number', editable: true },
    //   {
    //     field: 'dateCreated',
    //     headerName: 'Date Created',
    //     type: 'date',
    //     width: 180,
    //     editable: true,
    //   },
    //   {
    //     field: 'lastLogin',
    //     headerName: 'Last Login',
    //     type: 'dateTime',
    //     width: 220,
    //     editable: true,
    //   },
    // ];
    return (
      <div className={pcStyle.container}>    
      {/* <p className={pcStyle.title}>SIM CARD<p/> */}
      <p className={pcStyle.title}>Phone Carrier Operations</p>
        <MaterialTable style={{boxShadow:'none',border:'none',margin:'20px',border:'1px solid #000',marginBottom:'5px'}}
        
        //   title=""
          data={data}
          columns={columns}
          editable={{
            // onRowAdd: (newRow) => new Promise((resolve, reject) => {
            //   const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            //   setTimeout(() => {
            //     setData(updatedRows)
            //     resolve()
            //   }, 2000)
            // }),     
            // onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            //   const index=oldRow.tableData.id;
            //   const updatedRows=[...data]
            //   updatedRows[index]=updatedRow
            //   setTimeout(() => {
            //     setData(updatedRows)
            //     resolve()
            //   }, 2000)
            // })
          }}
          options={{
            actionsColumnIndex: -1, addRowPosition: "first",
            search:false,
            paging:false,
            // add:false,
            // create:false,
            // icon: Delete,
           
            showTitle: false,
            // filtering: false
            // disableSortBy: true
            sorting: false,
            toolbar:false

          }}
        />
       
      </div>
    );
  }  
  export default Phonecarrier;
  
// ServiceWorker.unregister();
