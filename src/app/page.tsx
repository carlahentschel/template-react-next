import ResponsiveAppBar from '@/components/ResponsiveAppBar'

import { Box, Grid, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
      </Grid>
      
      <Box marginLeft={20}>
        <Grid container marginTop={8}>
          <Grid item xs={12}>
          <Typography>Home</Typography>
          </Grid>

        </Grid>

      </Box>
        
    </>
    
  )
}
