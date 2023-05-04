import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import { useGetAllCourseQuery } from "../Redux/api/Api";
import { useStyles } from "./Newcard.styles";

const UsingGrid = () => {
  const { data, isLoading } = useGetAllCourseQuery();
  console.log(data, "isLoading: ", isLoading);

  const styles = useStyles();

  return (
    <div>
      <Grid container spacing={4} >
        {isLoading ? (
          <CircularProgress color="success" className={styles.loader
        } />
        ) : (
          data.data.map((course, i) => {
            return (
               
              <Grid item lg={4} key={i} >
               <Link to={`/course/${course.id}`} className={styles.link}> 
                <Card
                  style={{
                    backgroundImage: `url("${course.image_url}")`,
                    borderRadius: "15px"
                  }}
                  className={styles.card}
                >
                  <CardActionArea>
                    <CardContent className={`cardhover ${styles.cardHover}`}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        className={styles.wb_clmp_1}
                        sx={{mx: "-17px",
                        marginTop:"-15px",

                    }}
                      >
                        {course.title}
                      </Typography>
                      <Typography variant="body2" className={`wb_clmp_2 ${styles.wb_clmp_2}`}sx={{marginTop:"10px"}}>
                        {course.description}
                      </Typography>
                     
                      <Button 
                      sx={{marginTop: "10px",
                        marginLeft: "67px",
                       
                       
                      }}
                        size="small"
                        variant="contained"
                        color='secondary'
                        className={`btn_main_1 ${styles.btn_main_1}`}
                        // sx={{bgcolor:styles.button_1.btn_1}}
                        
                      >
                        Learn For Free
                      </Button>
                  
                             
                    </CardContent>

                  </CardActionArea>
                  {/* <CardActions className={styles.action_card}>
            <Button size="small" variant='contained' className={styles.button_1}>
            Share
            </Button>
        </CardActions> */}
                </Card>
               </Link> 
              </Grid>
              
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default UsingGrid;
