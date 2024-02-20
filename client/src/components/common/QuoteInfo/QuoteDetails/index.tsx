import { type FC } from "react";
import { v4 as uuid } from "uuid";
import { Box, Chip, Typography } from "@mui/material";
import type { QuoteDetailsType } from "@/types/quote.ts";
import st from "./styles.module.css";

const QuoteDetailsTable: FC<{
  options: QuoteDetailsType[];
}> = ({ options }) => {
  return (
    <Box className={st.table}>
      <Chip className={st.detailsChip} label="Details" />
      {options.map((item) => (
        <Box key={uuid()} className={st.tableRow}>
          <Typography variant="body2">{item.title}</Typography>
          <Typography variant="body2">{item.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default QuoteDetailsTable;
