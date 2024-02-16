import { type FC } from "react";
import { v4 as uuid } from "uuid";
import { Box, Typography } from "@mui/material";
import QuoteItem from "./QuoteItem";
import type { QuoteType } from "@/types/quote.ts";
import st from "./styles.module.css";

const QuotesList: FC<{ quotes: QuoteType[] }> = ({ quotes }) => {
  return (
    <Box className={st.listWrapper}>
      {quotes.length === 0 ? (
        <Typography variant="h6">
          We couldn't find any match for your result.
        </Typography>
      ) : (
        quotes.map((quote) => <QuoteItem key={uuid()} quote={quote} />)
      )}
    </Box>
  );
};

export default QuotesList;
