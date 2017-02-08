/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    if(!equations || !equations.length || !values || !values.length || values.length !== equations.length || !queries || !queries.length){
        return [];
    }
    
    const varibles = {};
    let len = 0;
        
    equations.forEach((e)=>{
        e.forEach((i)=>{
            if(!varibles[i]) {
                varibles[i] = len;
                len++;
            }
        });
    });
    
    const board = [];
    
    for(let i=0;i<len;i++) {
        board.push([]);
        board[i][i] = 1;
    }
    
    equations.forEach((e, index)=>{
        const first = varibles[e[0]];
        const second = varibles[e[1]];
        
        board[first][second] = values[index];
        board[second][first] = 1/values[index];
    });
    
    for(let i=0;i<len;i++) {
        for(let j=0;j<len;j++) {
            if(board[i][j]===undefined){
                for(let k=0;k<len;k++) {
                    if(board[i][k] !==undefined && board[k][j]!==undefined)
                        board[i][j] = board[i][k]*board[k][j];
                }
            }
        }
    }
    const res = [];
    
    queries.forEach((e)=>{
        const first = varibles[e[0]];
        const second = varibles[e[1]];
        if(first===undefined || second===undefined || board[first][second]===undefined) {
            res.push(-1);
        }else{
            res.push(board[first][second]);    
        }
        
    });
    
    return res;
};
