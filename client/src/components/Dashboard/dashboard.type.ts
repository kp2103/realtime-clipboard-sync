export type ClipboardData = {
  data: string;
  date?: Date;
};

export type ReceivedClipboardDataState = ClipboardData[];

export type ReceivedClipboardDateAction =
  | { type: "insert"; payload: ClipboardData }
  | { type: "delete"; payload: string }; // as id
