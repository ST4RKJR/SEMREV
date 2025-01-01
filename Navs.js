$(document).ready(function () {
    // Smooth scrolling for anchor links
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  
    
    $("body").html($("body").html().replace(/&dollar;/g, "₹"));
  
    
    $(".menu-items a").click(function () {
      $("#checkbox").prop("checked", false);
    });
  });

  