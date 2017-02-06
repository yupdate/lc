/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    if(!grid || !grid.length) return 0;
    
    const steps = [], reach = [];
    const m = grid.length;
    const n = grid[0].length;
    
    for(let i=0;i<m;i++) {
        steps.push(Array(n).fill(0));
        reach.push(Array(n).fill(0));
    }
    
    let initilized = false, min = Number.MAX_VALUE, buildingNum = 0;
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(grid[i][j]===1) {
                buildingNum ++;
                updateSteps(grid, steps, i, j, reach);
            }
        }
    }
    console.log(steps);
    
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(grid[i][j]===0 && reach[i][j]===buildingNum) {
                min = Math.min(steps[i][j], min);
            }
        }
    }
    return min === Number.MAX_VALUE ? -1 : min;
};

let updateSteps = (grid, steps, x, y, reach) => {
    let level = [[x, y]];
    let count = 1;
    let visited = [];
    
    //A shift array!!!
    const shift = [0, 1, 0, -1, 0];
    
    for(let i=0;i<grid.length;i++)
        visited.push([]);
    
    while(level.length) {
        let nextLevel = [];
        for(let i=0;i<level.length;i++) {
            const curX = level[i][0], curY = level[i][1];
            
            for(let k=0;k<4;k++) {
                const newX = curX + shift[k];
                const newY = curY + shift[k+1];
                
                if(newX>=0 && newX < grid.length && newY >=0 && newY <grid[0].length && grid[newX][newY] === 0 && !visited[newX][newY]) {
                    steps[newX][newY] += count;
                    reach[newX][newY]++;
                    nextLevel.push([newX, newY]);
                    visited[newX][newY] = true;
                }
            }
        }
        
        count++;
        level = nextLevel;
    }
};
