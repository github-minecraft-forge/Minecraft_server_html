document.addEventListener('DOMContentLoaded', function() {
    var drawerToggles = document.querySelectorAll('.drawer-toggle');

    drawerToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                document.querySelectorAll('.drawer-content').forEach(function(otherContent) {
                    if (otherContent !== content) {
                        otherContent.style.display = 'none';
                    }
                });
                content.style.display = 'block';
            }
        });
    });
});