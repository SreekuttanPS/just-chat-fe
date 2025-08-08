import { io, Socket } from "socket.io-client";

const URL = "http://localhost:3000"; // your backend base URL
export const socket: Socket = io(URL, {
  transports: ["websocket"], // force websocket only (faster, avoids polling)
});
