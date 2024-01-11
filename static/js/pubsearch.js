document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('keyup', function () {
    var searchTerm = searchInput.value.toLowerCase();
    var yearGroups = document.querySelectorAll('.bibbase_group_whole');

    yearGroups.forEach(function (group) {
      var publications = group.querySelectorAll('.bibbase_paper');
      var visibleCount = 0;

      publications.forEach(function (publication) {
        var text = publication.textContent.toLowerCase();
        var match = text.indexOf(searchTerm) !== -1;
        publication.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      // Hide or show the year group based on visibleCount
      group.style.display = visibleCount > 0 ? '' : 'none';
    });
  });
});

