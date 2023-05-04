
// import './App.css';
// import { Button, Typography } from '@mui/material';
// import styled from '@emotion/styled';

// function App() {

//   const MyCustomButton = styled(Button)(({theme})=>({
//     padding: 100,
//     color: theme.palette.primary.dark
  
//   }))
//   return (
//     <div className="App">
//       <Button> Button</Button>
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined" >Outlined</Button>

//       <Typography variant='h1' sx={{color: "myCustomColor.main"}}>
//         Nanaiah
//       </Typography>
//       <Typography variant='h3'sx={{color: "myCustomColor.superDark"}}>
     
//         Nanaiah
//       </Typography>
//       <Typography variant='h6' sx={{color: "myCustomColor.superLight"}}>
//         Nanaiah
//       </Typography>
//       <MyCustomButton variant='contained'>CustomButton</MyCustomButton>
//     </div>
//   );
// }

// export default App;

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

// export default function SimpleSnackbar() {
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   const action = (
//     <React.Fragment>
//       <Button color="secondary" size="small" onClick={handleClose}>
//         UNDO
//       </Button>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );

//   return (
//     <div>
//       <Button onClick={handleClick}>Open simple snackbar</Button>
//       <Snackbar
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//         message="Note archived"
//         action={action}
//       />
//     </div>
//   );
// }
import React from 'react'
import ResponsiveAppBar from './navBAr/NAvBar';
import ActionAreaCard from './card/card';
import UsingGrid from './card/UsingGrid';
import { useStyles } from './card/Newcard.styles';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseDetail from './cours_Detail/course-details';



const App = () => {
//  const styles = useStyles()
  return (

    // <div className="App_1">
    //  <ResponsiveAppBar/>
    //  {/* <ActionAreaCard/> */}

    //  {/* <NewCard/> */}
    //  <UsingGrid/>
    // </div>
    <BrowserRouter>
    <ResponsiveAppBar/>
  
    {/* <NavBar/> */}
    <Routes>
      <Route path="/" element={<UsingGrid/>} />

      <Route path={`/course/:id`} element={<CourseDetail />}/>
    </Routes>
  </BrowserRouter>
   
  )
}

export default App