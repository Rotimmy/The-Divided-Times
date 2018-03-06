

$('.international').on('click',function(event){
  event.preventDefault();
  // $('.international').toggleClass('active');
  $('#international-drop').show();
  $('#politics-drop').hide().removeClass('active');
  $('#business-drop').hide().removeClass('active');
  $('#technology-drop').hide().removeClass('active');
  $('#culture-drop').hide().removeClass('active');
  $('#blogs-drop').hide().removeClass('active');

  if ($(this).hasClass('active')) {
    $('#slide-down').slideUp(200);
    $(this).removeClass('active');
  } else {
    $('#slide-down').slideDown(200);
    $('#primary-nav li').removeClass('active');
    $(this).addClass('active');
  }
});

$('.politics').on('click',function(event){
  event.preventDefault();
  $('#politics-drop').show();
  $('#international-drop').hide().removeClass('active');
  $('#business-drop').hide().removeClass('active');
  $('#technology-drop').hide().removeClass('active');
  $('#culture-drop').hide().removeClass('active');
  $('#blogs-drop').hide().removeClass('active');

  if ($(this).hasClass('active')) {
    $('#slide-down').slideUp(200);
    $(this).removeClass('active');
  } else {
    $('#slide-down').slideDown(200);
    $('#primary-nav li').removeClass('active');
    $(this).addClass('active');
  }
});

$('.business').on('click',function(event){
  event.preventDefault();
  $('#business-drop').show();
  $('#politics-drop').hide();
  $('#international-drop').hide();
  $('#technology-drop').hide();
  $('#culture-drop').hide();
  $('#blogs-drop').hide();

  if ($(this).hasClass('active')) {
    $('#slide-down').slideUp(200);
    $(this).removeClass('active');
  } else {
    $('#slide-down').slideDown(200);
    $('#primary-nav li').removeClass('active');
    $(this).addClass('active');
  }
});

$('.technology').on('click',function(event){
  event.preventDefault();
  $('#technology-drop').show();
  $('#politics-drop').hide();
  $('#business-drop').hide();
  $('#international-drop').hide();
  $('#culture-drop').hide();
  $('#blogs-drop').hide();

  if ($(this).hasClass('active')) {
    $('#slide-down').slideUp(200);
    $(this).removeClass('active');
  } else {
    $('#slide-down').slideDown(200);
    $('#primary-nav li').removeClass('active');
    $(this).addClass('active');
  }
});

$('.culture').on('click',function(event){
  event.preventDefault();
  $('#culture-drop').show();
  $('#politics-drop').hide();
  $('#business-drop').hide();
  $('#technology-drop').hide();
  $('#international-drop').hide();
  $('#blogs-drop').hide();

  if ($(this).hasClass('active')) {
    $('#slide-down').slideUp(200);
    $(this).removeClass('active');
  } else {
    $('#slide-down').slideDown(200);
    $('#primary-nav li').removeClass('active');
    $(this).addClass('active');
  }
});

$('.blogs').on('click',function(event){
  event.preventDefault();
  $('#blogs-drop').show();
  $('#politics-drop').hide();
  $('#business-drop').hide();
  $('#technology-drop').hide();
  $('#international-drop').hide();
  $('#culture-drop').hide();

  if ($(this).hasClass('active')) {
    $('#slide-down').slideUp(200);
    $(this).removeClass('active');
  } else {
    $('#slide-down').slideDown(200);
    $('#primary-nav li').removeClass('active');
    $(this).addClass('active');
  }
});

$('#slide-down').on('mouseleave', function(){
  $('#primary-nav li').removeClass('active');
  $('#slide-down').slideUp(200);
})
