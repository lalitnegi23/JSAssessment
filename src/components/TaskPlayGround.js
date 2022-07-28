import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function TaskPlayGround(){
    return(
        <>
        
        <Grid container marginTop={5}>
      <Grid item xs marginRight={3}>
        <h2>Backlog</h2>
        
      </Grid>
      <Divider orientation="vertical" flexItem ></Divider>
      <Grid item xs marginLeft={3}>
        <h2>Todo</h2>
      </Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid item xs marginLeft={3}>
      <h2>  Ongoing</h2>
      </Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid item xs marginLeft={3}>
        <h2>Done</h2>
      </Grid>
    </Grid>
        </>
    )
} 