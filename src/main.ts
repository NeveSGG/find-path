import { levelsManager } from "./LevelsManager/LevelsManager";
import { globalState } from "./GlobalState/GlobalState";

levelsManager.importLevels();
globalState.setMenuStage();
