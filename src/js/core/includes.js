import $ from "jquery";

function loadIncludes(parent) {
  if (!parent) parent = "body";
  $(parent)
    .find("[wb-include]")
    .each(function(i, e) {
      const url = $(e).attr("wb-include");
      $.ajax({
        url,
        success(data) {
          $(e).html(data);
          $(e).removeAttr("wb-include");

          loadIncludes(e);
        }
      });
    });
}
loadIncludes();
