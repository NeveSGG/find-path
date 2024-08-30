import { containerCN } from "../../styles/game.css";

export const gameContainer = () => {
    const gameContainer = document.createElement('div');
    gameContainer.className = containerCN;

    return gameContainer;
}