import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Box, Container, Stack, Typography } from "@mui/material";
import PrimaryButton from "./primaryButton";
import { useRouter } from "next/router";
const EventListingBox = () => {
  const router = useRouter();
  return (
    <Box mb={3}>
      <Box
        sx={{
          p: 3,
          border: "1px solid #E0E0E0",
          boxShadow: "0px 0px 20px 2px rgba(9, 14, 130, 0.05)",
          borderRadius: "16px",
        }}
      >
        <Stack direction="row" justifyContent={"space-between"} mb={2}>
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.25rem",
                lineHeight: "24px",
                letterSpacing: "0.1px",
                color: "#020655",
                mb: 1,
              }}
            >
              Event Header
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: "20px",
                letterSpacing: "0.1px",
                color: "#7D7D7D",
                mb: 3,
              }}
            >
              Host Name
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "0.875rem",
                lineHeight: "20px",
                letterSpacing: "0.25px",
                color: " #090E82",
              }}
            >
              Started:19:00
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "0.75rem",
                lineHeight: "20px",
                letterSpacing: "0.5px",
                color: "#7D7D7D",
                mb: 2,
                textAlign: "right",
              }}
            >
              Mon, 24th Jan’22
            </Typography>
            <Stack direction="row" spacing={1}>
              <Box>
                <Box
                  sx={{
                    py: 1,
                    px: 2,
                    background: "#E1F1FF",
                    border: "2px solid #9EA9C8",
                    borderRadius: "8px",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#9EA9C8",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                    }}
                  >
                    72
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#9EA9C8",
                    fontWeight: 600,
                    fontSize: "0.5625rem",
                    textAlign: "center",
                  }}
                >
                  Min. Cmmit
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    py: 1,
                    px: 2,
                    background: "#FFF3DC",
                    border: "2px solid #ECC446",
                    borderRadius: "8px",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ECC446",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                    }}
                  >
                    72
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#9EA9C8",
                    fontWeight: 600,
                    fontSize: "0.5625rem",
                    textAlign: "center",
                  }}
                >
                  Min. Cmmit
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack
          alignItems={"center"}
          direction="row"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              sx={{
                color: "#000",
                fontWeight: 600,
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              H:5
            </Typography>
          </Box>
          <Stack
            sx={{
              background: " #ECEDFF",
              border: "1px solid #090E82",
              borderRadius: "8px",
              textAlign: "center",
            }}
            direction="row"
            alignItems={"center"}
          >
            <NotificationsActiveIcon
              sx={{ width: "28px", height: "20px", color: "#090E82" }}
            />
            <Typography
              sx={{
                color: "#090E82",
                fontWeight: 500,
                fontSize: "0.875rem",
                textAlign: "center",
                padding: "6px",
              }}
            >
              02
            </Typography>
          </Stack>
          <PrimaryButton
            buttonText="Manage event"
            type={"submit"}
            variant="contained"
            sx={{ maxWidth: "150px", width: "100%" }}
            onClick={() => router.push("/single-event")}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default EventListingBox;
