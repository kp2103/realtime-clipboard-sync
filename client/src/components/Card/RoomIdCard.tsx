import "./roomId.style.css";
import "./card.type";
import Button from "../Button/Button";
import { LucideCopy } from "lucide-react";
import type { RoomIdProps } from "./roomId.type";

export default function Card({ roomId }: RoomIdProps) {
  return (
    <div className="room-id-card-container">
      <section className="room-id-card__header">
        <p className="room-id-card__header-heading">Quick Share</p>
      </section>

      <section className="room-id-card__id">
        <p>Room id:</p>
        <div>
          <p>{roomId}</p>
          <Button btnType="Primary" leftIcon={<LucideCopy />} />
        </div>
      </section>
    </div>
  );
}
