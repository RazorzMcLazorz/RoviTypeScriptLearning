import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { WithStyles, createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#ff4400',
            light: '#ffffff',
            dark: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
            light: '#ffffff',
            dark: '#ffffff',
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
            }
        }
    }
});

const styles = () => createStyles({
    textEdit: {
        color: '#000000',
    },
    reajust: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

interface IProps extends WithStyles<typeof styles> {}

class FormDialog extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
        <MuiThemeProvider theme={theme}>
      <div>
        <Button onClick={this.handleClickOpen} className={this.props.classes.textEdit}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(FormDialog);