import { v4 as uuid } from "uuid";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "@/components/ui/Link";
import st from "./styles.module.css";

const Header = () => {
  const book = [
    { id: uuid(), route: "/", label: "Home" },
    { id: uuid(), route: "/watching-list", label: "Watching list" },
  ];

  return (
    <AppBar position="static">
      <Toolbar className={st.headerToolbar} variant="dense" color="primary">
        <Typography variant="h6" color="white" component="div">
          Finance App
        </Typography>
        <Box className={st.navigation}>
          {book.map((item) => (
            <Typography key={item.id} variant="body1">
              <Link path={item.route} color="white">
                {item.label}
              </Link>
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
