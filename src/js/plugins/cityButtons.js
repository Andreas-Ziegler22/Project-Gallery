import $ from "jquery";

import { onLoadHtmlSuccess } from "../core/includes";

const duration = 600;

function filterByCity(city) {
  $("[wb-city]").each(function(idx, ele) {
    const isTarget = $(this).attr("wb-city") === city || city === null;
    if (isTarget) {
      $(this)
        .parent()
        .removeClass("d-none");
      $(this).fadeIn(duration);
    } else {
      $(this).fadeOut(duration, () => {
        $(this)
          .parent()
          .addClass("d-none");
      });
    }
  });
}

$.fn.cityButtons = function() {
  const cities = new Set();
  $("[wb-city]").each(function(idx, ele) {
    cities.add($(ele).attr("wb-city"));
  });

  const btns = Array.from(cities).map(city => {
    const btn = $("<button>")
      .addClass(["btn", "btn-info"])
      .html(city);
    btn.click(ele => filterByCity(city));
    return btn;
  });

  const btnAll = $("<button>")
    .addClass(["btn", "btn-info", "active"])
    .html("All");
  btnAll.click(ele => filterByCity(null));
  btns.push(btnAll);

  const btnGroup = $("<div>").addClass(["btn-group"]);
  btnGroup.append(btns);

  $(this).html(btnGroup);
  return this;
};

onLoadHtmlSuccess(function() {
  $("[wb-city-buttons]").cityButtons();
});
