var toggleButton = document.getElementById('toggle-btn');
var Exp = document.getElementById('Exp');
toggleButton.addEventListener('click', function () {
    if (Exp.style.display === 'none') {
        Exp.style.display = 'block';
    }
    else {
        Exp.style.display = 'none';
    }
});
