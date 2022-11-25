import {
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import PrimaryButton from "../components/primaryButton";
const details = [
  {
    icon: <LanguageIcon sx={{ color: "#090E82" }} />,
    title: "Live Count",
    count: 500,
  },
  {
    icon: <DescriptionIcon sx={{ color: "#090E82" }} />,
    title: "Negative List",
    count: 500,
  },
  {
    icon: <PanToolAltIcon sx={{ color: "#090E82" }} />,
    title: "Manual Count (Total)",
    count: 500,
  },
];

const SingleEvent = () => {
  return (
    <Container sx={{ pb: 8 }}>
      <Box sx={{ pb: 8 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.625rem",
            lineHeight: "24px",
            letterSpacing: "0.1px",
            color: "#020655",
          }}
          mb={3}
        >
          Ongoing Events
        </Typography>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: "20px",
              letterSpacing: "0.5px",
              color: "#7D7D7D",
              mb: 2,
            }}
          >
            Mon, 24th Jan’22
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: "20px",
              letterSpacing: "0.5px",
              color: "#7D7D7D",
              mb: 2,
              textAlign: "right",
            }}
          >
            STARTED: 19:00
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.375rem",
              lineHeight: "28px",
              letterSpacing: "0.5px",
              color: "#090E82",
              mb: 2,
            }}
          >
            Event Header
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.375rem",
              lineHeight: "28px",
              letterSpacing: "0.5px",
              color: "#000",
              mb: 2,
              textAlign: "right",
            }}
          >
            H:5
          </Typography>
        </Stack>
        <Stack mb={2} direction="row" justifyContent="space-between">
          <Chip
            sx={{
              background: "#090E82",
              px: 1,
              color: "#fff",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: "14px",
            }}
            label="Statistics"
          />
          <Chip
            sx={{
              background: "#ECEDFF",
              px: 1,
              color: "#090E82",
              borderRadius: "8px",
              border: "1px solid #090E82",
              fontWeight: 500,
              fontSize: "14px",
            }}
            label="Event Details"
            variant="outlined"
          />
          <Chip
            sx={{
              background: "#ECEDFF",
              px: 1,
              color: "#090E82",
              border: "1px solid #090E82",
              borderRadius: "8px",
              fontWeight: 500,
              fontSize: "14px",
            }}
            label="Host Details"
            variant="outlined"
          />
        </Stack>
        <Divider color="#C6C6C6" sx={{ mb: 2 }} />
        <Stack
          sx={{
            boxShadow: "0px 0px 20px 2px rgba(9, 14, 130, 0.05)",
            borderRadius: "12px",
            p: 5,
            mb: 2,
          }}
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "20px",
              color: "#121212",
            }}
          >
            Final Count
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "44px",
              color: "#090E82",
            }}
          >
            500
          </Typography>
        </Stack>
        {details.map((detail: any, index: number) => (
          <Stack
            key={index}
            sx={{
              boxShadow: "0px 0px 20px 2px rgba(9, 14, 130, 0.05)",
              borderRadius: "12px",
              p: 3,
              mb: 3,
            }}
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              {detail?.icon}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "20px",
                  color: "#121212",
                }}
              >
                {detail?.title}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "30px",
                lineHeight: "44px",
                color: "#090E82",
              }}
            >
              {detail?.count}
            </Typography>
          </Stack>
        ))}
        <Chip
          sx={{
            background: "#ECEDFF",
            px: 1,
            color: "#090E82",
            borderRadius: "8px",
            border: "1px solid #090E82",
            fontWeight: 600,
            fontSize: "14px",
            mb: 3,
          }}
          label="View Report"
          variant="outlined"
        />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: "20px",
            letterSpacing: "0.1px",
            color: "#000",
            mb: 2,
          }}
        >
          MINIMUM COMMITMENT:5
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: "20px",
            letterSpacing: "0.1px",
            color: "#000",
            mb: 2,
          }}
        >
          ESTIMATE TURNOUT:5
        </Typography>
        <PrimaryButton
          sx={{ width: "100%", height: "48px" }}
          buttonText="End Now"
          type="submit"
          variant="contained"
        />
      </Box>
    </Container>
  );
};

export default SingleEvent;
