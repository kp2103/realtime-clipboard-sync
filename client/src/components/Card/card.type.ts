import type { ClipboardData } from "../Dashboard/dashboard.type";

type ContentType = "Image" | "Text" | "Code";

export interface CardProps {
  contentType: ContentType;
  clipboardData?: ClipboardData;
}
