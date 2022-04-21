 import React from 'react'
 import fsStyle from './Styles/Form01.module.css'
 function From01() {
   return (
   <form action="">
       <div className={fsStyle.container}>
       <header>Add New SIM Card</header>
  <div style={{padding:'0px 50px'}} class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">SSID</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter SSID Number"/>
</div> 
<div style={{padding:'0px 50px'}} class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">PUK1</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="PUK1"/>
</div> 
  <div style={{padding:'0px 50px'}} class="mb-3">
  <label  for="exampleFormControlInput1" class="form-label">SIM Card Compatibility</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="SIM Card Compatibility"/>
</div> 
  <div style={{padding:'0px 50px'}} class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">User Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name"/>
</div> 
  <div style={{padding:'0px 50px'}} class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Customer ID</label>
  <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Customer ID"/>
</div> 
  <div style={{padding:'0px 50px'}} class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Customer First Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Customer First Name"/>
</div> 
  <div style={{padding:'0px 50px'}} class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Customer Last Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Customer Last Name"/>
</div> 
  <div style={{padding:'0px 50px'}} class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Vendor (Company Name)</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Vendor (Company Name)"/>
</div> 
  <div style={{padding:'0px 50px'}} class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Create-Date</label>
  <input type="date" class="form-control" id="exampleFormControlInput1" />
</div> 
<div>
</div>
  <div className={fsStyle.flex01}>
  <div style={{padding:'0px 50px'}}>
  <label for="exampleFormControlInput1" class="form-label">SIM Status</label>
  <select class="form-select" aria-label="Default select example">
  <option selected>Select Option</option>
  <option value="1">Blank</option>
  <option value="2">Active</option>
  <option value="3">Inactive</option>
</select>
  </div>
  <div style={{marginTop:'20px',padding:'0px 50px'}}>
  <label for="exampleFormControlInput1" class="form-label">Physical Status</label>
  <select class="form-select" aria-label="Default select example">
  <option selected>Select Option</option>
  <option value="1">Good</option>
  <option value="2">Bad</option>
</select>
  </div>
  </div>
  <div style={{marginTop:'30px'}} class="col-12 text-center">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
     </div>
   </form>
   )
 } 
 export default From01