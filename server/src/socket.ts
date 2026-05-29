//* Handle all socket related work here
import { sign } from "node:crypto";
import { Server as HTTPServer } from "node:http";
import { Server } from "socket.io";
//create an server

type CallBack = (response: {
  status: "ok" | "fail";
  message: unknown;
}) => unknown;

export function initSocket(httpServer: HTTPServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  //call the socket file here
  io.on("connection", (socket) => {
    console.log(`New Socket is connected ${socket.id}`);

    //* listener for join room
    socket.on("join-room", (roomId: number, callback: CallBack) => {
      try {
        socket.join(roomId.toString());

        callback({
          status: "ok",
          message: "User joined in the room",
        });

        //* listener for send-date
        socket.on("send-data", (data: unknown) => {
          socket.to(roomId.toString()).emit("receive-data", data);
        });
      } catch (error) {
        callback({
          status: "fail",
          message: "Fail to join in the room",
        });
      }
      console.log(`${socket.id} is joined in the room:${roomId}`);
    });

    //* listener for disconnection
    socket.on("disconnect", () => {
      console.log(`Socket id:${socket.id} is disconnected`);
    });
  });
}
