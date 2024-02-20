import { Box, Typography } from "@mui/material";
import QuotesList from "@/components/common/QuotesList";
import { useSocketQuotes } from "@/hooks/useSocketQuotes.ts";
import { watchingQuotesStore } from "@/store/watchingQuotes.ts";
import { Blocks } from "react-loader-spinner";
import ChangeInterval from "@/components/common/ChangeInterval";
import Divider from "@mui/material/Divider";
import st from "./styles.module.css";

const WatchingListPage = () => {
  const { quotes, isLoading } = useSocketQuotes();
  const watchingList = watchingQuotesStore.watchingList;

  const filteredQuotes = quotes.filter((quote) =>
    watchingList.some((item) => item.ticker === quote.ticker)
  );

  return (
    <Box data-testid="watching-list-page">
      <Typography variant="h5">Your watching list</Typography>
      <Divider className={st.divider} />
      <ChangeInterval />
      {isLoading ? (
        <>
          <Typography variant="body2">Wait a little while</Typography>
          <Blocks
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            visible={true}
          />
        </>
      ) : (
        <QuotesList quotes={filteredQuotes} />
      )}
    </Box>
  );
};

export default WatchingListPage;
