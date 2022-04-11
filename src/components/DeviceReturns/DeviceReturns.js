import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import allsimCardStyles from './DeviceReturns.module.css';

const DeviceReturns = () => {
  const [columns, setColumns] = useState([
    {
      title: 'Return Date',
      field: 'returnDate',
      type: 'date',
      hidden: false,
    },
    { title: 'Device Type', field: 'deviceType', sorting: false },
    { title: 'IMEI_1', field: 'imei1', type: 'date' },
    { title: 'IMEI_2', field: 'imei2', type: 'date' },
    { title: 'Serial Number', field: 'serial_number', sorting: false },

    { title: 'ID', field: 'id', sorting: false, hidden: true },
    {
      title: 'SSID',
      field: 'ssid',
      type: 'numeric',
      sorting: false,
      render: (row) => (
        <Link to={`/dashboard/simCardDetails/${row.ssid}`}>{row.ssid}</Link>
      ),
      hidden: true,
    },
    { title: 'Return Reasons', field: 'returnReason' },
    { title: 'Tracking Number', field: 'trackingNumber' },
  ]);
  const [data, setData] = useState([
    {
      returnDate: '10.10.2021',
      deviceType: 'laptop',
      imei1: 45678978954432,
      imei2: 78678678657657,
      serial_number: '2022-01-02',
      vendor: '321com',
      returnReason: 'Poor Network',
      Tr: '321',
      trackingNumber: '234',
    },
    {
      returnDate: '15.10.2021',
      deviceType: 'laptop',
      imei1: 45678978954432,
      imei2: 78678678657657,
      serial_number: '2022-01-02',
      vendor: '321com',
      batchNumber: '43456',
      returnReason: 'Poor Network',
      Tr: '230 ',
      trackingNumber: '225',
    },
  ]);
  return (
    <section>
      <div className={`${allsimCardStyles.searchContainer}`}>
        <span>Search</span>
        {/* form input  */}
        <div class='form-row row d-flex flex-row justify-content-center align-items-center'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3 col-lg-3'>
            <label className='me-1' htmlFor='ssid'>
              Device Type
            </label>
            <input
              type='text'
              className='form-control'
              id='ssid'
              placeholder='Device Type'
            />
          </div>
          <div class='col-md-6 col-lg-5'>
            <div className='row'>
              {/* <div className='col-md-3'>
                <span>Created Date</span>
              </div> */}
              <div className='from-group col-md-7 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor='created_date_form' className='me-1'>
                  Imei#1
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='created_date_form'
                />
              </div>
              <div className='from-group col-md-5 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor='to' className='me-1'>
                  Imei#2
                </label>
                <input type='date' className='form-control' id='to' />
              </div>
            </div>
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3 col-lg-4'>
            <label className='me-1' htmlFor='simStatus'>
              S/N
            </label>
            <input
              type='text'
              class='form-control'
              id='simStatus'
              placeholder='SIM Status'
            />
          </div>
        </div>
        <div class='form-row row my-1'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='vendor'>
              Vendor
            </label>
            <input type='text' class='form-control' id='vendor' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='distributor'>
              Batch Number
            </label>
            <input type='text' class='form-control' id='distributor' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='agent'>
              Distributor
            </label>
            <input id='agent' class='form-control' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='phonePlan'>
              Agent
            </label>
            <input type='text' class='form-control' id='phonePlan' />
          </div>
        </div>
        <div class='form-row row my-1'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-4'>
            <label className='me-1' for='distributor'>
              Model
            </label>
            <input type='text' class='form-control' id='distributor' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-4'>
            <label className='me-1' for='agent'>
              Device Order Number
            </label>
            <input id='agent' class='form-control' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-4'>
            <label className='me-1' for='phonePlan'>
              Color
            </label>
            <input type='text' class='form-control' id='phonePlan' />
          </div>
        </div>
        <div class='form-row row my-1'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='vendor'>
              Vendor
            </label>
            <input type='text' class='form-control' id='vendor' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='distributor'>
              Batch Number
            </label>
            <input type='text' class='form-control' id='distributor' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='agent'>
              Distributor
            </label>
            <input id='agent' class='form-control' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='phonePlan'>
              Agent
            </label>
            <input type='text' class='form-control' id='phonePlan' />
          </div>
        </div>
        <div class='form-row row my-1'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='vendor'>
              FCC Status
            </label>
            <input type='text' class='form-control' id='vendor' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='distributor'>
              FCC Name
            </label>
            <input type='text' class='form-control' id='distributor' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='agent'>
              FCC Approval Date
            </label>
            <input id='agent' class='form-control' />
          </div>
        </div>
      </div>
      <div className='mui-table my-3'>
        <MaterialTable
          title=''
          columns={columns}
          data={data}
          options={{
            selection: true,
            exportButton: true,
            exportAllData: true,
            shorting: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 50, 100, 500, 1000, 2000],
            pageSize: 2,
            paginationType: 'stepped',
            paginationPosition: 'top',
            showTextRowsSelected: false,
            actionsColumnIndex: -1,
          }}
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
                    padding: '2px',
                  }}
                >
                  Assign to Distributor
                </button>
              ),
              tooltip: 'Click to assign item to distributor',
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
                    padding: '2px',
                  }}
                >
                  Assign Batch Number
                </button>
              ),
              tooltip: 'Click to assign batch number',
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
                  View
                </button>
              ),
              tooltip: 'Click to active',
              onClick: (data) => console.log(data),
              // isFreeAction: true,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default DeviceReturns;
