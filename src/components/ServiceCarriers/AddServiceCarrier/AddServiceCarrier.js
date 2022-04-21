import React from 'react';
import scStyle from './Styles/ServiceCform.module.css';

const AddServiceCarrier = () => {
  return (
    <form action=''>
      <div className={scStyle.container}>
        <header>Service Carrier</header>
        {/* <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">ID</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="ID"/>
</div>  */}
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Name
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Name'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Label
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Label'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Contact Name
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Contact Name'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Contact Phone
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Contact Phone'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Contact Email
          </label>
          <input
            type='email'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Contact Email'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Api User Name
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Api User Name'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Api Token Password
          </label>
          <input
            type='password'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Api Token Password'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Api Pin
          </label>
          <input
            type='password'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Api Pin'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            CLECID
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='CLECID'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Support Name
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Support Name'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Support Phone
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Support Phone'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Support Email
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Support Email'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Phone Plans
          </label>
          <input
            type='text'
            class='form-control'
            id='exampleFormControlInput1'
            placeholder='Phone Plans'
          />
        </div>
        <div style={{ padding: '0px 50px' }} class='mb-3'>
          <label for='exampleFormControlInput1' class='form-label'>
            Create-Date
          </label>
          <input
            type='date'
            class='form-control'
            id='exampleFormControlInput1'
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

export default AddServiceCarrier;
