import {makeStyles, Typography} from "@material-ui/core";
import clsx from "clsx";
import {ReactChild} from "react";

const useStyles = makeStyles((theme) => ({
  centeredContainer: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
    width: "100%",
  },
  linearGradient: {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
}));

export default function HeaderText({
  children,
  white,
  small,
  subtitle,
}: {
  children: ReactChild;
  white?: boolean;
  small?: boolean;
  subtitle?: ReactChild;
}) {
  const classes = useStyles();
  return (
    <div className={classes.centeredContainer}>
      <Typography
        variant={small ? "h2" : "h1"}
        component="h1"
        className={clsx({ [classes.linearGradient]: !white })}
      >
        {children}
      </Typography>
      {subtitle ? (
        <Typography component="div" className={classes.subtitle}>
          {subtitle}
        </Typography>
      ) : null}
    </div>
  );
}
