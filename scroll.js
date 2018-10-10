"use strict";
document.addEventListener("DOMContentLoaded", function() {
  var toTopLink = document.querySelector("#totop");
  if (!toTopLink) {
    throw new Error("ページ先頭に戻るボタンが存在しません");
  }
  toTopLink.addEventListener("click", function(e) {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
});
