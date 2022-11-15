class Wallet {
    constructor(money) {

        let _money = money;
        this.getMoney = () => _money;

        this.changeMoney = (value, type = "+") => {
            if (value < 1) {
                throw new Error("za mała wartość")
            } else if (typeof (value) === 'number' && !isNaN(value)) {
                if (type === "+") {
                    return _money += value
                } else {
                    return _money -= value
                }
            }
        }

    }

}

const wallet = new Wallet(200)