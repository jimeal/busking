//회원가입 약관 동의
$("#signChkAll").on("click", function(){
  if($(this).prop("checked") == true){
    $(".signYn").prop("checked", true);
  }else{
    $(".signYn").prop("checked", false);
  }
});

$(".signYn").on("click", function(){
  if($(this).prop("checked") == false){
    $("#signChkAll").prop("checked", false);
  }
});

$(".terms-btn").on("click", function(){
  if($("#signChk01").prop("checked") == false){
    alert("이용약관 동의가 필요합니다.");
    return false;
  }

  $("#form").submit();
});


	//SWIPER
	new Swiper('.main-notice .swiper-container', {
		autoplay: {
				delay: 5000,
		},
		direction: 'vertical', // 수직 슬라이드
		//autoplay: true, // 자동 재생 여부
		loop: true // 반복 재생 여부
	});
