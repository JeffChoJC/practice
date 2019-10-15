class LeaderBoard {
    constructor() {
        this.board = {};
    }

    addScore(playerId, score) {
        if (!this.board[playerId]) {
            this.board[playerId].push(score);
        } else {
            this.board[playerId] = [score];
        }

        return this.board[playerId].reduce((sum, num) => {
            return sum + num
        }) / ;
    }
}