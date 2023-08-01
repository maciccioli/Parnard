import React from "react";
import {
  Link,
} from "@mui/material";
import { scrollTo } from "../../utils";

const ScrollTo = ({ to, onScroll, children }) => {
  let appContainer = document.querySelector(".scrollable-content");
  if (!appContainer) appContainer = window;

  return (
    <Link
      href={`#${to}`}
      onClick={(e) => {
        scrollTo(appContainer, to);
        if (onScroll) {
          e.preventDefault();
          onScroll(e);
        }
      }}
      sx={{
        ':hover': {
          backgroundColor: '#3f50b5 !important',
          color: '#FFFFFF !important'
        }
      }}
    >
      {children}
    </Link>
  );
};

export default ScrollTo;
