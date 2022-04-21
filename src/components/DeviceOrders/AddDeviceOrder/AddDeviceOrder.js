import React from 'react';
import dsStyle from './Styles/DeviceOrders.module.css';

const AddDeviceOrder = () => {
  return (
    <form action=''>
      <div className={dsStyle.container}>
        <header>Device Orders</header>
        {/* <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">ID</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="ID"/>
</div>  */}
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Device Order Number
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Device Order Number'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Order Date
          </label>
          <input
            type='date'
            class='form-control'
            id='exampleFormControlInput1'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Quantity
          </label>
          <input
            type='number'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Quantity'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Vendor
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Vendor'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Received Date
          </label>
          <input
            type='date'
            class='form-control'
            id='exampleFormControlInput1'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Device Model
          </label>
          <input
            type='number'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Device Model'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Batch Number
          </label>
          <input
            type='number'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Batch Number'
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
          <label for='formFileMultiple' class='form-label'>
            Upload Files
          </label>
          <input
            class='form-control'
            type='file'
            id='formFileMultiple'
            multiple
          />
        </div>
        <div></div>
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

export default AddDeviceOrder;
