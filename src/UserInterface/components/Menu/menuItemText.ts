import { menuFlexItemTextCN } from "../../styles/menu.css";

export const menuItemText = (text: string) => {
    const menuItemText = document.createElement('p');
    menuItemText.className = menuFlexItemTextCN;
    menuItemText.textContent = text;

    return menuItemText;
}