class LeaderBoard {
    constructor() {
        this.board = {};
    }

    addScore(playerId, score) {  
        if (this.board[playerId]) {
            this.board[playerId].addScore(score);
        } else {
            this.board[playerId] = new Player(playerId, score);
        }

        return this.board[playerId].average();
    }

    sortAndTake(order, num) {
        let players = [];

        for (var key in this.board) {
            players.push(this.board[key])
        }

        let sorted = false;

        while (!sorted) {
            sorted = true;
            for (var i = 0; i < players.length - 1; i++) {
                
                const condition = (order.toUpperCase() === "TOP") ? 
                    (players[i].average() < players[i + 1].average()) : (players[i].average() > players[i + 1].average())
                
                if (condition) {
                    [players[i], players[i + 1]] = [players[i + 1], players[i]];
                    sorted = false;
                }
            }
        }

        players = players.map(player => { return player.id });
        return players.slice(0, num);
    }

    // top(num) {
    //     const players = this.sort("DESC");

    //     return players.slice(0, num);
    // }

    // bottom(num) {
    //     const players = this.sort("ASC");

    //     return players.slice(0, num);
    // }

    reset(playerId) {
        if (this.board[playerId]) {
            this.board[playerId].reset();
        }
    }
}

class Player {
    constructor(id, score) {
        this.id = id;
        this.scores = [score];
    }

    addScore(score) {
        this.scores.push(score);
    }

    average() {
        return this.scores.reduce((sum, num) => {
            return sum + num
        }) / this.scores.length;
    }

    reset() {
        this.scores = [];
    }
}

class Score {
    constructor(val) {
        this.val = val;
        this.createdAt = new Date();
        this.valid = true;
    }

    expire
}

test = new LeaderBoard();
test.addScore(1, 80);
test.addScore(1, 60);
test.addScore(2, 60);
test.addScore(2, 65);
test.addScore(3, 80);
test.addScore(4, 70);
test.addScore(4, 90);
test.addScore(4, 45);
test.addScore(5, 50);
test.addScore(6, 100);
console.log(test.board);
test.reset(6);
test.reset(-1000);
console.log("-------------");
console.log(test.board);
console.log(test.sortAndTake("TOP", 3));
console.log(test.sortAndTake("BOTTOM", 3));