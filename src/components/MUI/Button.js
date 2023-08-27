import React from 'react'
import {AvatarGroup, Button, IconButton, Stack} from '@mui/material'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
const MUIButton = () => {
  return (
    <Stack spacing={4}>

     <Stack spacing={2} direction={'row'}>
        <Button variant='text' size='small' color='primary'>Text</Button>
        <Button variant='contained' size='large' color='error'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
     </Stack>
        <Stack spacing={4} direction={'row'}>
            <Button variant='contained' startIcon={<SendIcon></SendIcon>}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon></SendIcon>}>Send</Button>
        </Stack>
        <stack>
            <IconButton>
                <SendIcon color='success'></SendIcon>
            </IconButton>
        </stack>
        <Stack>
        {/* <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
/> */}
{/* <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup> */}
        </Stack>
    </Stack>
  )
}

export default MUIButton
