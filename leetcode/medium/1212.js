//1057
var assignBikes = function(workers, bikes) { // use distance as a "bucket" containing worker, bike indices
    let distances = {};
    let res = [];
    
    workers.forEach((worker, w) => {
        bikes.forEach((bike, b) => {
            let distance = getDistance({x: worker[0], y: worker[1]}, {x: bike[0], y: bike[1]});
            if (!distances[distance]) {
                distances[distance] = [];
            }
            distances[distance].push([w, b]);
        })
    })
    
    for (bucket in distances) {
        for ([w, b] of distances[bucket]) { // destructure of pair
            if (workers[w] && bikes[b]) {
                workers[w] = null; // erase worker, bike index after recording to result
                bikes[b] = null;
                res[w] = b;
            }
        }
    }
    
    return res;
};

var getDistance = function(p1, p2) {
    return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
}

