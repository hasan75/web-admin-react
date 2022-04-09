import MaterialTable from 'material-table';
import React from 'react';
import { Link } from 'react-router-dom';
import simCardOperationStyles from './SimCardOperation.module.css';

const SimCardOperations = () => {
  return (
    <section className={simCardOperationStyles.simCardOperations}>
      {/* basic search container  */}
      <div className={`${simCardOperationStyles.searchContainer} my-3`}>
        <span>Search By:</span>
        {/* form input  */}
        <div class='form-row row d-flex flex-row justify-content-center align-items-center'>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3 col-lg-3'>
            <label className='me-1' htmlFor='ssid'>
              SSID
            </label>
            <input
              type='text'
              className='form-control'
              id='ssid'
              placeholder='SSID'
            />
          </div>
          <div class='col-md-6 col-lg-5'>
            <div className='row'>
              {/* <div className='col-md-3'>
                <span>Created Date</span>
              </div> */}
              <div className='from-group col-md-7 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor='created_date_form' className='me-1'>
                  Created Date from
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='created_date_form'
                />
              </div>
              <div className='from-group col-md-5 d-flex flex-row justify-content-center align-items-center'>
                <label htmlFor='to' className='me-1'>
                  to
                </label>
                <input type='date' className='form-control' id='to' />
              </div>
            </div>
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3 col-lg-4'>
            <label className='me-1' htmlFor='simStatus'>
              Sim Status
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
              Distributor
            </label>
            <input type='text' class='form-control' id='distributor' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='agent'>
              Agent
            </label>
            <input id='agent' class='form-control' />
          </div>
          <div class='form-group d-flex flex-row justify-content-center align-items-center col-md-3'>
            <label className='me-1' for='phonePlan'>
              Phone Plan
            </label>
            <input type='text' class='form-control' id='phonePlan' />
          </div>
        </div>
      </div>

      {/* advanced search container  */}
      <div className={`${simCardOperationStyles.singleInput} my-2`}>
        <input
          type='text'
          className='form-control'
          placeholder='Advance Search'
        />
      </div>
      {/* sim card plans  */}
      {/* plan 1  */}
      <div className={`${simCardOperationStyles.serviceCarrier1} my-3`}>
        <span className='mt-2 ms-1'>Service Carrier #1 321Communications</span>
        <div className='row d-flex align-items-center'>
          <div className='col-md-6 d-flex align-items-center'>
            <select
              className={`${simCardOperationStyles.theFormSelect} form-select me-2`}
              name='select Plan'
              id='select Plan'
            >
              <option value='select Plan'>Select Plan</option>
              <option value='Plan1'>Plan1</option>
              <option value='Plan2'>Plan2</option>
            </select>
            <button className='btn btn-outline-secondary me-2'>Activate</button>
            <button className='btn btn-outline-secondary me-2'>Hotline</button>
            <button className='btn btn-outline-secondary me-2'>
              UnHotline
            </button>
          </div>
          <div className='col-md-6 d-flex align-items-center'>
            <select
              className={`${simCardOperationStyles.theFormSelect} form-select me-2`}
              name='select Plan2'
              id='select Plan2'
            >
              <option value='select Plan'>Select Plan</option>
              <option value='Plan1'>Plan1</option>
              <option value='Plan2'>Plan2</option>
            </select>
            <button className='btn btn-outline-secondary me-2'>
              Change Plan
            </button>
            <button className='btn btn-outline-secondary me-2'>SWAP MDN</button>
          </div>
        </div>
      </div>
      {/* plan 2  */}
      <div className={`${simCardOperationStyles.serviceCarrier2} my-3`}>
        <span className='mt-2 ms-1'>Service Carrier #2 PWG</span>
        <div className='row d-flex align-items-center'>
          <div className='col-md-6 d-flex align-items-center'>
            <select
              className={`${simCardOperationStyles.theFormSelect} form-select me-2`}
              name='select Plan'
              id='select Plan'
            >
              <option value='select Plan'>Select Plan</option>
              <option value='Plan1'>Plan1</option>
              <option value='Plan2'>Plan2</option>
            </select>
            <button className='btn btn-outline-secondary me-2'>Activate</button>
            <button className='btn btn-outline-secondary me-2'>Hotline</button>
            <button className='btn btn-outline-secondary me-2'>
              UnHotline
            </button>
          </div>
          <div className='col-md-6 d-flex align-items-center'>
            <select
              className={`${simCardOperationStyles.theFormSelect} form-select me-2`}
              name='select Plan2'
              id='select Plan2'
            >
              <option value='select Plan'>Select Plan</option>
              <option value='Plan1'>Plan1</option>
              <option value='Plan2'>Plan2</option>
            </select>
            <button className='btn btn-outline-secondary me-2'>
              Change Plan
            </button>
            <button className='btn btn-outline-secondary me-2'>SWAP MDN</button>
          </div>
        </div>
      </div>
      <div className='mui-table my-3'>
        <MaterialTable
          title=''
          columns={[
            { title: 'ID', field: 'id', sorting: false },
            {
              title: 'SSID',
              field: 'ssid',
              type: 'numeric',
              sorting: false,
              render: (row) => (
                <Link to={`/dashboard/simCardDetails/${row.ssid}`}>
                  {row.ssid}
                </Link>
              ),
            },
            { title: 'PUK 1', field: 'puk1', sorting: false },
            { title: 'Created Date', field: 'created_date', type: 'date' },
            { title: 'Sim Status', field: 'sim_status', sorting: false },
            { title: 'Status Date', field: 'status_date', type: 'date' },
            { title: 'Vendor', field: 'vendor', sorting: false },
            { title: 'Distributor', field: 'distributor', sorting: false },
            { title: 'Agent', field: 'agent', sorting: false },
            { title: 'Phone Plan', field: 'phone_plan', sorting: false },
            {
              title: 'Customer ID',
              field: 'customer_id',
              type: 'numeric',
              sorting: false,
            },
          ]}
          data={[
            {
              id: 1,
              ssid: 3455675767687,
              puk1: 456789,
              created_date: '2022-01-02',
              sim_status: 'Blank',
              status_date: '',
              vendor: '321com',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545456,
            },
            {
              id: 2,
              ssid: 3455675767697,
              puk1: 456789,
              created_date: '2022-01-03',
              sim_status: '',
              status_date: '',
              vendor: 'PWG',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545457,
            },
            {
              id: 3,
              ssid: 3455675767657,
              puk1: 456789,
              created_date: '2022-01-04',
              sim_status: 'Blank',
              status_date: '',
              vendor: '321com',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545458,
            },
            {
              id: 4,
              ssid: 3455675767487,
              puk1: 456789,
              created_date: '2022-01-05',
              sim_status: '',
              status_date: '',
              vendor: 'PWG',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545459,
            },
            {
              id: 5,
              ssid: 3455675727687,
              puk1: 456789,
              created_date: '2022-01-06',
              sim_status: 'Blank',
              status_date: '',
              vendor: '321com',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545451,
            },
            {
              id: 6,
              ssid: 3455675767687,
              puk1: 456789,
              created_date: '2022-01-07',
              sim_status: '',
              status_date: '',
              vendor: 'PWG',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545452,
            },
            {
              id: 7,
              ssid: 3455675707687,
              puk1: 456789,
              created_date: '2022-01-08',
              sim_status: '',
              status_date: '',
              vendor: '321com',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545453,
            },
            {
              id: 8,
              ssid: 3455645767687,
              puk1: 456789,
              created_date: '2022-01-09',
              sim_status: '',
              status_date: '',
              vendor: 'PWG',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545454,
            },
            {
              id: 9,
              ssid: 3455675967687,
              puk1: 456789,
              created_date: '2022-01-10',
              sim_status: '',
              status_date: '',
              vendor: '321com',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545455,
            },
            {
              id: 10,
              ssid: 3455672767687,
              puk1: 456789,
              created_date: '2022-01-11',
              sim_status: '',
              status_date: '',
              vendor: 'PWG',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545416,
            },
            {
              id: 11,
              ssid: 3455675967687,
              puk1: 456789,
              created_date: '2022-01-12',
              sim_status: '',
              status_date: '',
              vendor: '321com',
              distributor: '',
              agent: '',
              phone_plan: '',
              customer_id: 23234545426,
            },
          ]}
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
                    padding: '2px 5px',
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
                    padding: '2px 5px',
                  }}
                >
                  Assign Batch Numbers
                </button>
              ),
              tooltip: 'Click to assign batch number',
              onClick: (data) => console.log(data),
              // isFreeAction: true,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default SimCardOperations;
