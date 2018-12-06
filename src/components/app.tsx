import * as React from 'react';
import PropTypes from 'prop-types';
import { WithStyles, createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import LabelBottomNavigation from './botNav';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Grid from '@material-ui/core/Grid';

import SimpleMenu from './dropFile';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import 'typeface-roboto';
import typography from '@material-ui/core/Typography';

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
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#FF4500',//DeepOrange Color
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#FF4500',//DeepOrange Color
    },
});



interface IProps extends WithStyles<typeof styles> {}

interface IState {
    login: boolean
}

class Home extends React.Component<IProps, IState> {
    constructor(props){
        super(props);

        this.state = {
            login: false,
        }
    }

    login() {
        this.state.login ?
            this.setState({ login : false })
        :
            this.setState({ login : true })
        
    }

    LetterAvatars(props) {
        const { classes } = props;
        return (
          <Grid container justify="center" alignItems="center">
            <Avatar className={classes.orangeAvatar}>N</Avatar>
          </Grid>
        );
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <div className={this.props.classes.root}>
                        <AppBar position="static">
                            <Toolbar>
                                    
                                    
                                    <Typography variant="title" color="inherit" className={this.props.classes.grow}>
                                    Rovitracker
                                    </Typography>

                                    {this.state.login ?
                                    <SimpleMenu/> :
                                    <Button color="inherit" onClick={() => this.login()}>Login</Button> }

                                </Toolbar>
                        </AppBar>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default withStyles(styles)(Home); 