import { appStyle } from "./styles/app.css";
import { bodyStyle } from "./styles/body.css";

import { LevelMap } from "../LevelMap/LevelMap";

import { menu } from "./components/Menu/menu";
import { menuButton } from "./components/Menu/menuButton";
import { menuTitle } from "./components/Menu/menuTitle";
import { menuFlexContainer } from './components/Menu/menuFlexContainer';
import { menuFlexItem } from './components/Menu/menuFlexItem';
import { menuItemText } from './components/Menu/menuItemText';
import { gameContainer } from "./components/Game/gameContainer";
import { gameContainerHeader } from "./components/Game/gameContainerHeader";
import { gameSquareContainer } from './components/Game/gameSquareContainer';
import { gameSquare } from "./components/Game/gameSquare";
import { gameHeaderText } from "./components/Game/gameHeaderText";
import { addLeadingZero } from "../utils";

export interface ILevelSelectionDetail {
    id: number;
}

const gotomenuEvent = new CustomEvent('gotomenu');
const selectLevelEvent = new CustomEvent('levelSelection');

export namespace UserInterface {
    const app = document.getElementById('app') as HTMLDivElement;
    const routines: Array<() => void> = [];

    document.body.classList.add(bodyStyle);
    app.className = appStyle

    export function drawMenu() {
        clearInterface();

        const menuElement = menu();
        const menuTitleElement = menuTitle('Игра "Соедини 2 кубика"');
        const menuButtonElement = menuButton("Выбрать уровень", () => {document.dispatchEvent(selectLevelEvent)});

        menuElement.appendChild(menuTitleElement);
        menuElement.appendChild(menuButtonElement);

        app.appendChild(menuElement);
    }

    export function drawLevelSelection(levels: Array<LevelMap>) {
        clearInterface();

        const menuElement = menu();
        const menuTitleElement = menuTitle('Выбери уровень');
        const menuFlexContainerElement = menuFlexContainer();
        const menuButtonElement = menuButton("Назад", () => {document.dispatchEvent(gotomenuEvent)});

        levels.forEach((level) => {
            const menuFlexItemElement = menuFlexItem();
            menuFlexItemElement.appendChild(menuItemText(`${level.width} x ${level.height}`));
            menuFlexItemElement.appendChild(menuItemText(`${[...level.uniqueColors].length} цветов`));

            const onClickCallback = () => {
                const playLevelEvent = new CustomEvent<ILevelSelectionDetail>('playLevel', {
                    detail: {
                        id: level.id
                    }
                });

                document.dispatchEvent(playLevelEvent);
            }

            menuFlexItemElement.addEventListener('click', onClickCallback);
            routines.push(() => {
                menuFlexItemElement.removeEventListener('click', onClickCallback);
            })

            menuFlexContainerElement.appendChild(menuFlexItemElement);
        })

        menuElement.appendChild(menuTitleElement);
        menuElement.appendChild(menuFlexContainerElement);
        menuElement.appendChild(menuButtonElement);

        app.appendChild(menuElement);
    }

    export function drawLevel(level: LevelMap) {
        clearInterface();

        const containerElement = gameContainer();
        const containerHeaderElement = gameContainerHeader();

        const scoreElement = gameHeaderText('Счёт: 0');
        const levelElement = gameHeaderText(`Уровень ${level.id + 1}`);
        const timerElement = gameHeaderText(`00:00`);

        let timer = 0;

        containerHeaderElement.appendChild(scoreElement);
        containerHeaderElement.appendChild(levelElement);
        containerHeaderElement.appendChild(timerElement);

        containerElement.appendChild(containerHeaderElement);

        const squareContainer = gameSquareContainer(level.width, level.height);

        const interval = setInterval(() => {
            timer += 1;

            const minutes = addLeadingZero(Math.floor(timer / 60));
            const seconds = addLeadingZero(timer % 60);

            timerElement.textContent = `${minutes}:${seconds}`
        }, 1000);

        for (let i = level.field.length - 1; i >= 0; i--) {
            for (let j = 0; j < level.field[i].length; j++) {
                const thing = level.field[i][j];

                const newSquare = 
                    thing
                        ? gameSquare(()=>{
                            level.tryToSelect(j, i).then((status) => {
                                switch(status) {
                                    case('connected'): {
                                        scoreElement.textContent = `Счёт: ${Math.floor(level.connectedThings / 2)}`;
    
                                        break;
                                    }
                                    case('notConnected'): {
                                        alert('Нельзя соединить эти кубики!');
                                        break;
                                    }
                                    case('win'): {
                                        scoreElement.textContent = `Счёт: ${Math.floor(level.connectedThings / 2)}`;
                                        clearInterval(interval);
    
                                        alert('Победа!');
                                        const playLevelEvent = new CustomEvent<ILevelSelectionDetail>('playLevel', {
                                            detail: {
                                                id: level.id + 1
                                            }
                                        });
                        
                                        const menuButtonNextLevelElement = menuButton("Следующий уровень", () => {document.dispatchEvent(playLevelEvent)});
                                        const menuButtonExitElement = menuButton("В меню", () => {document.dispatchEvent(gotomenuEvent)});
                                        
                                        menuButtonNextLevelElement.style.marginTop = "20px";
    
                                        containerElement.appendChild(menuButtonNextLevelElement);
                                        containerElement.appendChild(menuButtonExitElement);
    
                                        break;
                                    }
                                    default: {
    
                                    }
                                }
                            });
                        }, thing.color)
                        : gameSquare(()=>{});

                if (thing) {
                    thing.bindElement(newSquare)
                }
                
                squareContainer.appendChild(newSquare.element)
            }
        }

        containerElement.appendChild(squareContainer);

        app.appendChild(containerElement);
    }

    export function clearInterface() {
        app.replaceChildren();

        while (routines.length) {
            const currentRoutine = routines.pop()!;

            currentRoutine();
        }
    }
}