import { type FC, type ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import cx from "classnames";
import st from "./styles.module.css";

const Link: FC<{
  path: string;
  children: ReactNode;
  color?: "black" | "white";
}> = ({ path, children, color = "black" }) => {
  const linkStyles = cx(st.link, {
    [st.linkBlack]: color === "black",
    [st.linkWhite]: color === "white",
  });

  return (
    <RouterLink className={linkStyles} to={path}>
      {children}
    </RouterLink>
  );
};

export default Link;
