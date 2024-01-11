function showDiv() {
  var x = document.getElementById("menu-items");
  if (x.style.display === "none") {
    x.style.display = "inline-flex";
  } else {
    x.style.display = "none";
  }
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("showNavButton").style.display = "none";
  document.getElementById("hideNavButton").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("hideNavButton").style.display = "none";
  document.getElementById("showNavButton").style.display = "block";
}


document.addEventListener('DOMContentLoaded', function () {
  var toggleLinks = document.querySelectorAll('.toggle-link');

  toggleLinks.forEach(function(link, index) {
    var storageKey = 'menuExpandedState' + index;
    var subSections = link.nextElementSibling;
    var icon = link.querySelector('i.fa-solid');
    var originalHref = link.getAttribute('href'); // Store the original href
    var isExpanded = localStorage.getItem(storageKey) === 'true';

    // Set initial state based on localStorage
    subSections.style.display = isExpanded ? 'block' : 'none';
    icon.classList.toggle('fa-angles-down', !isExpanded);
    icon.classList.toggle('fa-angles-up', isExpanded);
    link.href = isExpanded ? originalHref : 'javascript:void(0)'; // Use original href when expanded

    link.addEventListener('click', function(event) {
      isExpanded = subSections.style.display === 'none' || subSections.style.display === '';

      // Toggle subsections, icon class, and href
      subSections.style.display = isExpanded ? 'block' : 'none';
      icon.classList.toggle('fa-angles-down', !isExpanded);
      icon.classList.toggle('fa-angles-up', isExpanded);
      link.href = isExpanded ? originalHref : 'javascript:void(0)';

      // Store the state in localStorage
      localStorage.setItem(storageKey, isExpanded);

      if (!isExpanded) {
        event.preventDefault(); // Prevent default navigation on collapsing
      }
    });
  });
});


function toggleNav(shouldOpen, navId, showButtonId, hideButtonId) {
  var nav = document.getElementById(navId);
  var showNavButton = document.getElementById(showButtonId);
  var hideNavButton = document.getElementById(hideButtonId);

  if (shouldOpen) {
    nav.style.height = "100%";
    showNavButton.style.display = "none";
    hideNavButton.style.display = "block";
  } else {
    nav.style.height = "0%";
    hideNavButton.style.display = "none";
    showNavButton.style.display = "block";
  }
}


