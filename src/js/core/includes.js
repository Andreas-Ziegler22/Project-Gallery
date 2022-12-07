import $ from "jquery";

const loadHtmlSuccessCallbacks = [];

export function onLoadHtmlSuccess(callback) {
  if (!loadHtmlSuccessCallbacks.includes(callback)) {
    loadHtmlSuccessCallbacks.push(callback);
  }
}

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

          loadHtmlSuccessCallbacks.forEach(callback => callback(data));
          loadIncludes(e);
        }
      });
    });
}
loadIncludes();
