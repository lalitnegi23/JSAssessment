import './App.css';
import {Button} from "@mui/material";
import {Link} from "react-router-dom"


function App() {
  return (
    
    <>
    <h1>Kanban Board</h1>
    <Button variant="outlined"><Link to="/signup">Signup</Link></Button>
    <Button variant="outlined"><Link to="/login">Login</Link></Button>

    </>
   
  );
}

export default App;
