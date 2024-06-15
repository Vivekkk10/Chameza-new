document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // Reattach event listener for close button
            const closeButton = document.querySelector('.close-btn');
            if (closeButton) {
                closeButton.addEventListener('click', function() {
                    document.querySelector('.tpoffcanvas-area').classList.remove('active');
                });
            }

        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
