export type OnChipHover = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  value: null | "red" | "yellow"
) => void;

export interface Chip {
  value: null | "red" | "yellow";
  position: {
    x: number;
    y: number;
  };
  index: number;
}

export type CurrentPlayer = "red" | "yellow";
export type OnChipClick = (chip: Chip, currentPlayer: CurrentPlayer) => void;
