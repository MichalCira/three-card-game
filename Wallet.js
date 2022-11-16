class Wallet {
    constructor(money) {

        let _money = money;
        this.getMoney = () => _money;

        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        this.changeMoney = (value, type = "+") => {
            if (value < 0) {
                throw new Error("za mała wartość")
            } else if (typeof value === 'number' && !isNaN(value)) {
                if (type === "+") {
                    return _money += value
                } else {
                    return _money -= value
                }
            }
        }

    }

}
