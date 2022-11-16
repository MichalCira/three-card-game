class Game {
    constructor(start) {
        this.wallet = new Wallet(start)
        this.stats = new Statistics();

        document.getElementById("start").addEventListener("click", this.StartGame.bind(this));

        this.drowColor = document.querySelectorAll(".color");
        this.inputBid = document.querySelector("#bid");
        this.spanWallet = document.querySelector(".wallet");
        this.spanResult = document.querySelector(".result");
        this.spanNumber = document.querySelector(".number");
        this.spanWin = document.querySelector(".win");
        this.spanLoss = document.querySelector(".loss");

        this.render()
    }
    render(colors = ['#aaa', '#aaa', '#aaa'], result = "", stats = [0, 0, 0]) {
        this.drowColor.forEach((color, i) => {
            color.style.backgroundColor = colors[i];
        })
        this.spanWallet.textContent = this.wallet.getMoney();
        this.spanResult.textContent = result;
        this.spanNumber.textContent = stats[0];
        this.spanWin.textContent = stats[1];
        this.spanLoss.textContent = stats[2];

    }


    StartGame() {
        let inputValue = Math.floor(this.inputBid.value)
        if (typeof inputValue !== "number" || inputValue < 1) return alert("nieprawidłowa liczba")

        if (!this.wallet.checkCanPlay(inputValue)) return alert('za duża kwota')
        const colors = new Drow();
        const bid = inputValue;
        this.wallet.changeMoney(bid, "-");


        const wins = Result.whoWins(colors.getColors());
        this.stats.addGameToStats(wins, bid)


        let winBid = Result.checWins(wins, bid);
        this.wallet.changeMoney(winBid);
        let result
        if (wins) {
            result = `Wygrałeś ${winBid}. `;
        } else result = `Przegrałeś ${bid}. `;


        this.render(colors.getColors(), result, this.stats.showGameToStats(), )

    }
}