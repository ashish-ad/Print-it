import { Box, Button, Divider, TextField } from '@mui/material';
import React from 'react';
import { BsGoogle } from 'react-icons/bs';
const SignIn = () => {
    return (
        <div className='sign-in-wrapper'>
            <Box
                className='auth-box'
                sx={{
                    width: 350,
                    height: 500,
                    zIndex: 'modal',
                }}
            >
                <div>
                    <h2 className='auth-header'>SIGN IN</h2>
                    <h3 className='auth-header header-text'>
                        Use your credentials to login into your account
                    </h3>
                </div>
                <div>
                    <div className='input-wrapper'>
                        <label className='input-label'>User Name</label>
                        <input type='text' className='input-field' />
                    </div>
                    <div className='input-wrapper'>
                        <label className='input-label'>Password</label>
                        <input type='password' className='input-field' />
                    </div>
                    <Button variant='contained' className='submit-btn'>
                        Log In
                    </Button>
                    <Divider className='divider'>OR</Divider>
                    <div className='sso-wrapper'>
                        <button type='button' className='google-auth-btn'>
                            <BsGoogle />
                        </button>
                    </div>
                </div>
            </Box>
            {/* <div className='curve'></div> */}
        </div>
    );
};

export default SignIn;
