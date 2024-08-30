import { menuFlexContainerCN } from "../../styles/menu.css";

export const menuFlexContainer = () => {
    const menuFlexContainer = document.createElement('div');
    menuFlexContainer.className = menuFlexContainerCN;

    return menuFlexContainer;
}