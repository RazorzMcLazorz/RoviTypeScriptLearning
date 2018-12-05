import * as React from 'react';
import PropTypes from 'prop-types';
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

const styles = {
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
};
const styles1 = {
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
};

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.orangeAvatar}>N</Avatar>
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

  function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
            <LetterAvatars classes={styles1}/>
          </Toolbar>
        </AppBar>

        {/* <LabelBottomNavigation/> */}
      </div>
    );
  }
  
  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

class Home extends React.Component {

    render() {
        return (
            <div>
                <ButtonAppBar classes={styles}/>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default Home; 