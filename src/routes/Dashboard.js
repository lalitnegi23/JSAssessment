export default function Dashboard() {

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
      };
    return(
        <>
        <h2 style={styles}>Dashboard</h2>

        {/* implementation pending. 
        count length of different list ex-backLogList,toDoList etc.  
        and then display */}
        <pre>There are currently no tasks.</pre>
        </>
    )
}