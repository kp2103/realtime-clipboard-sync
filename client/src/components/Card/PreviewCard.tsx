import "./previewCard.style.css";
import "./card.type";
import Button from "../Button/Button";
import {
  DeleteIcon,
  Code2Icon,
  TextInitialIcon,
  LucideImage,
  LucideCopy,
} from "lucide-react";
import type { CardProps } from "./card.type";

export default function Card({ contentType, clipboardData }: CardProps) {
  return (
    <div className="preview-card-container">
      <section className="preview-card__header">
        <p className="preview-card__header-heading">Current Clipboard</p>
        <p className="live">Live</p>
      </section>
      <section>
        <div className="preview-card__avatar">
          {contentType === "Code" ? (
            <Code2Icon size={"3rem"} />
          ) : contentType === "Text" ? (
            <TextInitialIcon />
          ) : (
            <LucideImage />
          )}
        </div>
      </section>
      <section className="preview-card__content">
        <p className="preview-card__content-heading">
          {clipboardData ? clipboardData.data : "Title"}
        </p>
        <div className="preview-card__content-datetime">
          <p>
            {clipboardData && clipboardData.date
              ? clipboardData.date.toLocaleDateString()
              : "Date"}
          </p>
          <p>
            {clipboardData && clipboardData.date
              ? clipboardData.date.toLocaleTimeString()
              : "Time"}
          </p>
        </div>
      </section>

      <section className="preview-card__actions">
        <Button btnType="Primary" leftIcon={<LucideCopy />} title="Copy" />
        <Button btnType="Secondary" leftIcon={<DeleteIcon />} title="Clear" />
      </section>
    </div>
  );
}
