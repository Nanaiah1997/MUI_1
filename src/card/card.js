import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, Container, CircularProgress } from '@mui/material';
import { useGetAllCourseQuery } from '../Redux/api/Api';
//import { Link } from 'react-router-dom';

export default function ActionAreaCard() {


    const {data, isLoading} =useGetAllCourseQuery();
    console.log(data, "isLoading: ", isLoading);

    
  return (

    
   <Container sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap:"50px",
        backgroundColor:"#192e49",
        width: "100%"
    }}>
    {isLoading?<CircularProgress color="success" />: data.map((course)=>{
  return (


  <Card sx={{ 
    width: 345,
    maxHeight: 400,
    overflow: "hidden",
    backgroundColor: "#2e435a",
    color: "white"
   }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={course.background_image}
          alt="course img"
        />
        <CardContent sx={{
          color:"white"
        }}>
          <Typography gutterBottom variant="h5" component="div">
           {course.title}
          </Typography>
          <Typography variant="body2" color="palette.secondary">
           {course.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    )
    })}
    </Container>
  );
}

