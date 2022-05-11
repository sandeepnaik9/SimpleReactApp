import React,{useState,useEffect} from 'react'
import {AppBar,Typography,Button, Avatar, Toolbar} from '@material-ui/core';
import useStyles from './styles'
import {Link, useNavigate,useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
const NavBar = ({handleOpen,handleClose,setOpen,open,add}) => {
    const classes = useStyles();
    const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate()
    const location = useLocation()

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        history('/');
        setUser(null);
    }

    useEffect(() =>{
        const token = user&&user.token;
        setUser(JSON.parse(localStorage.getItem('profile'))) },[location])

  return (
    
<AppBar className={classes.appBar} position="static" color="inherit">
<div className={classes.brandContainer}>
<Typography component={Link} to="/"  className={classes.heading} variant="h5" align="left" >FullStack Task</Typography>
</div>
<Toolbar className={classes.toolbar}>
    {user ? (
        <div>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" onClick={handleOpen} className={classes.logout} color="secondary">Add Task</Button>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </div>
    ):(
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
    )}
</Toolbar>

</AppBar>
  )
}

export default NavBar
