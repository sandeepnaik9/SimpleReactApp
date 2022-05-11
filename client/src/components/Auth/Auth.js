import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from'react-router-dom'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core'
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'
import {signin,signup} from '../../actions/auth'
const initialFormData = { firstName:'',lastName:'',email:'',password:'',confirmPassword:'' }

const Auth = () => {
    const [showPassword,setShowPassword] = useState(false) 
    const classes = useStyles();
    const [isSignUp,setIsSignUp] = useState(false)
    const [formData,setFormData] = useState(initialFormData)
    const dispatch = useDispatch()
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        if(isSignUp){
            dispatch(signup(formData,history))
        }
        else{
            dispatch(signin(formData,history))
        }
    }
   
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const switchMode = ()=>{
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    }
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
            </Avatar>
            <Typography variant="h5">{isSignUp? 'Sign Up':'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name='firstName' label="First Name" handleChange={handleChange}  half />
                                <Input name='lastName' label="Last Name" handleChange={handleChange}  half />
                            </>
                        )
                    }
                    <Input name='email' label='Email Address' handleChange={handleChange} type="email" />
                    <Input name='password' label='Password' handleChange={handleChange} type="password" />
                    {isSignUp && <Input name='confirmPassword' label="Repeate Password" handleChange={handleChange} type="password" />}
                </Grid>
                <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
                    {isSignUp ? "Sign Up":"Sign In"}
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? "Alreday have an account? Sign In":"Don't have an account Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth;