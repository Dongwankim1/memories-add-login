import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon';
import useStyles from './styles';
import Input from './Input';
import {GoogleLogin} from 'react-google-login';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup,setIsSignup] = useState(false);


    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode =() =>{
        setIsSignup((prevIsSignup)=> !prevIsSignup);
    }

    const googleSuccess = async (res) =>{
        console.log(res);
        const result =res?.profileObj;// cannot get property profileObj of undefined
        const token = res?.tokenId;
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) =>{
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again Later");
    }
    const state = null;
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half />

                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"></Input>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}></Input>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"></Input>}
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin
                            clientId="153875314747-ul34r3aach4th9l57htc31ho22j11b3s.apps.googleusercontent.com"
                            render={(renderProps)=>(
                                <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">Google Sign In</Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign In':"Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;