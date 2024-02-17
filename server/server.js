"use strict";
const express = require("express");
const http = require("http");
const io = require("socket.io");
const cors = require("cors");

let FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
  "AAPL", // Apple
  "GOOGL", // Alphabet
  "MSFT", // Microsoft
  "AMZN", // Amazon
  "FB", // Facebook
  "TSLA", // Tesla
];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
}

function getQuotes(socket) {
  const previousQuotes = socket.previousQuotes || {};

  const quotes = tickers.map((ticker) => {
    const previousPrice = previousQuotes[ticker]
      ? previousQuotes[ticker].price
      : null;
    const price = randomValue(100, 300, 2);
    const change =
      previousPrice !== null
        ? (price - previousPrice).toFixed(2)
        : randomValue(0, 200, 2);
    const changePercent =
      previousPrice !== null
        ? ((change / previousPrice) * 100).toFixed(2)
        : randomValue(0, 1, 2);

    const quote = {
      ticker,
      exchange: "NASDAQ",
      price,
      change,
      change_percent: changePercent,
      dividend: randomValue(0, 1, 2),
      yield: randomValue(0, 2, 2),
      last_trade_time: utcDate(),
    };

    previousQuotes[ticker] = quote;
    return quote;
  });

  socket.emit("ticker", quotes);
  socket.previousQuotes = previousQuotes;
}

function trackTickers(socket) {
  // run the first time immediately
  getQuotes(socket);

  // every N seconds
  const timerCallback = function () {
    getQuotes(socket);
  };

  const runTimer = () => {
    timerCallback();
    socket.timer = setInterval(timerCallback, FETCH_INTERVAL);
  };

  runTimer();

  socket.on("disconnect", function () {
    clearInterval(socket.timer);
  });

  socket.on("changeInterval", (newInterval) => {
    FETCH_INTERVAL = newInterval;
    clearInterval(socket.timer);
    runTimer();
  });
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

socketServer.on("connection", (socket) => {
  socket.on("start", () => {
    trackTickers(socket);
  });

  socket.on("changeInterval", (newInterval) => {
    socketServer.emit("intervalChanged", newInterval);
  });
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
