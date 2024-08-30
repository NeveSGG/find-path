import { levelsManager } from "./LevelsManager/LevelsManager";
import { globalState } from "./GlobalState/GlobalState";

levelsManager.createLevel(0);
levelsManager.createLevel(1);

globalState.setMenuStage();