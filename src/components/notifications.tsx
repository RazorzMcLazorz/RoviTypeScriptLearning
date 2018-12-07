import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { WithStyles, createStyles } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#FF4500',
            light: '#ffffff',
            dark: '#ffffff',
        },
        secondary: {
            main: '#FF4500',
            light: '#ffffff',
            dark: '#ffffff',
        }
    },
    overrides: {
        MuiButton: {
            root: {
                
            }
        }
    }
});

const styles = () => createStyles({
    close: {
        padding: theme.spacing.unit / 2,
        color: 'white',
        backgroundColor: '#FF4500',
    },
    scondary: {
        color: '#FF4500',
    }
});

interface IProps extends WithStyles<typeof styles> {}

class ConsecutiveSnackbars extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }
  queue = [];

  state = {
    open: false,
    messageInfo: {
        key: '',
        message: '',
    },
  };

  handleClick = message => () => {
    this.queue.push({
      message,
      key: new Date().getTime(),
    });

    if (this.state.open) {
      // immediately begin dismissing current message
      // to start showing new one
      this.setState({ open: false });
    } else {
      this.processQueue();
    }
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        open: true,
      });
    }
  };

  handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
            <Button onClick={this.handleClick('message a')}>Show message A</Button>
            <Button onClick={this.handleClick('message b')}>Show message B</Button>
            <Snackbar
            key={this.state.messageInfo.key}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            onExited={this.handleExited}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{this.state.messageInfo.message}</span>}
            action={[
                <Button key="undo" color="primary" size="small" onClick={this.handleClose}>
                UNDO
                </Button>,
            ]}
            />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(ConsecutiveSnackbars);