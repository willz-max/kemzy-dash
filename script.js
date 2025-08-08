document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    
    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        dropdown.classList.toggle('active');
    });

    
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    
    dropdownContent.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    
    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        dropdown.classList.toggle('active');
    });

    
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    
    dropdownContent.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
    });
});