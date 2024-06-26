document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');

    button1.addEventListener('click', () => {
        form1.style.display = 'block';
        form2.style.display = 'none';
        button1.classList.add('grow');
        button2.classList.remove('grow');
    });

    button2.addEventListener('click', () => {
        form2.style.display = 'block';
        form1.style.display = 'none';
        utton2.classList.add('grow');
        button1.classList.remove('grow');
    });
});

