import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

const Topbar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ background: "#F3F3F3", borderBottom: "1px solid #C6C6C6" }}
      >
        <Box>
          <Typography
            sx={{
              display: "flex",
              fontWeight: 600,
              color: "#020655",
              textDecoration: "none",
              fontSize: "1.375rem",
            }}
          >
            Hi, Username
          </Typography>
          <Typography
            sx={{
              mr: 2,
              fontWeight: 700,
              fontSize: "0.75rem",
              color: "#7D7D7D",
              textDecoration: "none",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Venue Name
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/avatar.png" />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
    </>
  );
};

export default Topbar;
