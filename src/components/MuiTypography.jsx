import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4'>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>Sub title 1</Typography>
        <Typography variant='subtitle2'>Sub title 2</Typography>

        <Typography variant='body1' component="h2" gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse, velit, aspernatur consectetur, quae enim mollitia ducimus harum architecto exercitationem veniam iusto eos? Deleniti animi hic necessitatibus ipsa. Fugiat, ducimus?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem perferendis nam culpa? Illo assumenda doloribus voluptas maxime ducimus iste doloremque asperiores perferendis sunt ad, tempore quis cum nam ab impedit.</Typography>
    </div>
  )
}

export default MuiTypography