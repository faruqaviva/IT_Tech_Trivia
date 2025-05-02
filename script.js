function checkAnswer(button, answer) {
    const feedback = button.parentElement.parentElement.querySelector('.feedback');
    if (answer === 'correct') {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Wrong!';
        feedback.style.color = 'red';
    }
}
