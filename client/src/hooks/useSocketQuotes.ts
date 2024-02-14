import { useEffect, useState } from "react";
import SocketApi from "@/api/socket-api.ts";
import { QuoteType } from "@/types/quote.ts";

export const useSocketQuotes = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);

  useEffect(() => {
    SocketApi.createConnection();
    SocketApi.getQuotes((res) => {
      setQuotes(res);
    });

    return () => {
      SocketApi.socket?.disconnect();
    };
  }, []);

  return { quotes };
};
