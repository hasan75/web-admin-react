import React from 'react';
import simCardOperationStyles from './SimCardOperation.module.css';

const SimCardOperations = () => {
  return (
    <div>
      <h1>Sim C O</h1>
      <div className={`${simCardOperationStyles.searchContainer}`}>
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
      <div className={`${simCardOperationStyles.singleInput}`}>
        <input
          type='text'
          className='form-control'
          placeholder='Advance Search'
        />
      </div>
    </div>
  );
};

export default SimCardOperations;
