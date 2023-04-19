function onClickAlert() {
  alert("未実装！");
}
$(function () {
  // ハンバーガーメニューのクリックイベント
  $(".hamburger").click(function () {
    $(".nav").slideToggle();
  });

  // リサイズイベント
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 768) {
      $(".nav").removeAttr("style");
    }
  });
});
