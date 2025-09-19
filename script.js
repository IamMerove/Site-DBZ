// Fonction pour basculer entre mode clair et sombre
function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector('.dark-mode-toggle');
    
    // Basculer la classe dark-mode
    body.classList.toggle('dark-mode');
    
    // Changer le texte du bouton selon l'état
    if (body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Mode Clair';
        // Sauvegarder la préférence
        localStorage.setItem('darkMode', 'enabled');
    } else {
        button.textContent = '🌙 Mode Sombre';
        // Sauvegarder la préférence
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Charger les préférences au démarrage
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier les préférences sauvegardées
    const darkModePreference = localStorage.getItem('darkMode');
    const body = document.body;
    const button = document.querySelector('.dark-mode-toggle');
    
    // Appliquer le mode sombre si c'était la préférence sauvegardée
    if (darkModePreference === 'enabled') {
        body.classList.add('dark-mode');
        button.textContent = '☀️ Mode Clair';
    } else {
        button.textContent = '🌙 Mode Sombre';
    }
});