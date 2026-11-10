const PLAYER_SPEED = 6
const GRAVITY = 28
const JUMP_SPEED = 18
function Player(initialPosition){
    this.pos = initialPosition.plus(new Vector(0, -0.5))
    this.size = new Vector(0.8, 1.5);
    this.speed = new Vector(0, 0);
    
}


Player.prototype.type = 'player'
Player.prototype.moveX = function(step, level, keys){
    this.speed.x = 0;
    if(keys.left) this.speed.x -= PLAYER_SPEED
    if(keys.right) this.speed.x += PLAYER_SPEED
    let motion = new Vector(this.speed.x * step, 0)
    let newPosition = this.pos.plus(motion)
    let obstacle = level.obstacleAt(newPosition, this.size)
    if(obstacle) level.playerTouched(obstacle);
    else this.pos = newPosition;
}

Player.prototype.moveY = function(step, level, keys){
    this.speed.y+= step * GRAVITY
    let motion = new Vector(0, this.speed.y * step)
    let newPosition = this.pos.plus(motion)

    let obstacle = level.obstacleAt(newPosition, this.size)
    if(obstacle){
        level.playerTouched(obstacle);
        if(keys.up && this.speed.y > 0) this.speed.y = -JUMP_SPEED
        else this.speed.y = 0

    }else(
        this.pos = newPosition
    )
}

Player.prototype.act = function(step, level, keys){
    this.moveX(step, level, keys)
    this.moveY(step, level, keys)

    let otherActor = level.actorAt(this);
    if (otherActor) level.playerTouched(otherActor.type, otherActor)
    
    if(level.status ==='lost'){
        this.pos.y += step
        this.size.y -= step

    }
}

