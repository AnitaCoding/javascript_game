function Lava(initialPosition, characterType){
    this.pos = initialPosition;
    this.size = new Vector(1,1)
    if (characterType === '=') this.speed = new Vector(2, 0);
    else if(characterType === '|') this.speed = new Vector(0, 2);
    else if(characterType === 'v'){
        this.speed = new Vector(0, 3);
        this.respawnPosition = initialPosition //Vuelve a su posición de origen
    }
}

Lava.prototype.type = 'lava'
Lava.prototype.act = function(step, level){
    
}