import { Box, Typography } from "@mui/material";
import "../styles/footer.css";
import { GitHub } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box className="footer">
      <Box>
        <Box className="container_footer">
          <Typography className="footer_title">
            Copyright © 2023. All rights are reserved{" "}
            <a href="https://github.com/shankarraojadav" target="_blank">
              <GitHub sx={{ fontSize: "60px", color: "#fff" }} />
            </a>
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
}
