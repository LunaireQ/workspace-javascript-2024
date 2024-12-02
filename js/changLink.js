$('body').hide();
$('body').fadeIn(1000);

$('img').hide();
$('a').hide();

$('img').fadeIn(1000);
$('a').fadeIn(1000);

$('h1').ckick(hidecontent);
function hidecontent(){
    $(this).text("Hiding...");
    $('body').children('p').slideToggle();
}

$('a').each(change);
function change(){
    var links = $(this).attr('href');
    console.log(links);
    $(this).attr('href', 'http://www.google.com');
}