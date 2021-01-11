import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  preloader: {
    color: "green",
  },
});

const Loading = () => {
  const classes = useStyles();
  return <CircularProgress color="secondary" className={classes.preloader} />;
};
export default Loading;
