import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Task from "./Task";

import { nanoid } from 'nanoid'
import {useSelector, useDispatch} from 'react-redux';
import {useDrop} from "react-dnd";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {saveBackLogListAction} from "../actions/saveListAction";

export default function TaskPlayGround(){

    const tasksList = useSelector(state => state?.createTaskReducer?.tasks)
    const [backLogList,setBackLogList] = useState([]);
    const [toDoList,setToDoList] = useState([]);
    const [doneList,setDoneList] = useState([]);
    const [onGoingList,setOnGoingList] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        
        const backlogList = tasksList?.filter(task=>task?.stage==="backlog")
        
    const todoList = tasksList?.filter(task=>task?.stage==="todo")
    
    const donList = tasksList?.filter(task=>task?.stage==="done")
    
    const ongoingList = tasksList?.filter(task=>task?.stage==="ongoing")
    dispatch(saveBackLogListAction(backlogList))
setBackLogList(backlogList);
setToDoList(todoList);
setDoneList(donList);
setOnGoingList(ongoingList);
    },[tasksList])
    
    const [{isOverBackLog},dropBackLog] = useDrop(()=>({
        accept:"task",
        drop:(item)=>addTaskToBackLog(item?.id,item?.b),
        collect:(monitor)=>({
            isOverONG: !! monitor.isOver(),
        })

    }))
    const addTaskToBackLog=(id,b)=>{
       setBackLogList([...backLogList,b]) 
    }



    const [{isOver},drop] = useDrop(()=>({
        accept:"task",
        drop:(item)=>addTaskToList(item?.id,item?.b),
        collect:(monitor)=>({
            isOver: !! monitor.isOver(),
        })

    }))

    const addTaskToList=(id,b)=>{
        console.log(b);
       // console.log(backLogList);
        //const task = backLogList.filter((t,index)=>id === index)
        
        setToDoList([...toDoList,b])
        if (b?.stage==="backlog"){
            setBackLogList((backLogList)=>backLogList.filter((item,index)=>index!==id))
        }
    
        // console.log(toDoList)
    }


    const [{isOverONG},dropONG] = useDrop(()=>({
        accept:"task",
        drop:(item)=>addTaskToONG(item?.id,item?.b),
        collect:(monitor)=>({
            isOverONG: !! monitor.isOver(),
        })

    }))
    const addTaskToONG=(id,b)=>{
       setOnGoingList([...onGoingList,b]) 
    }
    

    const [{isOverDone},dropDone] = useDrop(()=>({
        accept:"task",
        drop:(item)=>addTaskToDone(item?.id,item?.b),
        collect:(monitor)=>({
            isOverONG: !! monitor.isOver(),
        })

    }))
    const addTaskToDone=(id,b)=>{
       setDoneList([...doneList,b]) 
    }

    return(
        <>
        
        <Grid container marginTop={5} >
            <div ref={dropBackLog}>
      <Grid item xs marginRight={3}>
        <h2>Backlog</h2>
        {backLogList.map((b,index)=>{
            return(
                <>
                <Task key={index} b={b} id={index}/>
                </>
            )
            
        })}
        
        
      </Grid>
      </div>
      <Divider orientation="vertical" flexItem ></Divider>
      <div ref={drop}>
      <Grid item xs marginLeft={3}>
        <h2>Todo</h2>
        {toDoList?.map((b,index)=>{
            return(
                <>
                <Task key={index} b={b} id={index}/>
                </>
            )
            
        })}
        
        
      </Grid>
      </div>
      <Divider orientation="vertical" flexItem></Divider>
      <div ref={dropONG}>
      <Grid item xs marginLeft={3}>
      <h2>  Ongoing</h2>
      {onGoingList?.map((b,index)=>{
            return(
                <>
                <Task key={index} b={b} id={index}/>
                </>
            )
            
        })}
      </Grid>
      </div>
      <Divider orientation="vertical" flexItem></Divider>
      <div ref={dropDone}>
      <Grid item xs marginLeft={3}>
        <h2>Done</h2>
        {doneList?.map((b,index)=>{
            return(
                <>
                <Task key={index} b={b} id={index}/>
                </>
            )
            
        })}
      </Grid>
      </div>
    </Grid>
        </>
    )
} 