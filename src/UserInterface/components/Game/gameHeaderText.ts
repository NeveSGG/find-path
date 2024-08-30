import { gameHeaderTextCN } from "../../styles/game.css";

export const gameHeaderText = (text: string) => {
    const gameHeaderText = document.createElement('p');
    gameHeaderText.className = gameHeaderTextCN;
    gameHeaderText.textContent = text;

    return gameHeaderText;
}