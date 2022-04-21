import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';

const DeviceOrders = () => {
  const [columns, setColumns] = useState([
    {
      title: 'ID',
      field: 'id',
      hidden: true,
      // render: (row) => (
      //   <Link
      //     sx={{ textDecoration: 'none' }}
      //     to={`/dashboard/vendor/${row.id}`}
      //   >
      //     {row.id}
      //   </Link>
      // ),
    },
    {
      title: 'Device Order Number',
      field: 'device_order_number',
    },
    { title: 'Order Date', field: 'order_date', type: 'date' },
    { title: 'Quantity', field: 'quantity' },
    { title: 'Item', field: 'item' },
    { title: 'Order Date', field: 'order_date' },
    { title: 'Quantity', field: 'quantity' },
    { title: 'Vendor', field: 'vendor' },
    { title: 'Files', field: 'files', hidden: true },
    { title: 'Tracking Number', field: 'tracking_number', hidden: true },
    {
      title: 'Received Date',
      field: 'received_date',
      type: 'date',
      // hidden: true,
    },
    { title: 'Batch Number', field: 'batch_number', hidden: true },
    { title: 'Device Model', title: 'device_model', hidden: true },
    { title: 'Notes', field: 'notes', hidden: true },
  ]);
  // const [errorMessages, setErrorMessages] = useState([]);
  const [data, setData] = useState([
    {
      device_order_number: 23565768,
      order_date: '10.10.2021',
      quantity: 5,
      item: 'TrueSIm',
      vendor: 'MSC',
      received_date: '20.10.21',
    },
    {
      device_order_number: 767546546,
      order_date: '10.10.2021',
      quantity: 785,
      item: 'Sorry',
      vendor: 'MSC',
      received_date: '29.10.21',
    },
  ]);

  return (
    <Box
      sx={{
        p: 2,
        minWidth: 300,
      }}
    >
      <Button
        sx={{
          my: 'auto',
          border: '1px solid gray',
          variant: 'outlined',
          color: 'black',
        }}
        component={Link}
        to='/dashboard/deviceOrders/addDeviceOrder'
      >
        Add A New Device Order
      </Button>
      <Box sx={{ border: '1px solid gray', my: '10px', borderRadius: '2px' }}>
        <MaterialTable
          sx={{ margin: '20px' }}
          title=''
          columns={columns}
          data={data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);

                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);

                  resolve();
                }, 1000);
              }),
          }}
          options={{
            // selection: true,
            // exportButton: true,
            // exportAllData: true,
            // shorting: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 50],
            pageSize: 2,
            paginationType: 'stepped',
            paginationPosition: 'top',
            showTextRowsSelected: false,
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: () => (
                <button
                  style={{
                    fontSize: '1rem',
                    borderRadius: '2px',
                    backgroundColor: '#dddddd',
                    color: 'black',
                    border: 'none',
                    padding: '2px 8px',
                  }}
                >
                  View
                </button>
              ),
              tooltip: 'Click to active',
              onClick: (data) => console.log(data),
              // isFreeAction: true,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default DeviceOrders;
