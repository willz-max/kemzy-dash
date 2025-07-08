    function goBack() {
            // Navigate back or close the settings
            if (window.history.length > 1) {
                window.history.back();
            } else {
                console.log('Navigate to main screen');
            }
        }