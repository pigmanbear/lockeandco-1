import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import CustomCard from './Cards'
import MenuButtons from './TextButtons'
import RightDrawer from './RightDrawer'
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  appBar: {
    width: `calc(100% - 275px)`,
    marginLeft: '275px',
    maxHeight: 45,
    backgroundColor: 'rgb(36, 55, 70)'

  },
  toolBar: {
      minHeight: 45,
      justifyContent: 'space-around'

  }
}

function TopMenu(props) {
  const { classes, goToSlide, page } = props;
  return (
    <div className={classes.root}>
    <CustomCard goToSlide={goToSlide} />
      <AppBar position="fixed" className={classes.appBar}>

        <Toolbar className={classes.toolBar} disableGutters={true} >
        <Hidden smDown>
            <MenuButtons goToSlide={goToSlide} page={page}/>
        </Hidden>
        <Hidden mdUp>
        <CustomCard />
        <RightDrawer goToSlide={goToSlide} page={page} />
      </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TopMenu)