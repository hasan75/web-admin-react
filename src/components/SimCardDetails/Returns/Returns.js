import React, { useState } from 'react';
// import './App.css';
import MaterialTable from 'material-table';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import acStyle from './Styles/Returns.module.css';
const empList = [
  {
    name: 'Neeraj',
    email: 'neeraj@gmail.com',
    phone: 9876543210,
    city: 'Bangalore',
  },
  //   ,
  //   { name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
  //   { name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
  //   { name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
];
function ACPOperations() {
  const [data, setData] = useState(empList);
  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Phone Number', field: 'phone' },
    { title: 'City', field: 'city' },
  ];
  return (
    <div className={acStyle.container}>
      {/* <p className={acStyle.title}>SIM CARD<p/> */}
      <p className={acStyle.title}>Returns</p>
      <MaterialTable
        style={{
          boxShadow: 'none',
          border: 'none',
          margin: '20px',
          border: '1px solid #000',
          marginBottom: '20px',
        }}
        title=''
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [
                ...data,
                { id: Math.floor(Math.random() * 100), ...newRow },
              ];
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          //   onRowDelete: selectedRow => new Promise((resolve, reject) => {
          //     const index = selectedRow.tableData.id;
          //     const updatedRows = [...data]
          //     updatedRows.splice(index, 1)
          //     setTimeout(() => {
          //       setData(updatedRows)
          //       resolve()
          //     }, 2000)
          //   }),
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
          title=''
          data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                const updatedRows = [
                  ...data,
                  { id: Math.floor(Math.random() * 100), ...newRow },
                ];
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            //   onRowDelete: selectedRow => new Promise((resolve, reject) => {
            //     const index = selectedRow.tableData.id;
            //     const updatedRows = [...data]
            //     updatedRows.splice(index, 1)
            //     setTimeout(() => {
            //       setData(updatedRows)
            //       resolve()
            //     }, 2000)
            //   }),
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
          }}
        />
      </div>
      <div
        style={{
          boxShadow: 'none',
          border: 'none',
          margin: '20px',
          border: '1px solid #000',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography component='div'>
          <Box
            sx={{ fontWeight: 'bold', width: '30px' }}
            fontWeight='fontWeightLight'
            m={1}
          >
            Note
          </Box>
        </Typography>
        <Input
          style={{ marginLeft: '50px', minWidth: '60%' }}
          placeholder='Write Here'
          inputProps={{ 'aria-label': 'description' }}
          disableUnderline={true}
        />
      </div>
    </div>
  );
}

export default ACPOperations;
