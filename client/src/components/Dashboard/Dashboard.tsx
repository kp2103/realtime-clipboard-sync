import Button from "../Button/Button";
import { LucideMerge } from "lucide-react";
import Card from "../Card/Card";
import "./dashboard.type";
import "./dashboard.style.css";
import PreviewCard from "../Card/PreviewCard";
import RoomidCard from "../Card/RoomIdCard";
import Input from "../Input/Input";
import {
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ChangeEvent,
} from "react";
import {
  attachClipboardChangeEventListener,
  generateRandomRoomid,
  initSocketConnection,
  joinRoom,
  listenForReceivedData,
  removedClipboardChangeEventLister,
} from "./dashboard.utils";
import type {
  ReceivedClipboardDataState,
  ReceivedClipboardDateAction,
} from "./dashboard.type";

function receivedClipboarddataReducer(
  prevState: ReceivedClipboardDataState,
  action: ReceivedClipboardDateAction,
) {
  switch (action.type) {
    case "insert": {
      return [action.payload, ...prevState];
    }
    case "delete": {
      return prevState;
    }
  }
}

const initReceivedClipboardDataState: ReceivedClipboardDataState = [];

export default function Dashboard() {
  // * States
  const [enterRoomId, setEnterRoomId] = useState("");
  const [receivedClipboardData, dispatchReceivedClipboardData] = useReducer(
    receivedClipboarddataReducer,
    initReceivedClipboardDataState,
  );

  // * Memo
  const memoInpytContainerStyle = useMemo(() => {
    return { flex: 1 };
  }, []);

  const memoRoomId = useMemo(() => {
    return generateRandomRoomid();
  }, []);

  //* useEffect
  useEffect(() => {
    initSocketConnection();
    joinRoom(memoRoomId);
    listenForReceivedData(dispatchReceivedClipboardData);
    attachClipboardChangeEventListener();

    return () => {
      removedClipboardChangeEventLister();
    };
  }, []);

  // * Event handler
  function handleRoomIdChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setEnterRoomId(value);
  }

  function handleJoinRoomClick() {
    const roomId = Number(enterRoomId);
    if (!enterRoomId && !roomId) alert("Please enter the room id");

    joinRoom(roomId);
  }

  const currentReceivedClipboardData = receivedClipboardData[0];

  return (
    <div className="dashboard">
      <section className="dashboard__header">
        <p className="dashboard__header-heading">Clipboard History</p>
        <div className="flex">
          <div className="circle green"></div>
          <p>Active & Synced</p>
        </div>
      </section>

      <section className="dashboard__main">
        <article className="dashboard__main-history">
          <Card
            contentType="Text"
            // clipboardData={currentReceivedClipboardData}
          />
          <Card
            contentType="Code"
            // clipboardData={currentReceivedClipboardData}
          />
          <Card
            contentType="Image"
            // clipboardData={currentReceivedClipboardData}
          />
          <Card
            contentType="Text"
            // clipboardData={currentReceivedClipboardData}
          />
          <Card
            contentType="Code"
            // clipboardData={currentReceivedClipboardData}
          />
          <Card
            contentType="Image"
            // clipboardData={currentReceivedClipboardData}
          />
          <Card
            contentType="Text"
            // clipboardData={currentReceivedClipboardData}
          />
          <Card
            contentType="Code"
            // clipboardData={currentReceivedClipboardData}
          />
          <Card
            contentType="Image"
            // clipboardData={currentReceivedClipboardData}
          />
        </article>

        <article className="dashboard__main-preview">
          <PreviewCard
            contentType="Code"
            clipboardData={currentReceivedClipboardData}
          />
          <RoomidCard roomId={memoRoomId} />
          <div className="dashboard__main-join-room">
            <Input
              value={enterRoomId}
              type="number"
              placeholder="Enter Other room id"
              onChange={handleRoomIdChange}
              containerStyle={memoInpytContainerStyle}
            />
            <Button
              title="Join"
              onClick={handleJoinRoomClick}
              leftIcon={<LucideMerge />}
            />
          </div>
        </article>
      </section>
    </div>
  );
}
