window.addEventListener("DOMContentLoaded", function() {

  console.log("Creating an app router");
	var appRouter = new AppRouter();
  Backbone.history.start({ pushState: true });

  /*$("#goToDonations").on("click", function() {
      console.dir(appRouter);
      appRouter.navigate("/donations", {trigger: true});
    });

  $("#enterDonations").on("click", function() {
      appRouter.navigate("/donationform", {trigger: true});
  });*/
  $("#about-tab").on("click", function () {
    appRouter.navigate("/", {trigger: true});
  });

  $("#donations-tab").on("click", function () {
    appRouter.navigate("/donations", {trigger: true});
  });

  $(".donationsList").on("click", function() {
    appRouter.navigate("/donations", {trigger: true});
  });

	$(".donationsForm").on("click", function() {
    appRouter.navigate("/donationform", {trigger: true});
  });


});