import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MovieIcon from '@material-ui/icons/Movie';
import MovieFilter from '@material-ui/icons/MovieFilter';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const styles = theme =>({
  list: {
    width: 270,
  },
  title:{
    marginLeft: 25,
    marginBottom: 5,
  }

});

class Drawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
        <Typography className={classes.title} variant="h5" color="inherit" noWrap>
              Menu
            </Typography>
          <Divider/>
          {['Mi Agenda'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<MovieIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Divider/>
          {['Peliculas Vistas'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<MovieFilter />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Divider/>
          {['Mis Recomendaciones'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<MovieIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
         <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer);