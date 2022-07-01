import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Progressbar from './Progressbar'


//import DialogTitle from '@mui/material/DialogTitle';

const  AlertDialog =(props)=> {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={props.open_Dialouge}
        onClose={()=>props.handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      
        <DialogContent>
          <DialogContentText id="alert-dialog-description"  sx={{fontSize: "23px" ,color :"red"} }>
            Are you  sure to delete this Record
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>props.handleClose(false)}>Cancel</Button>
          
          <Button onClick={()=>props.handleClose(true)} autoFocus  sx={{color :"red"}}>
            DELETE
          </Button>
          

        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialog;