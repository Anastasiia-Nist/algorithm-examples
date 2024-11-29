function fib(n) {
    const MOD = 10 ** 9 + 7;
    let a = 1;
    let b = 1;
    for (let i = 0; i < n; i++) {
        const l = a;
        a = b;
        b = (l + b) % MOD;
    }
    return a;
}
console.log(fib(5));

function fib(n) {
    const MOD = 10 ** 9 + 7;
    const dp = [1, 1];
    for (let i = 1; dp.length <= n; i++) {
        dp.push((dp[i] + dp[i - 1] % MOD))
    }
    return dp[dp.length - 1]
}
console.log(fib(5));

function fib(n) {
    let prev = BigInt(1), next = BigInt(1);
    for (let i = 0; i < n; i++) {
        let temp = next;
        next = prev + next;
        prev = temp;
    }
    return prev;
}
console.log(fib(75).toString()); //3416454622906707
