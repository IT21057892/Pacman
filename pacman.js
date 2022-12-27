class Pacman {
    constructor(x, y, width, heigth, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
    }


    moveProcess() {
        this.changeDirectionalfPossiable();
        this.moveForwards();
        if(this.checkCollision()) {
            this.moveBackwards();
        }
    }


    eat() {
        
    }


    moveBackwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x -= this.speed;
                break;

            case DIRECTION_UP:
                this.y += this.speed;
                break;

            case DIRECTION_LEFT:
                this.x += this.speed;
                break;

            case DIRECTION_BOTTOM:
                this.y -= this.speed;
                break;
        }
    }


    moveForwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x += this.speed;
                break;

            case DIRECTION_UP:
                this.y -= this.speed;
                break;

            case DIRECTION_LEFT:
                this.x -= this.speed;
                break;

            case DIRECTION_BOTTOM:
                this.y += this.speed;
                break;
        }
    }


    checkCollision() {
        let isCollided = false;
        if(
            map[this.getMapY()][this.getMapX()] == 1 ||
            map[this.getMapYRightSide()][this.getMapX()] == 1 ||
            map[this.getMapY()][this.getMapXRightSide()] == 1 ||
            map[this.getMapYRightSide()][this.getMapXRightSide()]
        ) {
            return true;
        }
        return false;
    }


    checkGhostCollision() {

    }


    changeDirectionalfPossiable() {
        
    }


    changeAnimation() {

    }


    draw() {

    }

    getMapX() {
        return parseInt(this.x / oneBlockSize);
    }

    getMapY() {
        return parseInt(this.y / oneBlockSize);
    }

    getMapXRightSide() {
        return parseInt( (this.x + 0.9999 * oneBlockSize) / oneBlockSize);
    }

    getMapYRightSide() {
        return parseInt( (this.y + 0.9999 * oneBlockSize) / oneBlockSize);
    }

}