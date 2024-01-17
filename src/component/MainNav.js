import  React, {useEffect} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {useNavigate} from "react-router-dom"
  
// const useStyles = makeStyles({
//     root: {
//       width: "100%",
//       position: "fixed",
//       bottom: 0,
//       backgroundColor: "#000",
//       zIndex: 100,
//     },
//   });
  const style={
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#000",
    zIndex: 100,
  }

export default function SimpleBottomNavigation() {
    //const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate();
  useEffect(()=>{
    if(value=== 0)
      navigate("/");
    else if(value===1)
      navigate("/movies");
    else if(value===2)
      navigate("/series");
    else if(value===3)
      navigate("/search");
  }, [value, navigate]);

  return (
  
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={style}
      >
        <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
    
  );
}