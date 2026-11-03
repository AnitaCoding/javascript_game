const ACTORS = {
    //Guardamos referencia al constructor
    'o': Coin,
    '@': Player
};

function Level(plan){
    this.width = plan[0].length;
    this.height = plan.length;
    this.state = null
    this.finishDelay = null
    this.grid = [];
    this.actors = [];


    for (let y = 0; y < this.height; y++){
        let line = plan[y];
        let gridLine = [];
        for (let x = 0; x < this.width; x++){
            let character = line[x];
            let characterType = null;

            let Actor = ACTORS[character]
            //Como hemos referenciado a los actores en el diccionario
            //Podemos llamar a new actor pasándole unas posiciones para que cree
            //ahí el objeto que corresponda.
            if (Actor) this.actors.push(new Actor(new Vector(x, y), character));
            if(character === 'x') characterType = 'wall';
            else if(character === '!') characterType = 'lava';

            gridLine.push(characterType)
        }

        this.grid.push(gridLine)
    }
}

Level.prototype.isFinished = function (){
    return (this.status !== null && this.finishDelay < 0)
}