const fibs = (num) => {
    if(num == 0){
        return num
    }
    
    else {
        let fibArray = [];
        let fibValue = 0;
        for (let i = 0; i < num; i++){
            if(fibArray.length == 0){
                fibArray.push(fibValue);
            }
            else if(fibArray.length == 1){
                fibValue = 1
                fibArray.push(fibValue);

            }
            else{
                fibValue = fibArray[i-2] + (fibArray[i -1])
                    fibArray.push(fibValue);
            }
        }
        return fibArray;   
    }
}


function fibsRec(num, constant = [0, 1]) {
    if(num <= 0 || NaN) return "Invailid Parameter";
   else if (num === 1) return [0];
    else if (constant.length >= num) return constant;
    return fibsRec(num, [...constant, constant.at(-1) + constant.at(-2)])
}
  
let result = fibs(8);
// fibsRec(8);
 // return [arrayValue].concat(arrayValue + fibs(num - 1))
console.log(result);
console.log(fibsRec(0)); // Invalid Parameter
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); //[0,1]
console.log(fibsRec(5)); //[0,1,1,2,3]

function collatz(n){
    let totalSteps = 0
    if(n==1){
        return 0
    }
    while (n>1){
        if (n % 2 == 0){
            totalSteps++
            collatz(n/2)
        }
        else{
            totalSteps++
            collatz (3n + 1)
        }
        
    }
return totalSteps
}




function mergeSort(arr){
    if (arr.length == 1) return arr;

    const middle = Math.floor(arr.length/2)
    const left = [arr.slice[0,middle]];
    const right = [arr.slice[middle]];

    if (arr.length > 2){
        mergeSort(arr, leftarr[arr.length], rightarr)
    }

    return merge(mergeSort(left), mergeSort(right))
}

    function merge(left, right){
        let sortedArry = [];
        for(i=0; i < left.length; i++){
            for(j=0; j < right.length; j++){
                if(left[i] < right[j]){
                    sortedArry.push[left[i]]
                }
                else{
                    sortedArry.push[right[j]]
                }
            } 
        }
        return result.concat(left).concat(right)
    }
    

    // if greater than 2, split length in two 
    // sort left side 
    // sort right side
    // merge two sorted halves together
    
    const arr = [7,90,3,2,9,12,76,43]
    console.log(merge(arr));