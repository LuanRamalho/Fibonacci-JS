function generateFibonacci() {
    let n = parseInt(document.getElementById('fibInput').value);
    if (isNaN(n) || n <= 0) {
        alert('Por favor, digite um número válido.');
        return;
    }

    let fibSequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            fibSequence.push(i);
        } else {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
    }

    document.getElementById('result').innerText = fibSequence.join(', ');
}
