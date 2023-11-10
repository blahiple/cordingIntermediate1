//リンククリック時、スクロールアニメーション
$(document).ready(function () {
  // ナビゲーションのリンクがクリックされたとき
  $('.header__list').on('click', function (e) {
    //e.preventDefault(); // ページ遷移をキャンセル

    // クリックされたリンクのhref属性の値を取得
    var targetSection = $(this).attr('href');

    // ヘッダーの高さを取得
    //var headerHeight = $('.m-header-container').outerHeight();

    // ターゲットセクションまでスクロール（ヘッダーの高さを引いた位置）
    $('html, body').animate({
      scrollTop: $(targetSection).offset().top
    }, 'slow');
  });
});

//トップへ戻るボタン
$(document).ready(function () {
  var scrollToTopBtn = $(".top-button");

  // 位置に応じてボタンを表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          scrollToTopBtn.fadeIn();
      } else {
          scrollToTopBtn.fadeOut();
      }
  });

  // ボタンをクリックしたらトップへ戻る
  scrollToTopBtn.click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });
});

