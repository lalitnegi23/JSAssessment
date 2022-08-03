import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box, TextField, MenuItem } from '@mui/material'
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { DatePicker } from '@mui/x-date-pickers';
import TaskPlayGround from "../components/TaskPlayGround";
import createTaskAction from "../actions/createTaskAction";
import { saveBackLogListAction } from "../actions/saveListAction";
import { NavLink } from "react-router-dom";

export default function TaskManagement() {
    const defaultValues={
        name:"",
        stage:"",
        priority:"",
        deadline:""
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
       dispatch(createTaskAction(formValues))   
       dispatch(saveBackLogListAction(formValues)) 
       setFormValues(defaultValues)      
      }
         useEffect(()=>{
              console.log(testingRedux);
          },[testingRedux])

          const handleChange = (event) => {
            const {name,value} = event.target;

            setFormValues({...formValues,[name]:value})
          }
          const styles = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '20vh',
          };

    return(
        <>
        <h2 style={styles}>Task Management</h2>
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
          <Box width='250px'>
      <TextField
        label='Select Stage'
        select
        size='small'
        name="stage"
        required
        color='secondary'
        helperText='Please select the Stage'
        value={formValues.stage}
        onChange={handleChange}>
        <MenuItem value='backlog'>Backlog</MenuItem>
       
      </TextField>
    </Box>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl >
          <Box width='250px'>
      <TextField
        label='Select Priority'
        select
        size='small'
        name="priority"
        required
        color='secondary'
        helperText='Please select the Priority'
        value={formValues.priority}
        onChange={handleChange}>
        <MenuItem value='low'>Low</MenuItem>
        <MenuItem value='medium'>Medium</MenuItem>
        <MenuItem value='high'>High</MenuItem>
      </TextField>
    </Box>
</FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
          <DatePicker
        label='Deadline '
        required
        value={formValues.deadline}
        onChange={newValue => {
          setFormValues({...formValues,deadline:newValue})
        }}
        renderInput={params => <TextField {...params} />}
      />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item marginTop={4} style={styles}>
        <Button variant="contained" type="submit">Create Task</Button>
      </Grid>
        </form>
   
        <NavLink to="/dashboard">Go To Dashboard</NavLink>
   <TaskPlayGround setFormValues={setFormValues}/>
        </>
    )
}