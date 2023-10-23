import { Box, Typography } from "@mui/material";
import "../styles/contact.css";

export default function Contact() {
  return (
    <Box className="contact" id="contact" width={window.innerWidth -40}>
      <Box className="container">
        <Box className="container_items">
          <Typography className="title">CONTACT</Typography>
          <Typography className="sub_title_contact">
            Don't be Shy! Hit me up!
            <img
              src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696849779/hand_kpn0xq.png"
              width="40px"
            />
          </Typography>
          <Box className="contact_bottom">
            <Box className="contact_btm_items">
              <img src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696851405/map_pot3bj.png" width="20px" height="20px" className="bottom_img" />
              <Box>
                <Typography className="bottom_heading">Location</Typography>
                <Typography className="bottom_sub_heading">Karnataka, India</Typography>
              </Box>
            </Box>
            <Box className="contact_btm_items" sx={{ml:"5vh"}}>
              <img src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696851404/email_spgoyi.png" width="20px" height="20px"  className="bottom_img" />
              <Box>
                <Typography className="bottom_heading">Email</Typography>
                <Typography className="bottom_sub_heading">Shankarjadav360@gmail.com</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
