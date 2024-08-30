import { containerHeaderCN } from '../../styles/game.css';

export const gameContainerHeader = () => {
    const gameContainerHeader = document.createElement('div');
    gameContainerHeader.className = containerHeaderCN;

    return gameContainerHeader;
}