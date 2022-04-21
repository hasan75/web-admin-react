import React, { useState } from 'react';
import MaterialTable from 'material-table';
import scStyle from './Styles/ACPOperations.module.css';
const simcard = [
  {
    SSID: '8374839748937',
    puk1: 'puk1',
    Date: new Date(),
    Username: 'Abdullah',
    vendor: 'Vendor',
  },
  // {  name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
  // {  name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
  // {  name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
];
const simcard2 = [
  { simCardCompati: ' ', simCardNumber: '', goodORBad: ' ', batchNumber: ' ' },
  // {  name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
  // {  name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
  // {  name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
];
function Simcard() {
  const [data, setData] = useState(simcard);
  const columns = [
    { title: 'SSID', field: 'SSID' },
    { title: 'puk1', field: 'puk1' },
    { title: 'Create-date', field: 'Date', type: 'date' },
    { title: 'Username', field: 'Username' },
    { title: 'vendor', field: 'vendor' },
  ];
  const [data2, setData2] = useState(simcard2);
  const columns2 = [
    { title: 'simcard', field: 'SSID' },
    { title: 'simCardNumber', field: 'simCardNumber' },
    { title: 'goodORBad', field: 'goodORBad' },
    { title: 'batchNumber', field: 'batchNumber' },
    // { title: "vendor", field: "vendor", }
  ];
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
    <div className={scStyle.container}>
      {/* <p className={scStyle.title}>SIM CARD<p/> */}
      <p className={scStyle.title}>ACP Operations</p>
      <MaterialTable
        style={{
          boxShadow: 'none',
          border: 'none',
          margin: '20px',
          border: '1px solid #000',
          marginBottom: '5px',
        }}
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
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data];
              updatedRows[index] = updatedRow;
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: 'first',
          search: false,
          paging: false,
          // add:false,
          // create:false,
          showTitle: false,
          sorting: false,
          toolbar: false,
        }}
      />
      <div style={{}}>
        <MaterialTable
          style={{
            boxShadow: 'none',
            border: 'none',
            margin: '20px',
            border: '1px solid #000',
            marginBottom: '20px',
          }}
          //   title="SIM CARED"
          data={data2}
          columns={columns2}
          editable={{
            // onRowAdd: (newRow) => new Promise((resolve, reject) => {
            //   const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            //   setTimeout(() => {
            //     setData(updatedRows)
            //     resolve()
            //   }, 2000)
            // }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                const index = oldRow.tableData.id;
                const updatedRows = [...data2];
                updatedRows[index] = updatedRow;
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: 'first',
            search: false,
            paging: false,
            // add:false,
            // create:false,
            showTitle: false,
            sorting: false,
            toolbar: false,
          }}
        />
      </div>
    </div>
  );
}

export default Simcard;

// ServiceWorker.unregister();
