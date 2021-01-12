import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "../style/materializeUseStyle/useStyles";

const Loading = () => {
  const classes = useStyles();
  return <CircularProgress color="secondary" className={classes.preloader} />;
};
export default Loading;
