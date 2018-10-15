import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import Content from './ContentCard'
import compose from 'ramda/src/compose'
import { withWindowSize } from 'react-fns'
import withTransition from './withTransition'
import Typography from '@material-ui/core/Typography'
import Header100 from './MobileScrollingHeader'

const styles = theme => ({
  demo: {
    height: `100%`,
    flexGrow: 1,
    minHeight: '100vh',
  },
})

const Page = props => {
  const {
    classes,
    pictures,
    text,
    header,
    leftSize,
    rightSize,
    backgroundColorRight,
    gMap,
  } = props
  return (
    <Grid
      container
      spacing={0}
      //className={classes.demo}
      alignItems="stretch"
      direction="row"
      justify="center"
    >
      <Grid item xs={12} md={leftSize || 6}>
        {gMap}
      </Grid>
      <Hidden smDown>
        <Grid
          item
          sm={rightSize || 6}
          xs={12}
          style={{
            padding: 'unset',
            height: `${pictures.rightTop ? pictures.rightTop.size : 0}`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${
              pictures.rightTop ? pictures.rightTop.url : ``
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: `${backgroundColorRight}`,
          }}
        >
          {header && header.position === 'rightTop' && header.component}
          {text && text.position === 'rightTop' && text.component}
        </Grid>
      </Hidden>
    </Grid>
  )
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default compose(withStyles(styles))(Page)
