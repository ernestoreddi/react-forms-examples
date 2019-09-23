import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from "@reach/router"
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "25px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover": {
      color: "inherit",
      fontWeight: "bold"
      //background: "rgba(200, 200, 200, 0.2)"
    },
    "&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    whiteSpace: "nowrap"
  },
  title: {
    flexGrow: 1,
    whiteSpace: "nowrap",
    padding: theme.spacing(0, 4.2),
  },
  list: {
    width: 250,
  },
  link: {
    textDecoration: "none"
  }
}))
const AdapterLink = React.forwardRef((props, ref) => <Link  innerRef={ref} {...props} />)


export default ()=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = () => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  }
  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {[{menu: 'Inicio', link: '/'}, {menu: 'Formik', link: 'formik'}, {menu: 'Redux-Forms', link: 'reduxforms'}, {menu: 'Plain Javascript', link: 'vanillajs'}].map((item, index) => (
          <ListItem button key={index}>
            <Link to={item.link} className={classes.link}><ListItemText primary={item.menu} /></Link>
          </ListItem>
        ))}
      </List>

    </div>
  )
  return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ejemplos con Forms
          </Typography>
          <Hidden xsDown>
            <Button  component={AdapterLink} to="/" className={classes.button}> Inicio </Button>
            <Button  component={AdapterLink} to="formik" className={classes.button}> Formik </Button>
            <Button  component={AdapterLink} to="reduxforms" className={classes.button}> Redux-Forms </Button>
            <Button  component={AdapterLink} to="vanillajs" className={classes.button}> Plain Javascript </Button>
          </Hidden>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer()}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Drawer open={open} onClose={toggleDrawer()}>
            {sideList()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
}
