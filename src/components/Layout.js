import React from 'react'
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(3, 7),
      width: "100%"
    }
  }))
export default (props) => {
  const classes = useStyles()
  return (
    <Paper elevation={1} className={classes.paper}>   
        <Typography variant="h4" gutterBottom>
        {props.title}
        </Typography>
        {props.children}
    </Paper>
  )
}

