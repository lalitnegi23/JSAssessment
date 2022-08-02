import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import signUpAction from "../actions/signUpAction";
export default function Signup() {

    const defaultValues={
        name:"",
        username:"",
        email:"",
        contact:"",
        password:"",
        file:null
    }

    const [formValues,setFormValues]= useState(defaultValues);
    const dispatch = useDispatch()
    const testingRedux = useSelector(state => state)
    const handleInputChange=(e)=>{
const{name,value} = e.target;
setFormValues({...formValues,
[name]:value});
    }


    const handleSubmit=(event)=>{
event.preventDefault();
dispatch(signUpAction(formValues))
//setFormValues({});
    }
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
      };
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2 style={styles}>Signup</h2>
      <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel htmlFor="name">Name *</InputLabel>
            <Input id="name" name="name" value={formValues.name} onChange={handleInputChange} required />
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel htmlFor="username" >Username *</InputLabel>
            <Input id="my-input" name="username" value={formValues.username} onChange={handleInputChange} required/>
            
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel htmlFor="email">Email address *</InputLabel>
            <Input id="email" type="email" aria-describedby="my-helper-text" name="email" value={formValues.email} onChange={handleInputChange} required/>
        
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel htmlFor="contactnumber">Contact Number</InputLabel>
            <Input id="contactnumber" type="number" name="contact" value={formValues.contact} onChange={handleInputChange}/>
            
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel htmlFor="password" >Password *</InputLabel>
            <Input id="password" type="password" name="password" value={formValues.password} onChange={handleInputChange} required/>
            
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            {/* <InputLabel htmlFor="profileimage">Profile Image</InputLabel> */}
            <Input id="profileimage" type="file" name="file" value={formValues.file} onChange={(e)=>setFormValues({...formValues,
[formValues.file]:e.target.files[0]})}/>
            
          </FormControl>
        </Grid>
        
      </Grid>
      <Grid item marginTop={4} style={styles}>
        <Button variant="contained" type="submit">Submit</Button>
      </Grid>
      
      </form>
    </main>
  );
}
