
const StdList =(props)=>{
    return(
        <tr>
            <td>{props.details.id}</td>
            <td>{props.details.name}</td>
            <td>{props.details.email}</td>
        </tr>
    )
}

const StudentList =()=>{
    const Students =[
        {
            id : 1,
            name : "Nikesh",
            email : "info.nikesh12@gmail/com",
        },
        {
            id : 2,
            name : "yesh",
            email : "yesh.nikesh12@gmail/com",
        },
        {
            id : 3,
            name : "yman",
            email : "yman.nikesh12@gmail/com",
        },
        {
            id : 4,
            name : "Anish",
            email : "yman.nikesh12@gmail/com",
        }
    ];
    return(
        <>
        <h1>Students List</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {Students.map((data)=><StdList key={data.id} details={data}/>)}
            
        </table>
        
        </>
        
    )



    
}
export default StudentList;

