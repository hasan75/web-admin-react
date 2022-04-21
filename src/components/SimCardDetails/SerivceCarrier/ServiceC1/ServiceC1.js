import React,{useState} from 'react'
import scStyle from './Styles/ServiceC1.module.css'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
function ServiceC1() { 
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
   <div className={scStyle.container}>
       <p className={scStyle.title} >Serivce Carrier #01 | 321 Communications</p>
       <div className={scStyle.zipcode}>    
      <TextField sx={{width:'150px'}} id="outlined-basic" label="Zip Code"  size="small"/>  
       <Button style={{boxShadow:'none',height:'40px',width:'150px',borderRadius:'0px',background:'#aaa',marginLeft:'20px',fontSize:'11px'}}  variant="contained">Get Coverage</Button>
       </div>
       <div className={scStyle.sp1}>     
      <FormControl variant="filled" className={scStyle.formControl}>
      <InputLabel style={{fontSize:'15px'}} id="demo-simple-select-filled-label">Select Plan</InputLabel>
        <Select style={{height:'40px'}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField sx={{marginLeft:'20px', width:'150px'}} className={scStyle.textfiled} id="outlined-basic" label="Zip Code"  size="small"/>  
      <Button style={{boxShadow:'none',height:'40px',width:'140px',borderRadius:'0px',background:'#aaa',marginLeft:'20px',fontSize:'11px'}}  variant="contained">Active SIM Card</Button>
      <Button style={{boxShadow:'none',height:'40px',width:'140px',borderRadius:'0px',background:'#aaa',marginLeft:'20px',fontSize:'11px'}}  variant="contained">Hotline SIM Card</Button><Button style={{boxShadow:'none',height:'40px',width:'140px',borderRadius:'0px',background:'#aaa',marginLeft:'20px',fontSize:'11px'}}  variant="contained">Unhotline SIM Card</Button>
       </div>
       <div className={scStyle.sp2}>     
        <div className={scStyle.subsp1}>
        <FormControl variant="filled" className={scStyle.formControl}>
      <InputLabel style={{fontSize:'15px'}} id="demo-simple-select-filled-label">Select Plan</InputLabel>
        <Select style={{height:'40px'}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        <Button style={{boxShadow:'none',height:'40px',width:'140px',borderRadius:'0px',background:'#aaa',marginLeft:'20px',fontSize:'11px'}}  variant="contained">Change Plan</Button>
        </div>
       {/* <Typography style={{background:'#eee',width:'140px',border:'1px solid #000',fontSize:'15px',height:'40px',textAlign:'center',marginLeft:'20px'}} variant="h6" >
       Enter New ESN
       </Typography> 
       <Typography style={{background:'#aaa',width:'140px',fontSize:'15px',height:'40px',textAlign:'center',marginLeft:'20px'}} variant="h6" >
       Change Plan
       </Typography> 
       <Typography style={{background:'#aaa',width:'140px',fontSize:'15px',height:'40px',textAlign:'center',marginLeft:'20px'}} variant="h6" >
       Swap MDN
       </Typography> */}
       <div>
       <TextField sx={{width:'150px',marginLeft:'20px'}} id="outlined-basic" label="Enter New ESN"  size="small"/> 
       <Button style={{boxShadow:'none',height:'40px',width:'140px',borderRadius:'0px',background:'#aaa',marginLeft:'20px',fontSize:'11px'}}  variant="contained">Swap ESN</Button>
       </div>
       <div>
       <TextField sx={{width:'150px',marginLeft:'20px'}} id="outlined-basic" label="Zip Code"  size="small"/> 
       <Button style={{boxShadow:'none',height:'40px',width:'140px',borderRadius:'0px',background:'#aaa',marginLeft:'20px',fontSize:'11px'}}  variant="contained">Swap MDN</Button>
       </div>
       </div>
   </div>
  )
}
export default ServiceC1