import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
  <Link href={href} as={hrefAs} prefetch>
    <a className={className}>{children}</a>
  </Link>
);

const AppNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Button component={ButtonLink} href={"/users/123"}>
        Dynamic Routes
      </Button>
      <Button component={ButtonLink} href={"/accounts"}>
        Users (Static Props)
      </Button>
      <Button component={ButtonLink} href={"/issues"}>
        DTS Issues (Server Side Props)
      </Button>
    </BottomNavigation>
  );
};

export default AppNav;
