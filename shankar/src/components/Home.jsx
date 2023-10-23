import { GitHub } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import profile from "../assets/profile.png";
import "../styles/home.css";

export default function Home() {
  return (
    <Box id="home" className="home" width={window.innerWidth -40}>
      <Box className="content-container">
        <Box className="left">
          <Box>
            <Typography className="title">
              Full-Stack Developer
              <img
                src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696675904/wave_fp9ca0.png"
                width="40px"
              />
            </Typography>
          </Box>
          <Box >
            <Typography className="sub_title">
              Hi, I'm Shankar Rao Jadhav. A passionate Full Stack Developer
              based in Karnataka, India
              <img
                src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696676734/lollipop_moopcy.png"
                width="40px"
              />
            </Typography>
          </Box>
          <Box>
            <a href="https://github.com/shankarraojadav" target="_blank">
              <GitHub sx={{ fontSize: "60px" }} />
            </a>
          </Box>
        </Box>
        <Box className="right">
          <Box
            component="img"
            src={profile}
            className="profile_img"
          />
        </Box>
      </Box>
      <Box className="bottom">
        <Box className="bottom_left">
          <Typography className="skills">Tech Stack</Typography>
        </Box>
        <Box className="bottom_right">
          <Box className="stack">
          <img src="https://skillicons.dev/icons?i=html" />
          </Box>
          <Box className="stack">
          <img src="https://skillicons.dev/icons?i=bootstrap,css,materialui" />
          </Box>
          <Box className="stack">
          <img src="https://skillicons.dev/icons?i=js,react" />
          </Box>
          <Box className="stack">
          <img src="https://skillicons.dev/icons?i=nodejs,express" />
          </Box>
          <Box className="stack">
          <img src="https://skillicons.dev/icons?i=mongodb" />
          </Box>
          <Box className="stack">
          <img src="https://skillicons.dev/icons?i=git" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
