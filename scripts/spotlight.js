$(window).mousemove(function(e){
    let w = $('.spotlight').innerWidth(),
    h = $('.spotlight').innerHeight(),
    t = e.pageY - $('.spotlight').offset().top,
    l = e.pageX - $('.spotlight').offset().left;
$('.spotlight').css('background-image', 'radial-gradient(circle at '+ (l / w * 100) +'% '+ (t / h * 100) +'%, transparent 80px, rgba(0, 0, 0, 0.8) 120px)');
});  