function temanoturno() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.src = 'tema/icons8-sun-30.png'; 
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.src = 'tema1/icons8-moon-30.png'; 
    }

   
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}


window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.src = 'tema/icons8-sun-30.png'; // Ícone do sol (para o tema escuro)
    } else {
        document.body.classList.add('light-mode');
        themeIcon.src = 'tema/icons8-moon-30.png'; // Ícone da lua (para o tema claro)
    }
};


  
  
