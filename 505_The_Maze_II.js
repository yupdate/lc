/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
    const steps = [];
    
    for(let i=0;i<maze.length;i++) {
        steps.push([]);
    }

    findPath(maze, start, destination, steps);
    
    return steps[destination[0]][destination[1]] || -1;
};

var findPath = (maze, start, destination, steps) =>{console.log('find-', start);
    const level = [start];
    const shift = [0, 1, 0, -1, 0];
    steps[start[0]][start[1]] = 0;
    while(level.length) {
        const cur = level.pop();
        
        for(let i=0;i<4;i++) {
            let curX = cur[0] + shift[i], curY = cur[1] +shift[i+1];
            let step = 0;
            while(curX>=0 && curX<maze.length &&
                  curY>=0 && curY<maze[0].length &&
                  maze[curX][curY]===0){
                step++;
                curX += shift[i];
                curY += shift[i+1];
            }
            
            curX -= shift[i];
            curY -= shift[i+1];
            
            if(steps[curX][curY] === undefined || steps[curX][curY] > step + steps[cur[0]][cur[1]]) {
                steps[curX][curY] = step + steps[cur[0]][cur[1]];
                level.push([curX, curY]);
            }
        }
    }
};
