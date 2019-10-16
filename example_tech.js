class LeaderBoard {
    constructor() {
        this.board = {};
    }

    addScore(playerId, score) {  
        if (this.board[playerId]) {
            this.board[playerId].scores.push(score);
        } else {
            this.board[playerId] = new Player(playerId, score);
        }

        const scores = this.board[playerId].scores;
        return this.board[playerId].average = scores.reduce((sum, num) => {
            return sum + num
        }) / scores.length;
    }

    top(num) {
        
    }
}

class Player {
    constructor(id, score) {
        this.id = id;
        this.scores = [score];
        this.average = score;
    }
}

test = new LeaderBoard();
console.log(test.addScore(1, 80));
console.log(test.addScore(1, 60));
console.log(test.board);