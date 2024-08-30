import { squareContainerCN } from "../../styles/game.css";

export const gameSquareContainer = (width: number, height: number) => {
    const gameSquareContainer = document.createElement('div');

    gameSquareContainer.style.setProperty('--columns', width.toString());
    gameSquareContainer.style.setProperty('--rows', height.toString());

    gameSquareContainer.className = squareContainerCN;

    return gameSquareContainer;
}