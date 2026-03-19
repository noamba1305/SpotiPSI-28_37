import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useStyles from "./AddPlaylistDialogStyles";

interface Props {
  open: boolean;
  onClose: () => void;
  createPlaylist: (name: string) => Promise<void>;
}

export default function FormDialog(props: Props) {
  const { classes } = useStyles();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    await props.createPlaylist(name);
    props.onClose();
  };

  return (
    <div className={classes.dialogStyle} >
      <Dialog open={props.open} onClose={props.onClose} >
        <DialogTitle className={classes.dialogStyle}>יצירת פלייליטס חדש</DialogTitle>
        <DialogContent className={classes.dialogStyle}>
          <form onSubmit={handleSubmit} id="create-playlist-form" className={classes.textFieldStyle} >
            <TextField autoFocus required margin="dense" id="name" name="name" label="שם הפלייליסט" type="text" fullWidth variant="standard" className={classes.textFieldStyle} />
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogStyle}>
          <Button onClick={props.onClose} className={classes.dialogStyle} >ביטול</Button>
          <Button type="submit" form="create-playlist-form" className={classes.addPlaylistButtonStyle}>
            צור
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}