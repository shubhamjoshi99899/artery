import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import EventListingBox from "./event-lsiting-box";

const EventListing = () => {
  return (
    <>
      <Container sx={{ pb: 8 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "24px",
            letterSpacing: "0.1px",
            color: "#020655",
          }}
          mb={3}
        >
          Ongoing Events
        </Typography>
        <EventListingBox />
        <EventListingBox />
        <EventListingBox />
      </Container>
    </>
  );
};

export default EventListing;
