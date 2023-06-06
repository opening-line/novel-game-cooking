// 問題５
// SportsCarクラスに、新しいプロパティ「interior」を追加してください。
// そしてコンストラクタを使用して初期化してください。
//
// Carクラスのbrakeメソッドは、スピードがマイナス値になる恐れがあります。そうならないよう修正してください。
//
// SportsCarクラスでは、accelとbrakeを使ったときに、speedの増減が10になるように修正してください。

class Car {
    model;
    color;
    speed;
    
    constructor(model, color, speed) {
        this.model = model;
        this.color = color;
        this.speed = speed;
    }
    
    accel() {
        this.speed += 1;
    }
    
    brake() {
        this.speed -= 1;
    }
}

class SportsCar extends Car {
    
}


// ************************************************
// 回答１
// 素直に実装
// ************************************************

class Car {
    model;
    color;
    speed;
    
    constructor(model, color, speed) {
        this.model = model;
        this.color = color;
        this.speed = speed;
    }
    
    accel() {
        this.speed += 1;
    }
    
    brake() {
        if (this.speed > 1) {
            this.speed -= 1;
        } else {
            this.speed = 0;
        }
    }
}

class SportsCar extends Car {
    
    interior;
    
    constructor(model, color, speed, interior) {
        super(model, color, speed);
        this.interior = interior;
    }
    
    accel() {
        this.speed += 10;
    }
    
    brake() {
        if (this.speed > 10) {
            this.speed -= 10;
        } else {
            this.speed = 0;
        }
    }
}



// ************************************************
// 回答２
// speedStep フィールドを使用
// ************************************************

class Car {
    model;
    color;
    speed;
    speedStep = 1;
    
    constructor(model, color, speed) {
        this.model = model;
        this.color = color;
        this.speed = speed;
    }
    
    accel() {
        this.speed += speedStep;
    }
    
    brake() {
        if (this.speed > speedStep) {
            this.speed -= speedStep;
        } else {
            this.speed = 0;
        }
    }
}

class SportsCar extends Car {
    
    interior;
    
    constructor(model, color, speed, interior) {
        super(model, color, speed);
        this.interior = interior;
        this.speedStep = 10;
    }
}