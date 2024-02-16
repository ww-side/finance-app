import { useEffect, useState } from "react";
import SocketApi from "@/api/socket-api.ts";
import { QuoteType } from "@/types/quote.ts";

export const useSocketQuotes = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    SocketApi.createConnection();
    setIsLoading(true);

    SocketApi.getQuotes((res) => {
      setQuotes(res);
      setIsLoading(false);
    });

    return () => {
      SocketApi.socket?.disconnect();
    };
  }, []);

  return { quotes, isLoading };
};
