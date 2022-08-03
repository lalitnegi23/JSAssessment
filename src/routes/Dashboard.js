import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Dashboard() {

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
      };

    const tasksList = useSelector(state => state?.createTaskReducer?.tasks)
    const bLogList = useSelector(state => state?.saveListReducer?.backlogList)
    const toDoLists = useSelector(state => state?.saveListReducer?.todoList)
    const doneLists = useSelector(state=> state?.saveListReducer?.doneList)
    const ongoingLists = useSelector(state=>state?.saveListReducer.ongoingList)
    return(
        <>
        <h2 style={styles}>Dashboard</h2>

        <h1>There are currently {bLogList?.length + toDoLists?.length + ongoingLists?.length + doneLists?.length} tasks in the board.</h1>
        <h2>There are currently {bLogList?.length} tasks in Backlog Stage.</h2>
        <h2>There are currently {toDoLists?.length} tasks in Todo Stage.</h2>
        <h2>There are currently {ongoingLists?.length} tasks in Ongoing Stage.</h2>
        <h2>There are currently {doneLists?.length} tasks in Done Stage.</h2>
        
        <NavLink to="/taskmanagement">Go To Task Management</NavLink>
        <div><NavLink to="/">Go To Home</NavLink></div>
        
        </>
    )
}