var ctx = document.getElementById('pieChart');

pieChart = new Chart(ctx, {
  type: 'pie', // 圖表類型
  data: {
    labels: ['React', 'Angular', 'Vue'], // 標題
    datasets: [
      {
        data: [74, 53, 24], // 資料
        backgroundColor: [
          // 背景色
          '#8ADBEB',
          '#EB9D97',
          '#ABE87D',
        ],
        borderWidth: 1, // 外框寬度
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
        reverse: 'true',
      },
    },
  },
});

$(window).scroll(function (evt) {
  let navbarH = $('.navbar').outerHeight();
  let x = innerHeight - navbarH;
  if ($(window).scrollTop() > x) $('.navbar').addClass('nav-white');
  else $('.navbar').removeClass('nav-white');
});

$('#more_essay').hide();

$('.more_button').click(function () {
  if ($('.more_button').hasClass('active')) {
    $('.more_button').removeClass('active');
    $('.more_button').html('其他');
    $('#more_essay').slideUp();
  } else {
    $('.more_button').addClass('active');
    $('.more_button').html('收回');
    $('#more_essay').slideDown();
  }
});

var s = skrollr.init();
var _skrollr = skrollr.get();
var documentWidth = $(document).width();
if (documentWidth <= 768 && _skrollr !== undefined) {
  _skrollr.destroy();
}

$(document).scroll(function () {
  if ($(window).scrollTop() > 200) $('#headerTitle').fadeOut(300);
  else $('#headerTitle').fadeIn(300);
});
