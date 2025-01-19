function checkAnswer(answer) {
    const feedback = document.getElementById('feedback');
    if (answer === 'Paris') {
        feedback.textContent = 'Correct! Paris is the capital of France.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.style.color = 'red';
    }
}
