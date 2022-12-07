import $ from "jquery";

const duration = 600;

function filterByCity(city) {
  $("[wb-city]").each(function(idx, ele) {
    const isTarget = $(this).attr("wb-city") === city || city === null;
    if (isTarget) {
      $(this).fadeIn(duration);
    } else {
      $(this).fadeOut(duration);
    }
  });
}
