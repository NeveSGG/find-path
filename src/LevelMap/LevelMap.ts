import { Position } from "./blocks/Position/Position";
import { Thing } from "./blocks/Thing/Thing";
import { IRawThing } from "./blocks/Thing/interface";

export class LevelMap {
    private _width: number;
    private _height: number;
    id: number;
    uniqueColors: Set<string>;
    field: Array<Array<Thing | null>>;
    selectedThing: Thing | null = null;
    connectedThings: number = 0;

    constructor (id: number, things: Array<IRawThing>) {
        this.id = id;

        const thingsCopy = [...things];
        thingsCopy.sort((a, b) => b.x-a.x);
        const xMax = thingsCopy[0].x;
        thingsCopy.sort((a, b) => b.y-a.y);
        const yMax = thingsCopy[0].y;

        this._width = xMax+1;
        this._height = yMax+1;

        // Создаем двумерный массив field и заполняем его things.
        // в конструкции field[y][x] y - первая координата, это индекс строки, а x - индекс столбца
        // Если по координате не лежит переданный thing, то там null!
        this.field = Array.from({length: this._height}, () => {
          return Array.from({length: this._width}, () => null);
        });

        this.uniqueColors = new Set();

        things.forEach((rawThing) => {
            const {x, y, color} = rawThing;

            this.field[y][x]
                = new Thing(new Position(x, y), color)

            this.uniqueColors.add(color);
        });
    }

    get width (): number {
      return this._width;
    }

    get height (): number {
      return this._height;
    }

    /**
     * Возвращает массив thing из field
     */
    // get things () {

    // }

    /**
     * Возвращает true если эти 2 финга можно соединить.
     * Выходить за пределы поля НЕЛЬЗЯ!
     * @param thing1
     * @param thing2
     * @returns {boolean}
     */
    canConnect (thing1: Thing, thing2: Thing): Promise<true> {
        return new Promise((resolve, reject) => {
          if (thing1.color !== thing2.color) reject(false);

          const {x, y} = thing1.position;

          const reachableStack: {x: number, y: number}[] = [{x, y}]
          const visitedArr: {x: number, y: number}[] = []

          while (reachableStack.length) {
            const {x, y} = reachableStack.pop()!;

            const isVisited = visitedArr.some((p) => p.x === x && p.y === y);
            if (isVisited) continue;

            if (thing2.position.isNeighbor(new Position(x, y))) {
              resolve(true);
            }

            if (x-1 >= 0 && !this.field[y][x-1]) {
              reachableStack.push({x: x-1, y})
            }

            if (x+1 < this._width && !this.field[y][x+1]) {
              reachableStack.push({x: x+1, y})
            }

            if (y-1 >= 0 && !this.field[y-1][x]) {
              reachableStack.push({x, y: y-1})
            }

            if (y+1 < this._height && !this.field[y+1][x]) {
              reachableStack.push({x, y: y+1})
            }

            visitedArr.push({x, y});
          }

          reject(false);
        })
        
    }

    countThings(): number {
      let thingsCount = 0;

      for (let i = 0; i< this._height; i++) {
        for (let j = 0; j<this._width; j++) {
          if (this.field[i][j]) thingsCount += 1;
        }
      }

      return thingsCount;
    }

    async tryToSelect(x: number, y: number): Promise<'nothing' | 'selected' | 'unselected' | 'connected' | 'notConnected' | 'win'> {
      const thingToSelect = this.field[y][x];

      if (!thingToSelect) return 'nothing';
      
      if (!this.selectedThing) {
        thingToSelect.select();
        this.selectedThing = thingToSelect

        return 'selected';
      }

      if (this.selectedThing.position.x === x && this.selectedThing.position.y === y) {
        this.selectedThing.unselect();
        this.selectedThing = null;
        
        return 'unselected';
      }

      try {
        await this.canConnect(this.selectedThing, thingToSelect);

        this.selectedThing.unselect();
        this.selectedThing.disable();
        this.field[this.selectedThing.position.y][this.selectedThing.position.x] = null;
        this.field[thingToSelect.position.y][thingToSelect.position.x] = null;
        this.selectedThing = null;
        thingToSelect.disable();
        this.connectedThings += 2

        if (!this.countThings()) return 'win';

        return 'connected';        
      } catch {
        this.selectedThing!.unselect();
        this.selectedThing = null;
        return 'notConnected';
      }
    }

    reset() {
      for (let i = 0; i< this._height; i++) {
        for (let j = 0; j<this._width; j++) {
          
        }
      }
    }
}