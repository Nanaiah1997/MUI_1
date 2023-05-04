import * as React from 'react';
import Box from '@mui/material/Box';
import { useStyles } from './Newcard.styles';
import { Card, CircularProgress, Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useGetAllCourseQuery } from '../Redux/api/Api';

export default function NewCard() {
    const styles = useStyles()

    
    const {data, isLoading} =useGetAllCourseQuery();
    console.log(data, "isLoading: ", isLoading);


  return (
    <Box sx={{marginTop: "50px"}}>
      <Stack direction="row" spacing={2} flexWrap="wrap"justifyContent="space-evenly" rowGap="60px"  sx={{marginTop: "50px"}} >
        
  { isLoading?<CircularProgress color="success" />:data.map((course)=>{ return( <Card className= {styles.card}  style={{backgroundImage:`url("${course.background_image}")`}}  >
      <CardActionArea  >
        {/* <CardMedia
          component="img"
          height="140"
        //   image={course.background_image}
          alt="green iguana"
        /> */}
        <CardContent className={`cardhover ${styles.cardHover}`}>
          <Typography  variant="h5" component="div" className={styles.wb_clmp_1}>
            {course.title}
          </Typography>
          <Typography variant="body2" color="text" className={styles.wb_clmp_2} >
            {course.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.action_card}>
        <Button size="small" variant='contained' className={styles.button_1}>
          Learn for Free
        </Button>
      </CardActions>
    </Card>)})}

     </Stack>
   </Box>
  );
} 