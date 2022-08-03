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
import {saveBackLogListAction, saveDoneListAction, saveOngoingListAction, saveTodoListAction} from "../actions/saveListAction";
import  { removeBackLogListAction, removeDoneListAction, removeOngoingListAction, removeTodoListAction } from "../actions/removeFromListAction";

export default function TaskPlayGround(){

    const tasksList = useSelector(state => state?.createTaskReducer?.tasks)
    const bLogList = useSelector(state => state?.saveListReducer?.backlogList)
    const toDoLists = useSelector(state => state?.saveListReducer?.todoList)
    const doneLists = useSelector(state=> state?.saveListReducer?.doneList)
    const ongoingLists = useSelector(state=>state?.saveListReducer.ongoingList)
    // const [backLogList,setBackLogList] = useState([]);
    // const [toDoList,setToDoList] = useState([]);
    // const [doneList,setDoneList] = useState([]);
    // const [onGoingList,setOnGoingList] = useState([]);
    const dispatch = useDispatch();
//     useEffect(()=>{
        
//         const backlogList = tasksList?.filter(task=>task?.stage==="backlog")
        
//     const todoList = tasksList?.filter(task=>task?.stage==="todo")
    
//     const donList = tasksList?.filter(task=>task?.stage==="done")
    
//     const ongoingList = tasksList?.filter(task=>task?.stage==="ongoing")
    
// setBackLogList(backlogList);
// setToDoList(todoList);
// setDoneList(donList);
// setOnGoingList(ongoingList);
//     },[tasksList])
    
    const [{isOverBackLog},dropBackLog] = useDrop(()=>({
        accept:"task",
        drop:(item)=>addTaskToBackLog(item?.id,item?.b),
        collect:(monitor)=>({
            isOverONG: !! monitor.isOver(),
        })

    }))
    const addTaskToBackLog=(id,b)=>{
        console.log(b);
        const newObj = JSON.parse(JSON.stringify(b));
        newObj.stage="backlog";
        dispatch(saveBackLogListAction(newObj))
        //dispatch(removeFromListAction(b))
        if(b?.stage==="todo"){
            dispatch(removeTodoListAction(b))
        }
        else if(b?.stage==="ongoing"){
            dispatch(removeOngoingListAction(b))
        }
        else if(b?.stage==="done"){
            dispatch(removeDoneListAction(b))
        }


       //setBackLogList([...backLogList,b]) 
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
        const newObj = JSON.parse(JSON.stringify(b));
        newObj.stage="todo";
        dispatch(saveTodoListAction(newObj))
        if(b?.stage==="backlog"){
            dispatch(removeBackLogListAction(b))
        }
        else if(b?.stage==="ongoing"){
            dispatch(removeOngoingListAction(b))
        }
        else if(b?.stage==="done"){
            dispatch(removeDoneListAction(b))
        }
        
        
        
        
        //setToDoList([...toDoList,b])

        // if (b?.stage==="backlog"){
        //     setBackLogList((backLogList)=>backLogList.filter((item,index)=>index!==id))
        // }
    
       
    }


    const [{isOverONG},dropONG] = useDrop(()=>({
        accept:"task",
        drop:(item)=>addTaskToONG(item?.id,item?.b),
        collect:(monitor)=>({
            isOverONG: !! monitor.isOver(),
        })

    }))
    const addTaskToONG=(id,b)=>{
        console.log(b);
        const newObj = JSON.parse(JSON.stringify(b));
        newObj.stage="ongoing";
        dispatch(saveOngoingListAction(newObj))
        //dispatch(removeFromListAction(b))
        if(b?.stage==="todo"){
            dispatch(removeTodoListAction(b))
        }
        else if(b?.stage==="backlog"){
            dispatch(removeBackLogListAction(b))
        }
        else if(b?.stage==="done"){
            dispatch(removeDoneListAction(b))
        }


       //setOnGoingList([...onGoingList,b]) 
    }
    

    const [{isOverDone},dropDone] = useDrop(()=>({
        accept:"task",
        drop:(item)=>addTaskToDone(item?.id,item?.b),
        collect:(monitor)=>({
            isOverONG: !! monitor.isOver(),
        })

    }))
    const addTaskToDone=(id,b)=>{
        console.log(b);
        const newObj = JSON.parse(JSON.stringify(b));
        newObj.stage="done";
        dispatch(saveDoneListAction(newObj))
        //dispatch(removeFromListAction(b))

        if(b?.stage==="todo"){
            dispatch(removeTodoListAction(b))
        }
        else if(b?.stage==="backlog"){
            dispatch(removeBackLogListAction(b))
        }
        else if(b?.stage==="ongoing"){
            dispatch(removeOngoingListAction(b))
        }


       //setDoneList([...doneList,b]) 
    }
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
      };

    return(
        <>
        
        <Grid container marginTop={5} style={styles} >
            <div ref={dropBackLog}>
      <Grid item xs marginRight={3}>
        <h2>Backlog</h2>
        {bLogList?.map((b,index)=>{
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
        {toDoLists?.map((b,index)=>{
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
      {ongoingLists?.map((b,index)=>{
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
        {doneLists?.map((b,index)=>{
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