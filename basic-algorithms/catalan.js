function getCatalan(n) {
    const catalan = Array(n + 1).fill(0);

    catalan[0] = 1;
    catalan[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            catalan[i] += catalan[j] * catalan[i - j - 1];
        }
    }

    return catalan[n];
}
// console.log(getCatalan(4))