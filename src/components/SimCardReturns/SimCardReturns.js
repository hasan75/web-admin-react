import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';

const SimCardReturns = () => {
  const [columns, setColumns] = useState([
    {
      title: 'ID',
      field: 'id',
      hidden: false,
      render: (row) => (
        <Link
          sx={{ textDecoration: 'none' }}
          to={`/dashboard/simCardReturns/${row.id}`}
        >
          {row.id}
        </Link>
      ),
    },
    {
      title: 'Return Date',
      field: 'return_date',
      type: 'date',
    },
    { title: 'Return Reason', field: 'return_reason' },
    { title: 'Agent', field: 'agent' },
    { title: 'Distributor', field: 'distributor' },
    { title: 'item', field: 'item', hidden: true },
    { title: 'SSID', field: 'ssid', hidden: true },
    { title: 'Device Serial Number', field: 'device_serial_num', hidden: true },
    { title: 'IMEI-1', field: 'imei1', type: 'numeric', hidden: true },
    { title: 'IMEI-2', field: 'imei2', type: 'numeric', hidden: true },
    {
      title: 'Shipping Methods',
      field: 'ship_method',
      lookup: { 1: 'USPS', 2: 'UPS', 3: 'FedEx', 4: 'DHL', 5: 'In Persion' },
      hidden: true,
    },
    {
      title: 'Tracking Number',
      field: 'trackingNumber',
      type: 'numeric',
      hidden: true,
    },
    { title: 'Report Status', field: 'report_status', hidden: true },
    {
      title: 'Receiption Date',
      field: 'receiption_date',
      type: 'date',
      hidden: true,
    },
    { title: 'Notes', field: 'notes', hidden: true },
  ]);
  // const [errorMessages, setErrorMessages] = useState([]);
  const [data, setData] = useState([
    {
      id: '1011',
      return_date: '20.10.22',
      return_reason: 'There was no internet connection',
    },
    {
      id: '2202',
      return_date: '20.10.22',
      return_reason: 'There was no internet connection',
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

export default SimCardReturns;
