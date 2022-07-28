import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TaskPlayGround from "../components/TaskPlayGround";

export default function TaskManagement() {
    const defaultValues={
        name:"",
        stage:"",
        priority:"",
        deadline:""
    }

    const [formValues,setFormValues]= useState(defaultValues);

    const handleInputChange=(e)=>{
        const{name,value} = e.target;
        setFormValues({...formValues,
        [name]:value});
            }
        
        
            const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formValues);            }

    return(
        <>
        <header>Task Management</header>
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
            <InputLabel htmlFor="password" >Stage *</InputLabel>
            <Input id="stage"  name="stage" value={formValues.stage} onChange={handleInputChange} required/>
            
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          {/* <FormControl>
            <InputLabel htmlFor="password" >Priority *</InputLabel>
            <Input id="priority"  name="priority" value={formValues.priority} onChange={handleInputChange} required/>
            
          </FormControl> */}
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Priority *</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formValues.priority}
    label="Priority"
    onChange={handleInputChange}
  >
    <MenuItem value="low">Low</MenuItem>
    <MenuItem value="medium">Medium</MenuItem>
    <MenuItem value="high">High</MenuItem>
  </Select>
</FormControl>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControl>
            <InputLabel htmlFor="password" >Deadline *</InputLabel>
            <Input id="deadline"  name="deadline" type="date" value={formValues.deadline} onChange={handleInputChange} required/>
            
          </FormControl>
        </Grid>
      </Grid>
      <Grid item marginTop={4}>
        <Button variant="contained" type="submit">Create Task</Button>
      </Grid>
        </form>
   

   <TaskPlayGround/>
        </>
    )
}