$(document).ready(function () {

   // let path = window.location.href;
   // console.log(path);
   $("#root").load('home.html');

   $(document).ajaxError(function () {
      alert("AJAX request fails.");
   });

   $("#test a").click(function (e) {
      e.preventDefault();
      const page = $(this).data("name");

      if (page != undefined) {
         $.ajax({
            type: "GET",
            url: `${page}.html`,
            // data: "data",
            // dataType: "html",
            success: function (response) {
               $('#root').html(response);
            }
         });
      } else {
         $("#root").load('home.html');
      }

      // window.history.replaceState(null, null, `${page}.html`);


   });









});