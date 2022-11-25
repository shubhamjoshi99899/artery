import React from "react";
import BottomNavigationComponent from "./bottom-navigation";
import ResponsiveAppBar from "./header";

interface Props {
  props: any;
}
const Layout = (props: any) => {
  return (
    <div>
      <ResponsiveAppBar />
      {props.children}
      <BottomNavigationComponent />
    </div>
  );
};

export default Layout;
