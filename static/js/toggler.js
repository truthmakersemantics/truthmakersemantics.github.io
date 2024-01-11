function toggleContent(iconId, containerId) {
    var icon = document.getElementById(iconId);
    var container = document.getElementById(containerId);

    if (container.style.display === 'none') {
        container.style.display = 'block';
        icon.classList.remove('fa-angles-down');
        icon.classList.add('fa-angles-up');
    } else {
        container.style.display = 'none';
        icon.classList.remove('fa-angles-up');
        icon.classList.add('fa-angles-down');
    }
}
