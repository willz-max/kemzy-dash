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
        themeSettings: 'Theme, language',
        
        // Security Page
        password: 'Password',
        twoFactor: 'Two Factor Authentication',
        recovery: 'Recovery',
        connectWallet: 'Connect Wallet',
        Helpandsupport:'Help & Support',
        logout:'Logout',
        signOutOfYourAccount:'Sign out of your account',
        TransactionHistory:'Transaction History',
        All:'All',
        Sent:'Sent',
        Recieved:'Received',
        Failed:'Failed',
        Refresh:'Refresh',
        staking_massage: 'You do not have any wallets with deposited funds yet.',
        Settings: 'Settings',

        // signal page
        SignalHistory:'Signal History',
        gain:'Gain',
        Risk:'Risk',
        Trades:'Trades',
        InvCapital:'Inv. Capital',
        SUBSCRIBE:'SUBSCRIBE',
        Duration:'Duration',
        TotalBalance:'Total Balance:',
        DEPOSIT:'DEPOSIT',
        
        
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
        themeSettings: 'Thème, langue',
        

        
        // Security Page
        password: 'Mot de passe',
        twoFactor: 'Authentification à deux facteurs',
        recovery: 'Récupération',
        connectWallet: 'Conectar billetera',
        Helpandsupport:'Aide et support',
        logout:'Se déconnecter',
        signOutOfYourAccount:' Se déconnecter de votre compte',
        TransactionHistory:'Historique de transactions ',
        All:'Tout',
        Sent:'Envoyé',
        Received:'Reçu',
        Failed:'échoué',
        Refresh:'Actualiser',
        staking_massage: "Vous n'avez pas encore de portefeuilles avec des fonds déposés.",
        Settings: "paramètres",
        

        // signal page
        SignalHistory:'Historique des signaux',
        gain:'gain',
        Risk:'Risque',
        Trades:'Échanges',
        InvCapital:'Capital investi',
        SUBSCRIBE:"s'abonner",
        Duration:'durée',
        TotalBalance:'Balance totale:',
        DEPOSIT:'Dépôt',
        
        
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
        connectWallet: 'Conectar billetera',
        Helpandsupport:'Ayuda y soporte',
        logout:'Cerrar sesión',
        signOutOfYourAccount:'Cerrar sesión de su cuenta',
        TransactionHistory:'Historial de operaciones',
        All:' Todo ',
        Sent:'Enviado',
        Recieved:' Recibido',
        Failed:'fallido',
        Refresh:' Actualizar',
        staking_massage: 'Aún no tienes carteras con fondos depositados.',
        Settings: 'configuraciones',

        // signal page
        SignalHistory:'Historial de señales',
        gain:'ganancia',
        Risk:'riesgo',
        Trades:'Intercambios',
        InvCapital:'Capital invertido',
        SUBSCRIBE:'suscribirse',
        Duration:'duración',
        TotalBalance:'Balance total:',
        DEPOSIT:'Depósito',
        
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