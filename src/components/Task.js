import {useDrag} from "react-dnd";
import Grid from "@mui/material/Grid";
import {AiFillDelete} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import {Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText} from "@mui/material"
import { removeBackLogListAction, removeDoneListAction, removeOngoingListAction, removeTodoListAction } from "../actions/removeFromListAction";

import {useSelector, useDispatch} from 'react-redux';
export default function Task({b,id}){

    const dispatch = useDispatch();

    const [{isDragging}, drag] = useDrag(()=>({
        type:"task",
        item:{id:id,b:b},
        collect: (monitor)=>({
            isDragging: !! monitor.isDragging(),
        })

    }))

    const deleteTask=(s)=>{

        console.log("deletetask",s)
        //console.log(e);
        
    }
    
    return(
        <div ref={drag} style={{border:isDragging? "5px solid pink" : "0px"}}>
            <Grid container spacing={2}>
  <Grid item xs={12}>
  <p>{b?.name}</p>
  </Grid>
  <Grid item xs={2}>
  <AiFillEdit />
  </Grid>
  <Grid item xs={2}>
    <AiFillDelete onClick={()=>{
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
    }} style={{cursor:"pointer"}}/>
  </Grid>
  
</Grid>


            
        
        </div>
    )
}

