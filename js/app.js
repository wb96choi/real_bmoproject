$(function () {
  
    setInterval(function() {
      let d = new Date();
      let h = d.getHours(); // 시간 변수
      let m = d.getMinutes(); // 분 변수
      let s = d.getSeconds(); // 초 변수
    
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
  
    }, 1000);


    $(function() {
      
    });
  });
  
  