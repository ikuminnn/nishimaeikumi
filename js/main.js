// window.onload = function () {
//   var nav = document.querySelector('.js-nav');
//   var hamburger = document.querySelector('.js-menu');

//   // Meunアイコンをクリックしたらnav指定の要素にopenクラスを追加・削除する
//   hamburger.addEventListener('click', function () {
//     nav.classList.toggle('is-open');
//     // nav.classList.remove('is-open');
//   });
// }

$(".btn").click(function () {
  $(this).toggleClass('is-open');
  $(".nav_content").toggleClass('is-open');
});
$(".nav_content a").click(function () {
  $(".btn").removeClass('is-open');
  $(".nav_content").removeClass('is-open');
});