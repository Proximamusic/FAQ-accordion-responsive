 
$('.accordion-question').click(function () { 
    // check if the item has the classes open. if it does that means the accordion-data is showing.
    if($(this).hasClass('open') ){
        // so remove the "open" and "active" class from all the Elements because we only want one data to show at a time.
       
        $('.accordion-data').removeClass('active'); /*if you want all of them to be able to show at the same time, use "this" istead of $(classname)*/
        $('.accordion-question').removeClass('open');
    }else{


//  sinse we are looking at the Element being clicked then its possible that "this" does not have "open" class but others do
// so we remove open and active again from all the Elements.
    
$('.accordion-data').removeClass('active'); //be carefull about the fact that the order here matters, if you put top two removeclass methods at the bottom, just the way in css.
    $('.accordion-question').removeClass('open');
    $(this).addClass('open');
    $(this).next().addClass('active');
    
    }
});



