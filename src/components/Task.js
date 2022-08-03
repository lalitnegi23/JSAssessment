import {useDrag} from "react-dnd";
import Grid from "@mui/material/Grid";
import {AiFillDelete} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import {Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText, Button} from "@mui/material"
import { removeBackLogListAction, removeDoneListAction, removeOngoingListAction, removeTodoListAction } from "../actions/removeFromListAction";

import {useSelector, useDispatch} from 'react-redux';
import { useState } from "react";
export default function Task({b,id,forEditing}){

    const dispatch = useDispatch();

    const [openDelete,setOpenDelete] = useState(false);


    const [{isDragging}, drag] = useDrag(()=>({
        type:"task",
        item:{id:id,b:b},
        collect: (monitor)=>({
            isDragging: !! monitor.isDragging(),
        })

    }))

    const deleteTask=(s)=>{

        if(b?.stage==="todo"){
            dispatch(removeTodoListAction(b))
        }
        else if(b?.stage==="backlog"){
            dispatch(removeBackLogListAction(b))
        }
        else if(b?.stage==="done"){
            dispatch(removeDoneListAction(b))
        }
        else if(b?.stage==="ongoing"){
            dispatch(removeOngoingListAction(b))
        }
        setOpenDelete(false)
    }
    
    return(
        <div ref={drag} style={{border:isDragging? "5px solid pink" : "0px"}}>
            <Grid container spacing={2}>
  <Grid item xs={12}>
  <p>{b?.name}</p>
  </Grid>
  <Grid item xs={2}>
  <AiFillEdit 
  onClick={()=>{
    b.editing=true
    forEditing?.setFormValues(b)
  }} 
  style={{cursor:"pointer"}}
  />
  </Grid>
  <Grid item xs={2}>
    <AiFillDelete onClick={()=>{
    
        setOpenDelete(true);
        
    }} style={{cursor:"pointer"}}/>
  </Grid>
  
</Grid>
<Dialog open={openDelete} onClose={()=>setOpenDelete(false)}>
<DialogTitle>Delete Task</DialogTitle>
<DialogContent>
    <DialogContentText>Are you sure you want to delete the task?</DialogContentText>
</DialogContent>
<DialogActions>
    <Button onClick={()=>setOpenDelete(false)}>Cancel</Button>
    <Button autoFocus onClick={(b)=> deleteTask(b)}>Yes</Button>
</DialogActions>
</Dialog>

            
        
        </div>
    )
}

