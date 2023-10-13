import { Box } from "@mui/material";
import "../styles/about.css";

export default function About() {
  return (
    <Box className="about" id="about">
      <Box className="container">
        <Box className="left">
          <img
            src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696738588/developer_view_rlrbwb.jpg"
            className="about_img"
          />
        </Box>
        <Box className="right">
          <p className="about_head">About ME</p>

          <p className="about_title">
            A dedicated Full Stack Developer based in Karnataka, India
            <img
              src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696676734/lollipop_moopcy.png"
              width="20px"
            />
          </p>

          <p className="about_para">
            As a Full Stack Developer, I wield an extensive arsenal of skills,
            from HTML, CSS, and JavaScript to React, Tailwind, and MaterialUi.
            My passion lies in designing and optimizing responsive web
            interfaces that captivate users. I seamlessly integrate front-end
            and back-end technologies like Node.js and Express.js, crafting
            robust, scalable web applications. Collaborating within
            cross-functional teams is where I thrive, ensuring that every
            project achieves excellence.
          </p>
        </Box>
      </Box>
    </Box>
  );
}
