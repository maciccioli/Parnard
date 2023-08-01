import React from "react";
import {
  Grid,
  darken,
  Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "5rem 0px !important",
    overflow: "visible !important",
    height: 'calc(100vh - 60px)',
    background:
      "url(./assets/images/portada.jpg) center center/cover no-repeat",
    "& h1, h2, h3, h4, h5, h6": {
      color: "#fff",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "100px 0 !important",
      textAlign: "center",
      "& .list": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
  title: {
    textShadow: "0 4px 4px rgba(0, 0, 0, 0.22)",
  },
  whiteButton: {
    background: "#fff !important",
    "&:hover": {
      background: `${darken("#ffffff", 0.1)} !important`,
    },
  },
  product: {
    position: "relative",
    top: "100px",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
      boxShadow:
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    },
    [theme.breakpoints.down("md")]: {
      left: 0,
      top: 0,
    },
  },
  productLink: {
    position: "absolute",
    top: "-100px",
    left: "-30px",
    textAlign: "center",
    display: "block",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    background: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "37px 20px",
    boxSizing: "border-box",
    overflow: "hidden",
    boxShadow: "0 14px 32px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",

    "&:hover": { boxShadow: "0 19px 32px rgba(0, 0, 0, 0.4)" },

    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
}));

const Intro1 = () => {
  const classes = useStyles();

  return (
    <section className={clsx("section text-white")} id="intro1" style={{ paddingBottom: '0px', paddingTop: '60px'}}>
      <div className={classes.introWrapper}>
        <div className="container">
          <Grid container spacing={3} justify="center">
            <Grid item md={6}>
              <h1 className={clsx("mb-6 text-48", classes.title)}>
                Soluciones integrales adaptadas a sus necesidades
              </h1>
              <div className="mb-10 list" >
                <Typography sx={{ fontSize: '20px', color: '#FFFFFF !important' }}>
                  Con nuestra inserción en el mercado logramos ofrecer componentes, sistemas, productos e ingeniería para el drenaje de sus procesos industriales. 
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Intro1;
