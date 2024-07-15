$(".button").click(function () {
  $(".form-container").removeClass("hide-form");
  $(".text-info").addClass("show-form");
});

$(".delete").click(() => {
  $(".form-container").addClass("hide-form");
  $(".text-info").removeClass("show-form");
});

document.getElementById("submitButton").addEventListener("click", function () {
  if (document.getElementById("agree").checked) {
    document.getElementById("checkboxForm").submit();
  } else {
    alert("You must agree to the terms and conditions before submitting.");
  }
});

$("#submitButton").click(function (event) {
  event.preventDefault();

  $("#checkboxForm").trigger("reset");
  $(".form-container").addClass("hide-form");
  $(".text-info").removeClass("show-form");
  document.getElementById("agree").checked = false;
});

$(".c31").click(() => {
  $(".c3-left-image").attr("src", "./Images/slide-1.png");
});

$(".c32").click(() => {
  $(".c3-left-image").attr("src", "./Images/slide-4.png");
});

$(".c33").click(() => {
  $(".c3-left-image").attr("src", "./Images/slide-10.png");
});

/* code for image-slider  */

let page = 0;
let ind = 0;
let n = 12;
$(".right-button").click(() => {
  let ind1 = (ind + 4) % 12;
  $(".img1").attr("src", `./Images/slide-${(ind + 4) % 12}.png`);
  $(".img2").attr("src", `./Images/slide-${(ind + 5) % 12}.png`);
  $(".img3").attr("src", `./Images/slide-${(ind + 6) % 12}.png`);
  $(".img4").attr("src", `./Images/slide-${(ind + 7) % 12}.png`);
  ind += 4;
  if (ind == 12) {
    ind = 0;
  }
  page++;
  if (page == 3) {
    page = 0;
  }

  $(`#cir${page % 3}`).removeClass("inactive");
  $(`#cir${(page + 1) % 3}`).addClass("inactive");
  $(`#cir${(page + 2) % 3}`).addClass("inactive");
});
$(".left-button").click(() => {
  let ind1 = (12 - ind + 1) % 12;
  $(".img1").attr("src", `./Images/slide-${(12 - ind + 1) % 12}.png`);
  $(".img2").attr("src", `./Images/slide-${(12 - ind + 2) % 12}.png`);
  $(".img3").attr("src", `./Images/slide-${(12 - ind + 3) % 12}.png`);
  $(".img4").attr("src", `./Images/slide-${(12 - ind + 4) % 12}.png`);
  ind += 4;
  if (ind == 12) {
    ind = 0;
  }
  page--;
  if (page == -1) {
    page = 2;
  }
  $(`#cir${page % 3}`).removeClass("inactive");
  $(`#cir${(page + 1) % 3}`).addClass("inactive");
  $(`#cir${(page + 2) % 3}`).addClass("inactive");
});

// For go to an URL by clicking a button

$(".text-button").click(function () {
  window.open("https://www.fylehq.com/", "_blank");
});
