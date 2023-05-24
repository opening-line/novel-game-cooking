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