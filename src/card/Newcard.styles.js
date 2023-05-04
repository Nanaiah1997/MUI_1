import { makeStyles } from "@mui/styles";
//import { palette } from "@mui/system"



export const useStyles = makeStyles((theme) => {
  console.log(theme, "111");
  return {
    // grid_main:{
    //   marginLeft: "10px",
    // },
    navBar: {
      backgroundColor: theme.palette.background.bg_1,
      "& .Mui-paper": {},// to override default style in mui
    },

    loader: {
      marginLeft: "650px",
      marginTop: "300px",
    },

    Box: {
      width: "100%",
      height: "auto",
      margin: "20px",
      backgroundColor: theme.palette.background.bg_3,
      "&:hover": {
        backgroundColor: "primary.main",
        opacity: [0.9, 0.8, 0.7],
      },
    },
    card: {
      marginLeft: "50px",
      marginTop: "20px",
      width: "330px",
      height: "290px",
      overflow: "hidden",
      borderRadius: "30px",
      backgroundSize: "cover",
      backgroundColor: theme.palette.background.bg_1,
     
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      transition: ".5s linear",
      "&:hover": {
        boxShadow: "1px 8px 20px grey",
        webkitTransition:  "box-shadow .6s ease-in",
        "& .cardhover": {
          marginTop: "30%",
          transition: "1s ease-in",
          backgroundColor: " rgba(26, 25, 25, 0.932)",
         
        },
        "& .wb_clmp_2 ": {
          WebkitLineClamp: "3",
        },

         '& .btn_main_1.MuiButtonBase-root':{
          
         marginTop: "15px",
          display: "block"
        }
       
      },
    },

    cardHover: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.dark,
      marginTop: "59%",
      height: "200px",
      // "&:hover": {
      //   "& .wb_clmp_2 ":{
      //     WebkitLineClamp: "3",
      //   }
      // },
    },
    wb_clmp_1: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: "2",
      WebkitBoxOrient: "vertical",
      backgroundColor: theme.palette.primary.dark,
      paddingLeft: "15px",
    },

    wb_clmp_2: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: "1",
      WebkitBoxOrient: "vertical",
      // "&:hover" : {
      //   WebkitLineClamp: "3",
      // }
    },

    action_card: {
      backgroundColor: "black",
      alignItems: "center",
    },

    btn_main_1: {
      marginTop: "10px",
      marginLeft: "67px",
      backgroundColor: theme.palette.secondary.main,
      display: "none",
      '&.MuiButtonBase-root':{
        display:'none'
      },
      
    
    },

    link:{
      textDecoration: "none"
    }
  };
});
