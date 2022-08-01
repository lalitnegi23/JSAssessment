import {useDrag} from "react-dnd";
import Grid from "@mui/material/Grid";
import {AiFillDelete} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import {AiFillBackward} from "react-icons/ai";
import {AiFillForward} from "react-icons/ai";


export default function Task({b,id}){

    const [{isDragging}, drag] = useDrag(()=>({
        type:"task",
        item:{id:id,b:b},
        collect: (monitor)=>({
            isDragging: !! monitor.isDragging(),
        })

    }))
    
    return(
        <div ref={drag} style={{border:isDragging? "5px solid pink" : "0px"}}>
            <Grid container spacing={2}>
  <Grid item xs={16}>
  <p>{b?.name}</p>
  </Grid>
  <Grid item xs={2}>
  <AiFillEdit/>
  </Grid>
  <Grid item xs={2}>
    <AiFillDelete/>
  </Grid>
  <Grid item xs={2}>
    <AiFillForward/>
  </Grid>
  <Grid item xs={2}>
    <AiFillBackward/>
  </Grid>
</Grid>
            
        
        </div>
    )
}

