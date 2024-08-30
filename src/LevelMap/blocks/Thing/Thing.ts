import { Position } from "../Position/Position";
import { IRawPosition } from "../Position/interface";
import { IGameSquare } from "./interface";

export class Thing {
    position: Position;
    color: string;
    element: IGameSquare | null = null;

    constructor (position: IRawPosition, color: string) {
        this.position = new Position(position.x, position.y)
        this.color = color;
    }

    bindElement(el: IGameSquare) {
        this.element = el
    }

    select() {
        this.element?.select();
    }

    unselect() {
        this.element?.unselect();
    }

    disable() {
        this.element?.disable();
    }
}