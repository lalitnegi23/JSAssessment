import './App.css';
import {Button} from "@mui/material";
import {Link} from "react-router-dom"

function App() {

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
  };
  return (
    
    <div >
    <h1 style={styles}>Kanban Board</h1>
    <div style={styles}>
    <Button variant="outlined"><Link to="/signup">Signup</Link></Button>
    <Button variant="outlined"><Link to="/login">Login</Link></Button>
    </div>
    </div>
   
  );
}

export default App;
