class Statistics {
    constructor() {
        this.gameResult = [{
            win: true,
            bid: 2
        }, {
            win: false,
            bid: -12
        }];

    }

    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResult.push(gameResult)
    }

    showGameToStats() {
        let games = this.gameResult.length;
        let wins = this.gameResult.filter(result => result.win === true).length;
        let loss = this.gameResult.filter(result => result.win === !true).length;
        return [games, wins, loss]

    }
}