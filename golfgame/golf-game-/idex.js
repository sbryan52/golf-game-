// PROVIDED FOR YOU. DO NOT CHANGE puzzle or puzzleTwo

//puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


//puzzle 2
let puzzleTwo = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]];

//DO NOT EDIT ABOVE

function getRow(puzzle,r)
{
    return puzzle[r];
}

function getColumn(puzzle,c)
{
    let result= new Array();
    for(let i=0;i<9;i++)
    {
        result.push(puzzle[i][c]);
    }
    return result;
}

function getSection(puzzle,x,y)
{
    let result= new Array();
    for(let i=0;i<3;i++)
    {
      for(let j =0;j<3;j++)
      {
        result.push(puzzle[(3*y)+i][(3*x)+j]);
      }
    }
    return result;
}

function sum(arr){
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}

function includes1To9(ls)
{
  if(ls.length == 9 && sum(ls)==45)
  { 
    return true;
  }
  else
  {
    return false;
  }
}

function sudokuIsValid(puzzle)
{
  for(let i=0;i<9;i++)
  { 
    if(includes1To9(getRow(puzzle,i))==false)
    {
      return false;
    }
    if(includes1To9(getColumn(puzzle,i))==false)
    {
      return false
    }
  }
  for(let i=0;i<3;i++)
  {
    for(let j=0;j<3;j++)
    {
      if(includes1To9(getSection(puzzle,i,j))==false)
      {
        return false
      }
    }
  }
  return true
}


puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
          [ 2,7,1,   9,6,3,   4,8,5 ],
          [ 4,6,3,   5,8,1,   7,9,2 ],

          [ 9,3,4,   6,1,7,   2,5,8 ],
          [ 5,1,7,   2,3,8,   9,6,4 ],
          [ 6,8,2,   4,5,9,   3,7,1 ],

          [ 1,5,9,   8,7,4,   6,2,3 ],
          [ 7,4,6,   3,2,5,   8,1,9 ],
          [ 3,2,8,   1,9,6,   5,4,7 ]];
puzzleTwo = [[ 8,9,5,  7,4,2,  1,3,6 ],
             [ 8,7,1,  9,6,3,  4,8,5 ],
             [ 4,6,3,  5,8,1,  7,9,2 ],

             [ 9,3,4,  6,1,7,  2,5,8 ],
             [ 5,1,7,  2,3,8,  9,6,4 ],
             [ 6,8,2,  4,5,9,  3,7,1 ],

             [ 1,5,9,  8,7,4,  6,2,3 ],
             [ 7,4,6,  3,2,5,  8,1,9 ],
             [ 3,2,8,  1,9,6,  5,4,7 ]];


console.log(sudokuIsValid(puzzle))
console.log(sudokuIsValid(puzzleTwo))




//DO NOT EDIT BELOW
module.exports = {
    getRow,
    getColumn,
    getSection,
    includes1To9,
    sudokuIsValid,
    puzzle,
    puzzleTwo
};
