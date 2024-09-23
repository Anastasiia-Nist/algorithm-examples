function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
}

function factorial(n, result){
    result = result || 1;
    if(!n){
        return result;
    }else{
        return factorial(n-1, result*n); // хвостовая рекурсия
    }
}


function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}