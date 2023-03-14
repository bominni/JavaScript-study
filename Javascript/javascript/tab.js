var button =$(".tab-button"); /* 똑같은 주소를 여러번쓰면 별로 좋지않아서 변수에다가 담아서 사용 */

// for (let i = 0; i < $(".tab-button").length; i++) {
//   /* 반복문 안에 변수는 let사용 */
//   button.eq(i).on("click", function () {
//     openTab(i);
//   });
// }

$('.list').click(function(e) {
    openTab(e.target.dataset.id)
})

function openTab(num) {
  button.removeClass("orange");
  button.eq(num).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(num).addClass("show");
}

// button.eq(0).on('click', function() {
//     button.removeClass('orange');
//     button.eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// button.eq(1).on('click', function() {
//     button.removeClass('orange');
//     button.eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// button.eq(2).on('click', function() {
//     button.removeClass('orange');
//     button.eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });
