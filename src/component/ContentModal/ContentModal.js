import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./ContentModal.css"
import Carousel from "../Carousel/Carousel"

const style = {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    //border: "1px solid #282c34",
    //borderRadius: 10,
    //bgcolor: 'background.paper',
    //border: '2px solid #282c34',
   
    color: "white",
    
};
// const modal={
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center"
// };
export default function ContentModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent]=React.useState();
  const [video, setVideo]=React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.React_APP_API_KEY}&language=en-US`);

    setContent(data);
  };

  const fetchVideo=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.React_APP_API_KEY}&language=en-US`);
    console.log(data);
    setVideo(data.results[0]?.key);
  };

  React.useEffect(()=>{
    fetchData();
    fetchVideo();
  },[]);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        sx={
          {
             display: "flex",
             alignItems: "center",
            justifyContent: "center",
          }
        }
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
        {content && (
            <Box sx={style}>
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                  />
                  <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                  />
                  <div className='ContentModal__about'>
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <span className="ContentModal__description">
                    {content.overview}
                  </span>
                  <div>
                      <Carousel media_type={media_type} id={id}/>
                  </div>
                <Button
                variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}>
                    Watch Trailer
                </Button>
                </div>
                </div>
            </Box>
        )}
        </Fade>
      </Modal>
    </>
  );
}