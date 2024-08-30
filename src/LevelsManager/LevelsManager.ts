import { LevelMap } from "../LevelMap/LevelMap";

class LevelsManager {
    levels: { [id: number]: LevelMap } = {};

    createLevel(id: number) {
        this.levels[id] = new LevelMap(id, [
            {'x':4,'y':4,color:'#FFFF00'},
            {'x':4,'y':6,color:'#FFFF00'},
            {'x':2,'y':2,color:'#FF0000'},
            {'x':3,'y':2,color:'#00FF00'},
            {'x':2,'y':3,color:'#00FF00'},
            {'x':3,'y':3,color:'#0000FF'},
            {'x':6,'y':3,color:'#FFFF00'},
            {'x':2,'y':4,color:'#FF00FF'},
            {'x':3,'y':4,color:'#00FFFF'},
            {'x':5,'y':4,color:'#00FFFF'},
            {'x':6,'y':4,color:'#800080'},
            {'x':3,'y':5,color:'#FFFF00'},
            {'x':4,'y':5,color:'#FFA500'},
            {'x':5,'y':5,color:'#800080'},
            {'x':6,'y':5,color:'#FF0000'},
            {'x':3,'y':6,color:'#0000FF'},
            {'x':5,'y':6,color:'#FFA500'},
            {'x':6,'y':6,color:'#FF00FF'}
        ])
    }

    resetLevel(id: number) {
        this.levels[id] = new LevelMap(id, [
            {'x':4,'y':4,color:'#FFFF00'},
            {'x':4,'y':6,color:'#FFFF00'},
            {'x':2,'y':2,color:'#FF0000'},
            {'x':3,'y':2,color:'#00FF00'},
            {'x':2,'y':3,color:'#00FF00'},
            {'x':3,'y':3,color:'#0000FF'},
            {'x':6,'y':3,color:'#FFFF00'},
            {'x':2,'y':4,color:'#FF00FF'},
            {'x':3,'y':4,color:'#00FFFF'},
            {'x':5,'y':4,color:'#00FFFF'},
            {'x':6,'y':4,color:'#800080'},
            {'x':3,'y':5,color:'#FFFF00'},
            {'x':4,'y':5,color:'#FFA500'},
            {'x':5,'y':5,color:'#800080'},
            {'x':6,'y':5,color:'#FF0000'},
            {'x':3,'y':6,color:'#0000FF'},
            {'x':5,'y':6,color:'#FFA500'},
            {'x':6,'y':6,color:'#FF00FF'}
        ])
    }
}

export const levelsManager = new LevelsManager();