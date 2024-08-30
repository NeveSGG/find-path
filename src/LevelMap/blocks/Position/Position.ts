export class Position {
    x: number;
    y: number;

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    isNeighbor(position: Position): boolean {
        return (position.x == this.x && (Math.abs(position.y - this.y) == 1))
            || (position.y == this.y && (Math.abs(position.x - this.x) == 1));
    }

    isEqual (position: Position): boolean {
        return this.x === position.x && this.y === position.y;
    }

    update (position: Position): void {
        this.x = position.x;
        this.y = position.y;
    }
}