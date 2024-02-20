import { type FC, type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";
import Header from "@/components/common/Header";
import st from "./style.module.css";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Box className={st.rootLayout}>{children}</Box>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default RootLayout;
