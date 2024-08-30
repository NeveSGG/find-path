import { menuCN } from "../../styles/menu.css";

export const menu = () => {
    const menu = document.createElement('div');
    menu.className = menuCN;

    return menu;
}