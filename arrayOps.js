// Given the following array `[[1,2,3,4,5], [1,2,3,4,5]]`
// write a function called arrayOps, which will produce the following outcome:
// `[0,2,6,12,20,5,12,21,32,45]`

let darray = [[1,2,3,4,5], [1,2,3,4,5]];
let outcome = [];

function arrayOps(darray) {
    darray.forEach((array,dindex) => {
        array.forEach((number,index) => {
            if (dindex == 0){
                if (index == 0){
                    outcome.push(0);
                }else {
                    outcome.push(number * array[index-1]);
                }
               
            } else {
                outcome.push(5*number + outcome[index]);
            }       
        });
    }); 
    console.log(outcome); 
};

 


arrayOps(darray);
      