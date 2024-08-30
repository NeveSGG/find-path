import { menuHeadingCN } from "../../styles/menu.css";

export const menuTitle = (text: string) => {
    const menuTitle = document.createElement('h1');
    menuTitle.className = menuHeadingCN;
    menuTitle.textContent = text;

    return menuTitle;
}