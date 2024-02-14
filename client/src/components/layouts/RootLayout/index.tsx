import { type FC, type ReactNode } from "react";
import { Box } from "@mui/material";
import st from "./style.module.css";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <Box className={st.rootLayout}>{children}</Box>;
};

export default RootLayout;