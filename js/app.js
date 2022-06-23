$(function () {
  
    setInterval(function() {
      let d = new Date();
      let h = d.getHours(); // 시간 변수
      let m = d.getMinutes(); // 분 변수
      let s = d.getSeconds(); // 초 변수
      let day = d.getDay();
      let today = '';  
    
      $(".hour").html(h);
      $(".min").html(m);
      $(".sec").html(s);
    
      if (m > 9) {
          $(".min").html(m);
        } else {
          $(".min").html(`0${m}`);
        };
      if (s > 9) {
        $(".sec").html(s);
      } else {
        $(".sec").html(`0${s}`);
      };
  
      if (h > 11) {
          $(".ampm").html(`PM`);
      } else {
          $(".ampm").html(`AM`);
      };
  
    if(day === 1){
      today = ('MON');
    }
    if(day == 2){
        today = ('TUE');
    }
    if(day === 3){
        today = ('WED');
    }
    if(day == 4){
        today = ('THU');
    }
    if(day == 5){
        today = ('FRI');
    }
    if(day == 6){
        today = ('SAT');
    }
    if(day == 7){
        today = ('SUN');
    }
    $('.weekday').text(today);
    });

    }, 1000);

$(function () {
  $('.btn').click(function() {
    $('.app').css('animation-name', 'bmo_stop')
  });
});
    
  
