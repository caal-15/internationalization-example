import React from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles.module.sass'

const BusySpinner = () => (
  <Grid
    container
    className={styles.spinnerContainer}
    justify="center"
    alignItems="center"
  >
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid>
)

export default BusySpinner