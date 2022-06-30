import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';

import EditOffSharpIcon from '@mui/icons-material/EditOffSharp';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import AlertDialog from "../AlertDialog";
const useStyles = makeStyles({
    stuListColor: {
        backgroundColor: orange[400],
        color: "white"
    },
    tableHeadCell: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
})

const List = () => {
    const classes = useStyles();
    const [employees, setEmployees] = useState([]);

    const [isopen, setIsopen] = useState(false);
    const[del_id , setDel_id] =useState(0);
    
    
    useEffect(() => {
        async function getAllEmployee() {
            try {
                const employee = await axios.get("https://reqres.in/api/users")


                setEmployees(employee.data.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getAllEmployee();
    }, [])
    console.log(employees)



    const handleDelete = async id => {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        var newemployee = employees.filter((item) => {
            // console.log(item);
            return item.id !== id;
        })
        setEmployees(newemployee);
    }

    const DailougeHander = (p) => {
        if( p===true){
            handleDelete(del_id)
            
        }
        else{
            setIsopen(false)
            setDel_id(0)

        }
        setIsopen(false)
    }
    




return (
    <>

        <Box textAlign="center" p={2} className={classes.stuListColor}>
            {isopen && <AlertDialog open_Dialouge={isopen} handleClose={DailougeHander} />}
            <Typography variant="h4">Employee List</Typography>
        </Box>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: "#616161" }}>
                        <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
                        <TableCell align="center" className={classes.tableHeadCell}>Profile</TableCell>

                        <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                        <TableCell align="center" className={classes.tableHeadCell}>First_Name</TableCell>

                        <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                        <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        employees.map((item, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell align="center">{i + 1}</TableCell>
                                    <TableCell align="center">{<img alt="" src={item.avatar} />}</TableCell>
                                    <TableCell align="center">{item.first_name}</TableCell>

                                    <TableCell align="center">{item.last_name}</TableCell>
                                    <TableCell align="center">{item.email}</TableCell>
                                    <TableCell align="center">
                                        <Tooltip title="View">
                                            <IconButton>
                                                <Link to={`/view/${item.id}`}><VisibilityOutlinedIcon /></Link>

                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Edit">
                                            <IconButton>

                                                <Link to={`/edit/${item.id}`}><EditOffSharpIcon /></Link></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">

                                            <IconButton onClick={() => { setIsopen(true) ; setDel_id(item.id)}} ><  DeleteOutlineSharpIcon /></IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }

                </TableBody>
            </Table>
        </TableContainer>
    </>
)
}

export default List





