import { io, Socket } from "socket.io-client";

const backendURL = import.meta.env.VITE_BACKEND_URL;
export const socket: Socket = io(backendURL, {
  transports: ["websocket"], // force websocket only (faster, avoids polling)
});
