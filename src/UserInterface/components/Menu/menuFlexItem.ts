import { menuFlexItemCN } from "../../styles/menu.css";

export const menuFlexItem = () => {
    const menuFlexItem = document.createElement('div');
    menuFlexItem.className = menuFlexItemCN;

    return menuFlexItem;
}