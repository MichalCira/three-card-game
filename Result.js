class Result {
    static whoWins(draw) {
        if (draw[1] === draw[2] && draw[2] === draw[0] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[2] !== draw[0]) return true;
        else return false;
    }
    static checWins(win, bid) {
        if (win) {
            return bid * 3;
        } else return 0;

    }

}