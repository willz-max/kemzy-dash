const translations = {
    en: {
        // Navigation/Common
        myProfile: 'My Profile',
        preferences: 'Preferences',
        security: 'Security',
        notifications: 'Notifications',
        paymentMethods: 'Payment Methods',
        
        // Profile Page
        editProfile: 'Edit Profile',
        twoFactorAuth: '2FA, Password, Recovery',
        alertsReminders: 'Alerts and reminders',
        crypto: 'Crypto',
        themeSettings: 'Theme, currency, language',
        
        // Security Page
        password: 'Password',
        twoFactor: 'Two Factor Authentication',
        recovery: 'Recovery',
        
        // Add more translations as needed
    },
    fr: {
        // Navigation/Common
        myProfile: 'Mon Profil',
        preferences: 'Préférences',
        security: 'Sécurité',
        notifications: 'Notifications',
        paymentMethods: 'Méthodes de Paiement',
        
        // Profile Page
        editProfile: 'Modifier le Profil',
        twoFactorAuth: '2FA, Mot de passe, Récupération',
        alertsReminders: 'Alertes et rappels',
        crypto: 'Crypto',
        themeSettings: 'Thème, devise, langue',
        
        // Security Page
        password: 'Mot de passe',
        twoFactor: 'Authentification à deux facteurs',
        recovery: 'Récupération',
        
        // Add more translations as needed
    },
    es: {
        // Navigation/Common
        myProfile: 'Mi Perfil',
        preferences: 'Preferencias',
        security: 'Seguridad',
        notifications: 'Notificaciones',
        paymentMethods: 'Métodos de Pago',
        
        // Profile Page
        editProfile: 'Editar Perfil',
        twoFactorAuth: '2FA, Contraseña, Recuperación',
        alertsReminders: 'Alertas y recordatorios',
        crypto: 'Cripto',
        themeSettings: 'Tema, moneda, idioma',
        
        // Security Page
        password: 'Contraseña',
        twoFactor: 'Autenticación de dos factores',
        recovery: 'Recuperación',
        
        // Add more translations as needed
    }
};

// Language system functions
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

function translatePage() {
    const currentLanguage = getCurrentLanguage();
    const t = translations[currentLanguage];
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Translate elements with data-translate-placeholder attribute
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    translatePage();
});

// Listen for language changes
window.addEventListener('storage', function(e) {
    if (e.key === 'language') {
        translatePage();
    }
});