
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('El clic derecho está deshabilitado.');
});


document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        alert('Copiar está deshabilitado.');
    }
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        alert('La consola está deshabilitada.');
    }
});
