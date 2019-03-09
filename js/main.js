$(".arrow-down").click(function() {
  $(this).next(".overlay").slideToggle('fast');

  if ($(this).data('rotated') == true) {
    $(this).css('transform', 'rotate(0deg)');
    $(this).data('rotated', false);
  } else {
    $(this).css('transform', 'rotate(180deg)');
    $(this).data('rotated', true);
  }
})
