export type Room = {
  id: string;
  name: string;
  pw?: string;
  mode: string;
  isLock: boolean;
  state: "WAITING" | "FULL" | "PLAYING";
};
