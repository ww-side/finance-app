import { useState } from "react";
import toast from "react-hot-toast";
import { Box, Button, TextField, Typography } from "@mui/material";
import socketApi from "@/api/socket-api.ts";
import st from "./styles.module.css";

const ChangeInterval = () => {
  const [newInterval, setNewInterval] = useState("");

  const handleIntervalChange = () => {
    if (newInterval.trim() === "" || Number(newInterval) < 0) {
      return toast.error("Enter valid seconds");
    }

    socketApi.changeInterval(Number(newInterval) * 1000);
  };

  return (
    <Box>
      <Typography className={st.changeIntervalTitle} variant="h6">
        Change the time interval in seconds
      </Typography>
      <Box className={st.changeInterval}>
        <TextField
          data-testid="change-interval-input"
          type="number"
          label="Enter new interval"
          variant="outlined"
          size="small"
          value={newInterval}
          onChange={(e) => setNewInterval(e.target.value)}
          inputProps={{ min: 0 }}
          autoComplete="off"
        />
        <Button
          data-testid="change-interval-button"
          variant="contained"
          size="small"
          onClick={handleIntervalChange}
        >
          Change
        </Button>
      </Box>
    </Box>
  );
};

export default ChangeInterval;
