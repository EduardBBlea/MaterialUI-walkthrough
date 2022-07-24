import React from 'react'

import {Stack, Button, IconButton, ButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            {/* Button variants style */}
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            {/* Button colors style */}
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='text' color='error'>Error</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
            {/* Button size style */}
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            {/* Button with icons style */}
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={()=>alert("HI")}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
            {/* Icon buttons  */}
            <IconButton aria-label='send' color="success" size="small">
                <SendIcon/>
            </IconButton>
        </Stack>
        <Stack direction="row">
            <ButtonGroup 
            variant='outlined' 
            orientation='vertical' 
            size='small' 
            color='secondary' 
            aria-label='alignment button group'
            >
                <Button onClick={()=>alert("Hello, world!")}>Left</Button> 
                <Button>Center</Button> 
                <Button>Right</Button>
            </ButtonGroup>
             
        </Stack>
    </Stack>
        
    
  )
}

export default MuiButton