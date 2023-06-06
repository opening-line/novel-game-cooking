// 問題４
// このコードを実行したらエラーになりました。
// エラーが起きないように修正してください。


class Monster {
    color;
    
    // static を消去
    // static setColor(color) {
    setColor(color) {
        this.color = color;
    }
}

const monster = new Monster();

monster.setColor("green");




// 別解
// 全部 static にする

class Monster {
    static color;
    
    static setColor(color) {
        this.color = color;
    }
}

Monster.setColor("green");
