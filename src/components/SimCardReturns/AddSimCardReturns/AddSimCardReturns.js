import React from 'react';
import scStyle from './Styles/SimcardReturn.module.css';

const AddSimCardReturns = () => {
  return (
    <form action=''>
      <div className={scStyle.container}>
        <header>SIM Card Returns</header>
        {/* <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">ID</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="ID"/>
</div>  */}
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            SSID
          </label>
          <input
            type='number'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='SSID'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            IMEI-1
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='IMEI-1'
          />
        </div>{' '}
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            IMEI-2
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='IMEI-2'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Return Reason
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Return Reason'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Return Date
          </label>
          <input
            type='date'
            class='form-control'
            id='exampleFormControlInput1'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Device Serical Number
          </label>
          <input
            type='number'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Device Serical Number'
          />
        </div>
        <div style={{ padding: '0px 50px', marginBottom: '10px' }}>
          <label for='exampleFormControlInput1' class='form-label'>
            Item
          </label>
          <select class='form-select' aria-label='Default select example'>
            <option selected>Select Option</option>
            <option value='1'>Device</option>
            <option value='2'>SIM Card</option>
            <option value='3'>Device+SIM</option>
            <option value='4'>Other</option>
          </select>
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Agent
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Agent'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Distributor
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Distributor'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Tracking Number
          </label>
          <input
            type='number'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Tracking Number'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Reception Status
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Reception Status'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Reception Date
          </label>
          <input
            type='date'
            class='form-control'
            id='exampleFormControlInput1'
          />
        </div>
        <div style={{ padding: '0px 50px' }}>
          <label for='exampleFormControlInput1' class='form-label'>
            Shipping Method
          </label>
          <select class='form-select' aria-label='Default select example'>
            <option selected>Select Option</option>
            <option value='1'>USPS</option>
            <option value='2'>UPS</option>
            <option value='3'>FedEx</option>
            <option value='4'>DHL</option>
            <option value='5'>In Person</option>
          </select>
        </div>
        <div
          style={{ padding: '0px 50px', marginTop: '20px' }}
          class='form-floating'
        >
          <textarea
            class='form-control'
            placeholder='Leave a comment here'
            id='floatingTextarea'
          ></textarea>
          <label
            style={{ padding: '10px 0px 0px 60px' }}
            for='floatingTextarea'
          >
            Notes
          </label>
        </div>
      </div>
      <div style={{ marginTop: '30px' }} class='col-12 text-center'>
        <button class='btn btn-primary' type='submit'>
          Submit form
        </button>
      </div>
    </form>
  );
};

export default AddSimCardReturns;
