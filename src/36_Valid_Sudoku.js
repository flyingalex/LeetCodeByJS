var isValidSudoku = function(board) {
    let len = board[0].length;
    for(let i = 0;i < len;i++){
      const appear = Array(10).fill(false);
      for(let j = 0;j < len;j++){
        if(board[i][j] === '.') continue;
        if(appear[board[i][j]-'0'] !== false) return false;
        appear[board[i][j]-'0'] = true;
      }
    }
    for(let i = 0;i < len;i++){
      const appear = Array(10).fill(false);
      for(let j = 0;j < len;j++){
        if(board[j][i] === '.') continue;
        if(appear[board[j][i]-'0'] !== false) return false;
        appear[board[j][i]-'0'] = true;
      }
    }
    for(let i = 0;i < len;i+= 3){
      for(let j = 0;j < len;j+= 3){
        const appear = Array(10).fill(false);
        for(let p = i;p < i + 3;p++){
          for(let q = j;q < j + 3;q++){
            if(board[p][q] === '.') continue;
            if(appear[board[p][q]-'0'] !== false) return false;
            appear[board[p][q]-'0'] = true;
          }
        }
      }
    }
    return true;
};