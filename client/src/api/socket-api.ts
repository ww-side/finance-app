import { io, Socket } from "socket.io-client";
import type { QuoteType } from "@/types/quote";

class SocketApi {
  static socket: null | Socket = null;

  static createConnection(): void {
    this.socket = io(import.meta.env.VITE_SERVER_URL);
  }

  static changeInterval(newInterval: number): void {
    this.socket?.emit("changeInterval", newInterval);
  }

  static getQuotes(callback: (quotes: QuoteType[]) => void): void {
    this.socket?.emit("start");

    this.socket?.on("ticker", (res: QuoteType[]) => {
      callback(res);
    });
  }
}

export default SocketApi;
