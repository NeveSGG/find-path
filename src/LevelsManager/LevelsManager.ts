import { IRawThing } from "../LevelMap/blocks/Thing/interface";
import { LevelMap } from "../LevelMap/LevelMap";
import levelsData from "./levels.json";

class LevelsManager {
  levels: { [id: number]: LevelMap } = {};

  importLevels() {
    levelsData.forEach((levelData, ind) => {
      this.createLevel(ind, levelData);
    });
  }

  createLevel(id: number, levelData: IRawThing[]) {
    this.levels[id] = new LevelMap(id, levelData);
  }

  resetLevel(id: number) {
    const levelData: IRawThing[] | undefined = levelsData[id];

    if (levelData) {
      this.createLevel(id, levelData);
    }
  }
}

export const levelsManager = new LevelsManager();
