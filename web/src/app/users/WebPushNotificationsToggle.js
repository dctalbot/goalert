import React from 'react'

import { styles as globalStyles } from '../styles/materialStyles'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardHeader,
  Grid,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core'
import * as serviceWorker from '../push-notifications'

import {
  isPushNotificationSupported,
  askUserPermission,
} from '../push-notifications/util'

const useStyles = makeStyles(theme => {
  const { cardHeader } = globalStyles(theme)

  return createStyles({
    actionGrid: {
      display: 'flex',
      alignItems: 'center',
    },
    cardHeader,
    cardContent: {
      // display: 'flex'
    },
  })
})

const getBtnLabel = () => {
  if (!isPushNotificationSupported()) {
    return 'Unsupported Browser'
  }

  return Notification.permission === 'granted' ? 'Enabled' : 'Enable'
}

const onClick = () => {
  // TODO provide way to unregister sw (disable push notis)
  // const registered = isServiceWorkerRegistered()
  // if (registered) {
  //   return serviceWorker.unregister()
  // }

  askUserPermission().then(perm => {
    if (perm === 'granted') {
      serviceWorker.register()
    }
  })
}

export default () => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          className={classes.cardHeader}
          component='h3'
          title='Browser Push Notifications'
        />
        <CardContent className={classes.cardContent}>
          <Typography component='p'>
            Receive push notifications in your browser for all alerts
          </Typography>
          <CardActions>
            <Button
              id='toggle-push-notifications'
              color='primary'
              disabled={
                !isPushNotificationSupported() ||
                Notification.permission === 'granted'
              }
              onClick={onClick}
            >
              {getBtnLabel()}
            </Button>
            <button id='doIt'>Trigger Alert</button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  )
}
