import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import signInAction from "../actions/signInAction";


export default function Login() {
    let navigate = useNavigate();
    const defaultValues={
        nameOrEmail:"",
        password:"",
    }

    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '20vh',
    };

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
        dispatch(signInAction(formValues));
        navigate('/dashboard')
            }
          
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2 style={styles}>Login</h2>
        <form onSubmit={handleSubmit}>
        <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
       
      >
 <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel htmlFor="name">Name/E-mail *</InputLabel>
            <Input id="name" name="nameOrEmail" value={formValues.nameOrEmail} onChange={handleInputChange} required />
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel htmlFor="password" >Password *</InputLabel>
            <Input id="password" type="password" name="password" value={formValues.password} onChange={handleInputChange} required/>
            
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