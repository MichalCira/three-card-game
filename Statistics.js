class Statistics {
    constructor() {
        this.gameResult = [];

    }

    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResult.push(gameResult);
    }

    showGameToStats() {
        let games = this.gameResult.length;
        let wins = this.gameResult.filter(result => result.win === true).length;
        let loss = this.gameResult.filter(result => result.win === !true).length;
        return [games, wins, loss]

    }
}