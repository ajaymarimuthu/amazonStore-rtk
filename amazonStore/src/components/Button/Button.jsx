import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Button = ({props}) => {
    return (
        <Stack spacing={2} direction="row">
 
            <Button variant="contained">{props.children}</Button>
       
        </Stack>
    )
}

export default Button