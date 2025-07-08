 let selectedIdType = '';
        let frontIdUploaded = false;
        let selfieUploaded = false;
        document.querySelector('.dropdown-select').addEventListener('click',toggleDropdown);

        function goBack() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                console.log('Navigate to previous screen');
            }
        }

        function toggleDropdown() {
            const options = document.getElementById('dropdownOptions');
            options.classList.toggle('show');
        }

        function selectOption(option) {
            selectedIdType = option;
            document.getElementById('selectedOption').textContent = option;
            document.getElementById('dropdownOptions').classList.remove('show');
            
            // Update selected styling
            const allOptions = document.querySelectorAll('.dropdown-option');
            allOptions.forEach(opt => opt.classList.remove('selected'));
            event.target.classList.add('selected');
        }

        function handleDragOver(event) {
            event.preventDefault();
            event.currentTarget.classList.add('dragover');
        }

        function handleDragEnter(event) {
            event.preventDefault();
            event.currentTarget.classList.add('dragover');
        }

        function handleDragLeave(event) {
            event.preventDefault();
            event.currentTarget.classList.remove('dragover');
        }

        function handleDrop(event, type) {
            event.preventDefault();
            event.currentTarget.classList.remove('dragover');
            
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.type.startsWith('image/')) {
                    displayImage(file, type);
                } else {
                    alert('Please upload an image file');
                }
            }
        }

        function handleFileSelect(event, type) {
            const file = event.target.files[0];
            if (file) {
                displayImage(file, type);
            }
        }

        function displayImage(file, type) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const zoneId = type === 'front' ? 'frontUploadZone' : 'selfieUploadZone';
                const zone = document.getElementById(zoneId);
                
                zone.innerHTML = `
                    <div class="file-preview">
                        <img src="${e.target.result}" alt="Uploaded ${type}" class="file-preview-image">
                        <button class="remove-file-button" onclick="removeFile('${type}')">Remove file</button>
                        <div class="file-preview-overlay" onclick="removeFile('${type}')">×</div>
                    </div>
                `;
                
                if (type === 'front') {
                    frontIdUploaded = true;
                } else {
                    selfieUploaded = true;
                }
                
                updateSubmitButton();
            };
            reader.readAsDataURL(file);
        }

        function removeFile(type) {
            const zoneId = type === 'front' ? 'frontUploadZone' : 'selfieUploadZone';
            const zone = document.getElementById(zoneId);
            const fileInputId = type === 'front' ? 'frontIdFile' : 'selfieFile';
            const fileInput = document.getElementById(fileInputId);
            
            // Reset the file input
            fileInput.value = '';
            
            // Reset the upload zone
            const uploadText = type === 'front' ? 'Drop front image or click to upload' : 'Drop selfie image or click to upload';
            zone.innerHTML = `
                <div class="upload-text">${uploadText}</div>
                <input type="file" id="${fileInputId}" accept="image/*" onchange="handleFileSelect(event, '${type}')">
            `;
            
            // Update state
            if (type === 'front') {
                frontIdUploaded = false;
            } else {
                selfieUploaded = false;
            }
            
            updateSubmitButton();
        }

        function updateSubmitButton() {
            const submitButton = document.querySelector('.submit-button');
            const isValid = selectedIdType && selectedIdType !== '-- Choose ID Type --' && 
                           frontIdUploaded && selfieUploaded;
            
            submitButton.disabled = !isValid;
        }

        function submitVerification() {
            if (selectedIdType === '-- Choose ID Type --' || !selectedIdType) {
                alert('Please select an ID type');
                return;
            }
            
            if (!frontIdUploaded) {
                alert('Please upload the front of your ID');
                return;
            }
            
            if (!selfieUploaded) {
                alert('Please upload a selfie with your ID');
                return;
            }
            
            alert('Verification submitted successfully! We will review your documents and get back to you.');
            console.log('Submitting verification with:', {
                idType: selectedIdType,
                frontIdUploaded,
                selfieUploaded
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.querySelector('.dropdown-container');
            const options = document.getElementById('dropdownOptions');
            
            if (!dropdown.contains(event.target)) {
                options.classList.remove('show');
            }
        });

        // Update submit button on page load
        document.addEventListener('DOMContentLoaded', function() {
            updateSubmitButton();
        });