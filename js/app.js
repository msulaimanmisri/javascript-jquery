// $(".cardbox").hide();

// $(".cardbox").click(function () {
//   alert("you just clicked me with jQuery!");
// });

/**
 * Ini cara untuk select satu per satu
 */
// $("#flashMsg").hide();
// $("#flashMsg").slideDown(2000);
// $("#flashMsg").delay(3000);
// $("#flashMsg").slideUp();

/**
 * Ini untuk cara untuk kita run semua sekaligus pada selector yang sama
 */
// $("#flashMsg").hide().slideDown(1500).delay(3000).slideUp(1500);

/**
 * Setter & Getter
 */
// let title = "Allahuakbar";
// let content = "<b>SubhanaAllah</b>";

// $(".blogPostTitle").text(title);
// $(".blogPostContent").html(content);

/**
 * Preview code from html
 */

$("#btnPreview").click(function () {
  var title = $("#blogTitleInput").val();

  var content = $("#contentInput").val();

  $(".blogTitleReview").text(title);
  $(".blogContentReview").html(content);
});

$(selector).slideUp();
