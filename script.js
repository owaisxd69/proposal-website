document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').innerText = 'You made me the happiest person alive!';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').innerText = 'Oh no! Please reconsider!';
});