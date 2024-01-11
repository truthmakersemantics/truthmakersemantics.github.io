---
title: Publications
weight: 100
About: A comprehensive bibliography on truthmaker semantics.
menu: main 
---

<script src="/js/pubsearch.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function () {
    // Show the spinner
    document.getElementById('spinner').style.display = 'block';

    // Periodically check for the BibBase content
    var checkBibBaseLoaded = setInterval(function() {
        if (document.querySelector('.bibbase_paper')) {
            // Hide the spinner once BibBase content is detected
            document.getElementById('spinner').style.display = 'none';
            clearInterval(checkBibBaseLoaded);
        }
    }, 100); // Check every 100 milliseconds
});
</script>

This page contains what aims to be a comprehensive bibliography of truthmaker
semantics in logic, philosophy, and linguistics. It may take a while to load, so
please be patient. You can find the source for the bibliography on
<a href="https://github.com/truthmakersemantics/tms-bibliography">
  <i class="fa fa-github fa-xs"></i>GitHub
</a>.
If you find a publication that's not included but you think should be, please
<a href="/contact/">
  <i class="fa fa-envelope fa-xs"></i>contact
</a>
us or directly contribute to the GitHub repository.

You can search the database, too!

<input type="text" id="searchInput" placeholder="Search..">

<div id="bib-container">
  <div id="spinner" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div>
    <script src="https://bibbase.org/show?bib=https://raw.githubusercontent.com/truthmakersemantics/tms-bibliography/main/data/bib/tms.bib&jsonp=1&theme=bullets&hidemenu=false&fullnames=1&showSearch=true"></script>
  </div>
</div>


