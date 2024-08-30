export interface IRawThing {
    x: number;
    y: number;
    color: string;
}

export interface IGameSquare {
    element: HTMLDivElement;
    select(): void;
    unselect(): void;
    disable(): void;
}