import { io, Socket } from "socket.io-client";
// import { getSensitiveData } from "../contexts/storage";

let socket: Socket | null = null;

export const connectSocket = async (): Promise<Socket> => {
  if (!socket) {
    const SOCKET_SERVER_URL = process.env
      .EXPO_PUBLIC_SOCKET_SERVER_URL as string;

    if (!SOCKET_SERVER_URL) {
      throw new Error("SOCKET_SERVER_URL not set in .env");
    }

    // const token = await getSensitiveData("authToken");

    // if (!token) {
    //   console.warn("Authentication token not found.");
    //   return Promise.reject("Authentication token not found.");
    // }

    socket = io(SOCKET_SERVER_URL, {
      // auth: { token: token },
    });

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("disconnect", (reason) => {
      console.log("Disconnected from Socket.IO server:", reason);
    });

    socket.on("connect_error", (error) => {
      console.log("Error connecting to Socket.IO:", error);
    });
  }

  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = (): Socket | null => socket;
