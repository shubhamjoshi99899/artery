import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper } from "@mui/material";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Link from "next/link";
import { useEffect, useState } from "react";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";

const BottomNavigationComponent = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const [userUUid, setUserUUid] = useState<any>("");

  const BottomNavigationData = [
    {
      link: "/",
      title: "Ongoing",
      activeIcon: (
        <EventIcon sx={{ color: "#090E82", height: "30px", width: "30px" }} />
      ),
      inactiveIcon: (
        <EventIcon sx={{ color: "#7D7D7D", height: "30px", width: "30px" }} />
      ),
    },
    {
      link: "/my-books",
      title: "Create",
      icon: "MenuBookIcon",
      activeIcon: <AddCircleOutlineIcon sx={{ color: "#090E82" }} />,
      inactiveIcon: (
        <AddCircleOutlineIcon
          sx={{ color: "#7D7D7D", height: "30px", width: "30px" }}
        />
      ),
    },
    {
      link: `/profile/${userUUid}`,
      route: "profile",
      title: "Existing",
      activeIcon: (
        <DomainVerificationIcon
          sx={{ color: "#090E82", height: "30px", width: "30px" }}
        />
      ),
      inactiveIcon: (
        <DomainVerificationIcon
          sx={{ color: "#7D7D7D", height: "30px", width: "30px" }}
        />
      ),
    },
  ];

  useEffect(() => {
    setUserUUid(localStorage.getItem("user_uuid"));
  }, []);

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          margin: "0 auto",
          zIndex: 2,
          maxWidth: "sm",
          borderRadius: "20px 20px 0px 0px",
          boxShadow: "0px 2px 15px 2px rgba(9, 14, 130, 0.3)",
        }}
      >
        <BottomNavigation
          sx={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-evenly",
            borderRadius: "20px 20px 0px 0px",
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {BottomNavigationData.map((data: any, index: number) => (
            <Link passHref key={index} href={data?.link}>
              <BottomNavigationAction
                label={data.title}
                icon={
                  router.pathname.includes(data.link) ||
                  router?.pathname?.includes(data.route)
                    ? data.activeIcon
                    : data.inactiveIcon
                }
                sx={{
                  ".MuiBottomNavigationAction-label": {
                    opacity: "1",
                    fontSize: "0.75rem",
                    color:
                      router.pathname.includes(data.link) ||
                      router?.pathname?.includes(data.route)
                        ? "#090E82"
                        : "#7D7D7D",
                    fontWeight: 600,
                  },
                }}
              ></BottomNavigationAction>
            </Link>
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomNavigationComponent;
