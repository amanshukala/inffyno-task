import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@material-ui/core"
import { orange, purple } from '@material-ui/core/colors';
import { useNavigate, useParams  } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: purple[400],
  color: "red"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
});
const View = () => {
 const classes = useStyles();
 const { id } = useParams();
 const [employee, setEmployee] = useState([]);
 const   navigate = useNavigate();
 useEffect(() => {
  async function getEmployee() {
   try {
    const employee = await axios.get(`https://reqres.in/api/users/${id}`)
    
    setEmployee(employee.data.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getEmployee();
 }, [id])

 function handleClick() {
    navigate("/")

 }
 return (
  <>
   <Box textAlign="center" p={2} className={classes.stuListColor}>
    <Typography variant="h4">Employee Detail</Typography>
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

      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow>
       
       <TableCell align="center">{employee.id }</TableCell>
        <TableCell align="center">{<img alt="kkuyh" src={employee.avatar}/>}</TableCell>
        <TableCell align="center">{employee.first_name}</TableCell>
          
        <TableCell align="center">{employee.last_name}</TableCell>
        <TableCell align="center">{employee.email}</TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </TableContainer>
   <Box m={3} textAlign="center">
    <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
   </Box>
  </>
 )
}

export default View