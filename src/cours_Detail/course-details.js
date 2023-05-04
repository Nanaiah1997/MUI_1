// import { BorderBottom } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
// import { maxHeight } from '@mui/system';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllCourseQuery } from '../Redux/api/Api'
import { useStyle } from './course-details.styles';
import VerticalLinearStepper from './timeline';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import About_course from './About_course';



const CourseDetail = () => {
    const style= useStyle();
    const {data:details,isLoading}= useGetAllCourseQuery();
    const courseid= useParams();
    let courselist=[]
 if(!isLoading){ courselist= details.data.filter(x=>x.id == courseid.id)}
//  const courselist = details.data.filter((x)=>x.id == courseid.id)
    const courseFull = courselist[0];
    console.log(courselist)
    // console.log(courseFull.code)



    let [tab, setTab] = useState({ course: true, timeliner: false, assement: false });
  return (
// <div>course-details</div>
//     <Container maxWidth="xl" className={style.container}>
//     <Box className={style.box}>
//       <Grid container spacing={2} className={style.grid_container}>
        
//         <Grid item xs={12} sm container>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//               <Typography gutterBottom variant="subtitle1" component="div">
//                 {courseFull.code}
//               </Typography>
//               <Typography variant="body2" gutterBottom>
//                 {courseFull.description}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 ID: 1030114
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                 Remove
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <Typography variant="subtitle1" component="div">
//               $19.00
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   </Container>
<>
{ !isLoading && 
  <Box sx= {{width: "100%",height
:"20%", backgroundSize:"cover"}}>
  <Stack direction="row" backgroundColor= "background.bg_4" height="250px">
  {/* <Card sx={{ maxWidth: "60%" , marginTop: "40px", marginLeft:"20px", backgroundColor:"#ffffff00"  }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {courseFull.code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {courseFull.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card> */}
  <Box sx={{width: "60%"}}>
      <Typography variant='body2' sx={{
          color:"primary.main",
          marginTop: "30px",
          marginLeft: "50px"
      }}><span className={style.a}> course</span>  {courseFull.title}</Typography>
      <Typography variant = "h5" sx={{
          color:"primary.main",
          fontSize: "600",
          fontWeight: "bold",
          marginTop: "30px",
          marginLeft: "50px"
      }}>
          {courseFull.title}
      </Typography>
      <Typography variant = "h5"
      sx={{
          color:"color.col_2",
          fontSize: "smaller",
          marginTop: "25px",
          marginLeft: "50px"
      }}>
          {courseFull.description}
      </Typography>
  </Box>
  <Card  sx={{ minWidth: 300, height: 320,  position:"relative", top: "110px", backgroundColor: "#253952", marginLeft:"5px", borderRadius: "10px"}}>
    <CardActionArea sx={{backgroundColor: "background.bg_3"}}>
      <CardMedia
        component="img"
        height="160"
        image={courseFull.image_url	}
        alt="green iguana"
      />
      <CardContent >
        <Box sx={{display:"flex", justifyContent: "space-around", alignItems:"center", color: "primary.main"}}>
          <Box>
            <Typography variant='body2'><ViewQuiltOutlinedIcon/>  {courseFull.modules_count} Modeles</Typography>
            <br></br>
            <Typography variant='body2'><DatasetOutlinedIcon/>  Data Cases</Typography>

          </Box>
          <Box>
            <Typography variant='body2'> <QuizOutlinedIcon/> {courseFull.quizzes_count} Quizzes</Typography>
            <br></br>
            <Typography variant='body2'><CardMembershipOutlinedIcon/> <del>Certificate</del> </Typography>
          </Box>
          
        </Box>
        <Button variant="contained" sx={{backgroundColor:'btn_main.btn_1', mt:2, width:1, 
                "&:hover":{
                  background: "btn_main.btn_1"
              }}} className={style.button_main}>learn For Free </Button>
      </CardContent>
    </CardActionArea>
    
  </Card>
  </Stack>
  <Stack direction="row" spacing={6} marginLeft="50px" marginTop="20px">
      <Typography sx={{color:"white",  cursor: "pointer" }} onClick={() => setTab({ course: true, timeliner: false, assement: false})}> About the Course</Typography>
      <Typography sx={{color:"white", cursor: "pointer"}} onClick={() => setTab({ course: false, timeliner: true, assement: false})}> Timeline</Typography>
      <Typography sx={{color:"white", cursor: "pointer"}} onClick={() => setTab({ course: false, timeliner: false, assement: true})}>Assessment Criteria</Typography>
  </Stack>
  <Box sx={{marginLeft: "45px", color: "white", marginTop:2}}>
      {tab.course &&(<About_course/>)}
      {tab.timeliner && (<VerticalLinearStepper/>)}
      {tab.assement && (<Typography>No data avalible for Assessment</Typography>)}
  </Box>

</Box>}
</>
   
  )
}

export default CourseDetail;