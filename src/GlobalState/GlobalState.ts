import { levelsManager } from "../LevelsManager/LevelsManager";
import { ILevelSelectionDetail, UserInterface } from "../UserInterface/UserInterface";
import { ILeaderboardRecord } from "./interface";

class GlobalState {
    leaderboard: Array<ILeaderboardRecord> = [];
  
    constructor() {
        document.addEventListener('gotomenu', () => {
            this.setMenuStage();
        })
        
        document.addEventListener('levelSelection', () => {
            this.setLevelSelectionStage();
        })
        
        document.addEventListener('playLevel', (event) => {
            const realEvent = event as CustomEvent<ILevelSelectionDetail>;
            const levelId = realEvent.detail.id;

            this.setPlayingStage(levelId);
        })
    }

    setMenuStage() {
        UserInterface.drawMenu();
    }

    setLevelSelectionStage() {
        UserInterface.drawLevelSelection(Object.values(levelsManager.levels));
    }

    setPlayingStage(levelId: number) {
        const levelToPlay = levelsManager.levels[levelId];

        if (levelToPlay) {
            levelsManager.resetLevel(levelId)
            UserInterface.drawLevel(levelsManager.levels[levelId]);
        } else {
            this.setLevelSelectionStage();
        }
    }
}

export const globalState = new GlobalState;