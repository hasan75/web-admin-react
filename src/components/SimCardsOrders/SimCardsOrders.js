import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MaterialTable from 'material-table';

const SimCardsOrders = () => {
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
    { title: 'Sim Order Number', field: 'sim_order_number', hidden: true },
    { title: 'Company', field: 'company' },
    { title: 'Phone', field: 'phone' },
    { title: 'Email', field: 'email' },
    { title: 'Order Date', field: 'order_date', hidden: true },
    { title: 'Quantity', field: 'quantity', hidden: true },
    { title: 'Vendor', field: 'vendor', hidden: true },
    { title: 'Tracking Number', field: 'tracking_number', hidden: true },
    {
      title: 'Received Date',
      field: 'received_date',
      type: 'date',
      hidden: true,
    },
    { title: 'Batch Number', field: 'batch_number', hidden: true },
    { title: 'Files', field: 'files', hidden: true },
    { title: 'Notes', field: 'notes', hidden: true },
  ]);
  // const [errorMessages, setErrorMessages] = useState([]);
  const [data, setData] = useState([
    {
      company: '321com',
      phone: '0139487580',
      email: '123@outlook.com',
    },
    {
      company: 'PWD',
      phone: '9984573643',
      email: '456@outlook.com',
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
      >
        Add A New Order
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
            search: true,
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

export default SimCardsOrders;
