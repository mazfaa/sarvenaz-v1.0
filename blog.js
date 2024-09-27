$(document).ready(function () {
  $("div#hamburger").on("click", function () {
    alert(1);
    $("ul#dropdown-nav").toggleClass("hidden");
    setTimeout(() => {
      $("ul#dropdown-nav").toggleClass("translate-y-0 opacity-100");
    }, 10); // Timeout ensures the transition kicks in after removing 'hidden'
  });
});
