import React, { createContext, useContext, useEffect, useState } from "react";
import {
  connectSocket,
  disconnectSocket,
  getSocket,
} from "../services/socketService";

type SocketContextType = {
  socket: ReturnType<typeof getSocket>;
};

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState(getSocket());

  useEffect(() => {
    const initSocket = async () => {
      const socketInstance = await connectSocket();
      setSocket(socketInstance);
    };

    initSocket();

    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used inside SocketProvider");
  }
  return context;
};
