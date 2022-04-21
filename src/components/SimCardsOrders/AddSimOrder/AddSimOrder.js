import React from 'react';
import scStyle from './Styles/SimcardOrder.module.css';
const AddSimOrder = () => {
  return (
    <form action=''>
      <div className={scStyle.container}>
        <header>SIM Card Orders</header>
        {/* <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">ID</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="ID"/>
</div>  */}
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            SIM Order Number
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='SIM Order Number'
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
        <div style={{ padding: '0px 50px' }}>
          <label for='exampleFormControlInput1' class='form-label'>
            SIM Status
          </label>
          <select class='form-select' aria-label='Default select example'>
            <option selected>Select Option</option>
            <option value='1'>Active</option>
            <option value='2'>Inactive</option>
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

export default AddSimOrder;
