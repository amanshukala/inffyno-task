import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { deepPurple, green, red } from '@material-ui/core/colors';
import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles({
  headingColor: {
    backgroundColor: red[400],
    color: "green"
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white"
  },

});

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id : "",
    avatar: "",
    first_name: "",
    last_name: "",
    email: "",

  });
  useEffect(() => {
    async function getemployee() {
      try {
        const employees = await axios.get(`https://reqres.in/api/users/${id}`)

        setEmployee(employees.data.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getemployee();
  }, [id]);

  function onTextFieldChange(e,key) {
  
    setEmployee({
      ...employee, [key]: e.target.value
    })
  }

  async function onFormSubmit(e) {
    e.preventDefault()
    try {
       const updateData = await axios.put(`https://reqres.in/api/users/${id}`,employee)
      if(updateData.status === 200){
        console.log( "succeds")

      }
      else{
        console.log("unsecfull")
      }
       navigate("/")
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  function handleClick() {
    navigate("/")
  }
  return (
    <>


      <Grid container justifyContent ="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit Employee</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>



              <Box component="div" display="flex" sx={{width:"100%" ,alignItems:"center"}}>
                 <Grid item xs={12} sm={6}>
                  <TextField autoComplete="id" name="id" variant="outlined" value={employee.id} required fullWidth id="id" label="ID" autoFocus aria-readonly />
                </Grid> 
                <Grid item xs={12} sm={6}   align="center" >
                  <Box
                    component="img"
                    sx={{
                      height: "149px",
                      width: "189px",
                      borderRadius: "88px",
                      marginBottom: "19px",
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={employee.avatar}
                  />
                  <TextField autoComplete="emp_profile" name="emp_profile" variant="outlined" value={employee.avatar} required fullWidth id="emp_profile" label="Profile" onChange={e => onTextFieldChange(e,"avatar")} />
                </Grid>
              </Box>

              <Grid item xs={12}>
                <TextField autoComplete="emp_name" name="emp_name" variant="outlined" value={employee.first_name} required fullWidth id="emp_name" label="Emp-Name " onChange={e => onTextFieldChange(e,"first_name")} />
                                                                                                                                                                            {/* OR */}
                                                                                                                                                                {/* (e)=> setEmployee({...employee , emp_name : e.target.value}) */}
                                                                                                                                                                {/* emp_name ye name attribute hai */}

              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="emp_last" name="emp_last" variant="outlined" value={employee.last_name} required fullWidth id="emp_last" label="Emp-Last " onChange={e => onTextFieldChange(e ,"last_name")} />
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete="emp_email" name="emp_email" variant="outlined" value={employee.email} required fullWidth id="emp_email" label="Emp-Email " onChange={e=> onTextFieldChange(e,"email")} />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button type="button" variant="contained" color="primary" fullWidth onClick={onFormSubmit}> Update </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
          </Box>
        </Grid>
      </Grid >
    </>
  )
}

export default Edit




