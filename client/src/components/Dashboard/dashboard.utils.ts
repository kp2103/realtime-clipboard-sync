// init with socket
import { io, Socket } from "socket.io-client";
import type {
  ClipboardData,
  ReceivedClipboardDateAction,
} from "./dashboard.type";

let socket: null | Socket = null;

type SocketResponse = { status: "ok" | "fail"; message: unknown };

const minRoomId = 123456;
const maxRoomId = 999999;

export function generateRandomRoomid() {
  console.log("random generation is called");
  return Math.floor(Math.random() * (maxRoomId - minRoomId + 1)) + minRoomId;
}

export function initSocketConnection() {
  if (socket) return;

  console.log("initialized function called");
  socket = io("http://localhost:4000/", {
    autoConnect: false,
  });
  socket.connect();
}

export function listenForReceivedData(
  dispatchAction: React.Dispatch<ReceivedClipboardDateAction>,
) {
  if (!socket) throw new Error("Socket is not inittialized");
  socket.off("receive-data");
  socket.on("receive-data", (copiedData: string) => {
    console.log("Received the Copied Data : ", copiedData);

    //need to update the state as well
    const clipboardData: ClipboardData = {
      data: copiedData,
      date: new Date(),
    };
    dispatchAction({ type: "insert", payload: clipboardData });
  });
}

export function joinRoom(roomId: number) {
  console.log(socket);
  if (!socket) {
    throw new Error("Socket is not initlialized");
  }

  socket.emit("join-room", roomId, (response: SocketResponse) => {
    if (response.status === "ok") {
      console.log("join room is called successfully");
      alert("user join the room");
    } else {
      console.log("Join room called with fail");
      throw new Error("Fail to join the room");
    }
  });
}

async function handleClipboardChange() {
  console.log("copy event called");
  try {
    const copiedText = await navigator.clipboard.readText();
    console.log(copiedText);
    //send to websocket
    if (!socket) throw new Error("Socket is not initlialized");

    socket.emit("send-data", copiedText);
  } catch (error) {
    console.log("Error in the copy handler event:", error);
  }
}

// export function for listen the is there any thing copy or not
export function attachClipboardChangeEventListener() {
  navigator.permissions.query({
    name: "clipboard-read" as PermissionName,
  });
  window.addEventListener("copy", handleClipboardChange);
}

export function removedClipboardChangeEventLister() {
  window.removeEventListener("copy", handleClipboardChange);
}

// if we got the any thing copy so just append into the history
