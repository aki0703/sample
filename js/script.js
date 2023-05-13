jQuery(".drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery(".drawer-icon").toggleClass("is-active");
  jQuery(".drawer-content").toggleClass("is-active");
  jQuery(".drawer-background").toggleClass("is-active");
  return false;
})

$( '.drawer-content__item a' ).on( 'click', function(e) {
  e.preventDefault();
  jQuery(".drawer-icon").removeClass("is-active");
  jQuery(".drawer-content").removeClass("is-active");
  jQuery(".drawer-background").removeClass("is-active");
});





const swiper = new Swiper('.swiper', {
  loopedSlides: 6,
  loop: true,
  spaceBetween: 20,
  width: 274,

  breakpoints: {
    768: {
      loop: true,
      width: 400,
      loopedSlides: 6,
      spaceBetween: 40,

    }
  },


  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },


});

// アコーディオン

jQuery('.faqs-box-q').on('click', function () {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.faqs-box-icon').toggleClass('is-open');
});




new WOW().init();

$(function () {
  // header
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > $('#js-top').outerHeight()) {
      $('body').addClass('-scrolled');
    } else {
      $('body').removeClass('-scrolled');
    }
  });

  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function () {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position - $('#js-header').outerHeight()
      },
      speed
    );
    return false;
  });

  // wowjs
  new WOW().init();

  //Google form
  let $form = $('#js-form')
  let $form2 = $('#js-form2')
  $form.submit(function (event) {
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //送信成功の処理
          $form.slideUp();
          $form2.slideUp()
          $("#js-success").slideDown();
        },
        200: function () {
          //送信失敗の処理
          $form.slideUp();
          $form2.slideUp()
          $("#js-error").slideDown();
        }
      }
    });
    event.preventDefault();
  });

  //フォームの入力確認
  let $submit = $('#js-submit')
  $('#js-form input , #js-form textarea').on('change', function () {
    if (
      $('#js-form input[name="entry.932817925"]').val() !== "" &&
      $('#js-form input[name="entry.409811250"]').val() !== "" &&
      $('#js-form input[name="entry.819498096"]').prop('checked') === true
    ) {
      //全て入力されているとき
      $submit.prop('disabled', false)
      $submit.addClass('-active')
    } else {
      //全て入力されていないとき
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  })

  //全角カナチェック
  $("input[name='entry.409811250']").blur(function () {
    if (!$(this).val().match(/^([ァ-ン]|ー)+$/)) {
      //実行内容
      $(this).val('');
      alert('全角カタカナで入力してください。')
    }
  });
  // スクロール検知
  jQuery(window).on("scroll", function () {
    // トップから100px以上スクロールしたら
    if (100 < jQuery(this).scrollTop()) {
      // is-showクラスをつける
      jQuery('.to-top').addClass('is-show');
    } else {
      // 100pxを下回ったらis-showクラスを削除
      jQuery('.to-top').removeClass('is-show');
    }
  });

  jQuery('.to-top').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

});
