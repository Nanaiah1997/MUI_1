import { makeStyles } from "@mui/styles";



export const useStyle = makeStyles((theme) =>{
    return{
            box:{
                
                backgroundColor: theme.palette.background.bg_4,
                    display: "flex",
                    flexDirection:"row",
                    gap: "20px"

            },

            stack:{
                "& .css-1p5q5e5-MuiStack-root":{
                display: "flex",
                 backgroundColor: "#000000",
                  flexDirection:"row",
                  gap: "20px",

                },
            },

            container:{
                "& .css-19r6kue-MuiContainer-root": {
                    paddingLeft:"0px",
                    paddingRight:"0px"
                },
            },

            grid_container:{
                "&.css-mhc70k-MuiGrid-root":
                {backgroundColor:"#fff",
                marginRight: "20px",
                width: "calc(100% + -29px)",
            },

            },

            button_main:{
                "&:hover":{
                    background: theme.palette.secondary.main
                }
            },

            a:{
                textDecoration: "underline",
                cursor: "pointer",
                "&:hover":{
                    color:theme.palette.secondary.main
                }
            }


    }
})