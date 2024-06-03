/**
 * Created by rulyardiansyah on 1/18/2017.
 */

$(document).ready(function() {
  var currentYear = new Date;
  $("#current-year").text(currentYear.getFullYear());

  // DUPLICATE USER LINKS FOR MOBILE VIEWPORT
  // $("#user-links > ul").clone().appendTo("#user-links-helper");

  // PREVENT TO OPEN A LINK FROM ACTIVE MENU
  $("#app-menu .active").click(function() {
    return false;
  });

  // APP MENU ACCORDION
  /* $(".accordion-header").click(function(e) {
    e.preventDefault();
    $(this).closest("li").find(".accordion-content").not(":animated").slideToggle({
      duration: 400
    });
    $(this).toggleClass("chevron-rotated");
  }); */

  // GENERATE SELECT FROM MENU
  $("<select />", {
    "id": "select-menu-helper"
  }).appendTo("#select-menu-helper-wrapper");

  $("<option />", {
    "selected": "selected",
    "value": "",
    "text": "Please select menu..."
  }).appendTo("#select-menu-helper");

  // $("#app-menu .ui-menuitem-link").each(function() {
  $("#app-menu .ui-accordion-content a").each(function() {
    var listOfMenu = $(this);
    $("<option />", {
      "value": listOfMenu.attr("href"),
      "text": listOfMenu.text()
    }).appendTo("#select-menu-helper");
  });

  $("#select-menu-helper").change(function() {
    window.location = $(this).find("option:selected").val();
  });
});



