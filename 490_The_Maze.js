/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    if(!maze || !maze.length) return false;
    
    const canReach = [];
    for(let i=0;i<maze.length;i++) {
        canReach.push([]);
    }
    const shift = [0, 1, 0, -1, 0];
    const level = [start];
    while(level.length) {
        const cur = level.pop();
        canReach[cur[0]][cur[1]] = true;

        for(let i=0;i<4;i++) {
            const shiftX = shift[i], shiftY = shift[i+1];
            let curX = shiftX + cur[0], curY = shiftY + cur[1];
            
            while(curX>=0 && curX<maze.length && curY>=0 && curY<maze[0].length && maze[curX][curY] === 0) {
                curX += shiftX; curY+=shiftY;
            }
            
            curX-=shiftX; curY-=shiftY;
            if(!canReach[curX][curY]) {
                canReach[curX][curY] = true;
                level.push([curX, curY]);
            }
        }
    }
    
    return !!canReach[destination[0]][destination[1]];
};
