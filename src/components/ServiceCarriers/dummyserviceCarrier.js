import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MaterialTable from 'material-table';

const ServiceCarriers = () => {
  //for error handling
  // const [iserror, setIserror] = useState(false);
  const [columns, setColumns] = useState([
    { title: 'Label', field: 'label', sorting: false },
    {
      title: 'Name (Company Name)',
      field: 'name',
    },
    { title: 'Contact Name', field: 'contact_name', hidden: true },
    { title: 'ID', field: 'id', hidden: true },
    { title: 'Contact Phone', field: 'contact_phone', hidden: true },
    { title: 'Contact Email', field: 'contact_email', hidden: true },
    { title: 'Files', field: 'files', hidden: true },
    { title: 'API Username', field: 'api_username', hidden: true },
    { title: 'Api Token Password', field: 'api_token_pass', hidden: true },
    { title: 'CLECID', field: 'clecid', hidden: true },
    { title: 'Api Pin', field: 'api_pin', hidden: true },
    { title: 'Notes', field: 'notes', hidden: true },
    { title: 'Support Name', field: 'support_name', hidden: true },
    { title: 'Support Phone', field: 'support_phone', hidden: true },
    { title: 'Support Email', field: 'support_email', hidden: true },
    { title: 'Phone Plans', field: 'phone_plans', hidden: true },
    {
      title: 'Status',
      field: 'status',
      lookup: { 1: 'Active', 2: 'Deactive' },
    },
  ]);
  const [data, setData] = useState([
    {
      label: 'Label',
      name: 'PWR',
      created_date: '2022-01-02',
      status: 1,
    },
    {
      label: 'Labe2',
      name: '321 Comm',
      created_date: '2022-01-02',
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
        Add A New Service Carrier
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
            toolbar: false,
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

export default ServiceCarriers;
