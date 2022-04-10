import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MaterialTable from 'material-table';

const PhonePlans = () => {
  const [columns, setColumns] = useState([
    {
      title: 'Name (Company Name)',
      field: 'name',
    },
    { title: 'Service Carrier', field: 'service_carrier' },
    { title: 'Plan Code', field: 'plan_code' },
    {
      title: 'Status',
      field: 'status',
      lookup: { 1: 'Active', 2: 'Deactive' },
    },
    { title: 'ID', field: 'id', hidden: true },
    {
      title: 'Created Date',
      field: 'created_date',
      type: 'date',
      hidden: true,
    },
    { title: 'Description', field: 'description', hidden: true },
  ]);
  const [data, setData] = useState([
    {
      name: 'PWR',
      service_carrier: 'NameX',
      plan_code: 12345,
      status: 1,
    },
    {
      name: '321Com',
      service_carrier: 'NameY',
      plan_code: 67892,
      status: 2,
    },
  ]);
  // const [errorMessages, setErrorMessages] = useState([]);

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
        Add A New Phone Plan
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
            search: false,
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
                  Activate
                </button>
              ),
              tooltip: 'Click to active',
              onClick: (data) => console.log(data),
              // isFreeAction: true,
            },
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
                  Deactivate
                </button>
              ),
              tooltip: 'Click to Deactive',
              onClick: (data) => console.log(data),
              // isFreeAction: true,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default PhonePlans;
