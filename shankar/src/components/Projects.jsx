import { Box, Button, Typography } from "@mui/material";
import "../styles/projects.css";
import { GitHub } from "@mui/icons-material";
import { data } from "./data";

export default function Projects() {
  return (
    <Box className="projects" id="projects">
      <Box className="container">
      <Box className="top">
        <Typography className="title">PORTFOLIO</Typography>
        <Typography className="sub_title">
          Every project in development is a distinct work of art, shaped by its
          own challenges and solutions.
        </Typography>
      </Box>

      
        <Box className="projects_card">
            {
                data.map((i, index) => {
                    return (
                        <Box key={index} className="card">
                            <Box className="left">
                                <Box 
                                component="img"
                                src={i.url}
                                className="card_img"/>
                            </Box>
                            <Box className="right">
                                <Typography className="card_title">{i.title}</Typography>
                                <Typography className="card_description">{i.description}</Typography>
                                <Box className="skill_btn">
                                <Button variant="outlined">React</Button>
                                <Button variant="outlined">CSS & MUI</Button>
                                </Box>
                                <Box className="card_btns">
                                    <Button>
                                        <a href={i.github} target="_blank" style={{fontSize:"3vh"}}>Code <GitHub sx={{fontSize:"3rem"}} /></a>
                                    </Button>
                                    <Button >
                                        <a href={i.live} target="_blank" style={{fontSize:"3vh"}}>Live Demo</a>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
      </Box>
     
    </Box>
  );
}
