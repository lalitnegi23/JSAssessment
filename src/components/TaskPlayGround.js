import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Backlog from "./Backlog";
import Done from "./Done";
import Ongoing from "./Ongoing";
import Todo from "./Todo";
import {useSelector, useDispatch} from 'react-redux';
import Button from "@mui/material/Button";
import { useState } from "react";

export default function TaskPlayGround(){

    const tasksList = useSelector(state => state?.createTaskReducer?.tasks)
    const backlogList = tasksList?.filter(task=>task?.stage==="backlog")
    const todoList = tasksList?.filter(task=>task?.stage==="todo")
    const doneList = tasksList?.filter(task=>task?.stage==="done")
    const ongoingList = tasksList?.filter(task=>task?.stage==="ongoing")
    return(
        <>
        
        <Grid container marginTop={5}>
      <Grid item xs marginRight={3}>
        <h2>Backlog</h2>
        {backlogList.map((b)=>{
            return(
                <>
                <Backlog b={b}/>
                </>
            )
            
        })}
        
        
      </Grid>
      <Divider orientation="vertical" flexItem ></Divider>
      <Grid item xs marginLeft={3}>
        <h2>Todo</h2>
        <Todo/>
      </Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid item xs marginLeft={3}>
      <h2>  Ongoing</h2>
      <Ongoing/>
      </Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid item xs marginLeft={3}>
        <h2>Done</h2>
        <Done/>
      </Grid>
    </Grid>
        </>
    )
} 