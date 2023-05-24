// 問題４
// このコードを実行したらエラーになりました。
// エラーが起きないように修正してください。


class Monster {
    color;
    
    static setColor(color) {
        this.color = color;
    }
}

const monster = new Monster();

monster.setColor("green");
