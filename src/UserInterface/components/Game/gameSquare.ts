import { IGameSquare } from "../../../LevelMap/blocks/Thing/interface";
import { _coloredCN, _disabledCN, _selectedCN, squareCN } from "../../styles/game.css";

export const gameSquare = (onclick: () => void, color?: string): IGameSquare => {
    const gameSquare = document.createElement('div');
    gameSquare.className = squareCN;
    gameSquare.onclick = onclick;

    if (color) {
        gameSquare.style.setProperty('--bg-color', color);
        gameSquare.classList.add(_coloredCN);
    } else {
        gameSquare.classList.add(_disabledCN)
    }

    return {
        element: gameSquare,
        select: () => {
            gameSquare.classList.add(_selectedCN)
        },
        unselect: () => {
            gameSquare.classList.remove(_selectedCN)
        },
        disable: () => {
            gameSquare.classList.add(_disabledCN)
        }
    };
}