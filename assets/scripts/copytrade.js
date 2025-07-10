function toggleDropdown() {
            const dropdown = document.getElementById('dropdownMenu');
            const arrow = document.querySelector('.dropdown-arrow');

            dropdown.classList.toggle('show');
            arrow.classList.toggle('open');
        }

        
        document.addEventListener('click', function (event) {
            const dropdown = document.querySelector('.profile-dropdown');
            const menu = document.getElementById('dropdownMenu');

            if (!dropdown.contains(event.target)) {
                menu.classList.remove('show');
                document.querySelector('.dropdown-arrow').classList.remove('open');
            }
        });


        document.addEventListener('DOMContentLoaded', function() {
    
    const urlBar = document.querySelector('.url-bar');

    
    if (urlBar) {
    
        urlBar.addEventListener('click', function() {
    
            const textToCopy = urlBar.textContent.trim(); 

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                     
                        const originalText = urlBar.textContent;
                        urlBar.textContent = 'Copied to clipboard!'; 
                        setTimeout(() => {
                            urlBar.textContent = originalText; 
                        }, 1500);
                        console.log('Text copied to clipboard successfully!');
                    })
                    .catch(err => {
                        console.error('Failed to copy text using navigator.clipboard: ', err);
                       
                        fallbackCopyToClipboard(textToCopy);
                    });
            } else {
                
                fallbackCopyToClipboard(textToCopy);
            }
        });
    }

    

    
    function fallbackCopyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select(); 

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback copy command was ' + msg);

            const originalText = urlBar.textContent;
            urlBar.textContent = 'Copied!';
            setTimeout(() => {
                urlBar.textContent = originalText;
            }, 1500);

        } catch (err) {
            console.error('Oops, unable to copy using fallback', err);
            
        } finally {
            document.body.removeChild(textArea); 
        }
    }
});


document.querySelector(".profile-trigger").addEventListener("click", toggleDropdown); 

 document.querySelector('.trade-btn').addEventListener('click', function() {
            window.location.href = 'copy_trade_history.html';
        } );