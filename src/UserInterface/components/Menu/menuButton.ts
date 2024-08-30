import { menuButtonCN } from "../../styles/menu.css";

export const menuButton = (text: string, onClick: () => void) => {
    const menuButton = document.createElement('button');
    menuButton.className = menuButtonCN;
    menuButton.textContent = text;
    menuButton.onclick = onClick;

    return menuButton;
}