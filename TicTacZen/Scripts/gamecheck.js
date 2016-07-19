// var oneClick = 0;
//
// $('.cell').click(function() {
//   var tally = oneClick ++;
//   if ( tally % 2 === 0 ) {
//     if ( $(this).children('.O').hasClass('active')){
//       oneClick --;
//     } else{
//       $(this).children('.X').addClass('active');
//     }
//   } else {
//     if ( $(this).children('.X').hasClass('active')){
//       oneClick --;
//     } else{
//       $(this).children('.O').addClass('active');
//     }
//   }
//
//   var xChild1 = $('.cell:nth-child(1)').children('.X').hasClass('active'),
//   oChild1 = $('.cell:nth-child(1)').children('.O').hasClass('active'),
//   xChild2 = $('.cell:nth-child(2)').children('.X').hasClass('active'),
//   oChild2 = $('.cell:nth-child(2)').children('.O').hasClass('active'),
//   xChild3 = $('.cell:nth-child(3)').children('.X').hasClass('active'),
//   oChild3 = $('.cell:nth-child(3)').children('.O').hasClass('active'),
//   xChild4 = $('.cell:nth-child(4)').children('.X').hasClass('active'),
//   oChild4 = $('.cell:nth-child(4)').children('.O').hasClass('active'),
//   xChild5 = $('.cell:nth-child(5)').children('.X').hasClass('active'),
//   oChild5 = $('.cell:nth-child(5)').children('.O').hasClass('active'),
//   xChild6 = $('.cell:nth-child(6)').children('.X').hasClass('active'),
//   oChild6 = $('.cell:nth-child(6)').children('.O').hasClass('active'),
//   xChild7 = $('.cell:nth-child(7)').children('.X').hasClass('active'),
//   oChild7 = $('.cell:nth-child(7)').children('.O').hasClass('active'),
//   xChild8 = $('.cell:nth-child(8)').children('.X').hasClass('active'),
//   oChild8 = $('.cell:nth-child(8)').children('.O').hasClass('active'),
//   xChild9 = $('.cell:nth-child(9)').children('.X').hasClass('active'),
//   oChild9 = $('.cell:nth-child(9)').children('.O').hasClass('active');
//
//   if(  xChild1 && xChild2 && xChild3 ){
//     $('.top-hor').addClass('active');
//     $('.X'-wins').addClass('active');
//   } else if(  oChild1 && oChild2 && oChild3 ){
//     $('.top-hor').addClass('active');
//     $('.o-wins').addClass('active');
//   } else if(  xChild4 && xChild5 && xChild6 ){
//     $('.mid-hor').addClass('active');
//     $('.X'-wins').addClass('active');
//   } else if(  oChild4 && oChild5 && oChild6 ){
//     $('.mid-hor').addClass('active');
//     $('.o-wins').addClass('active');
//   } else if(  xChild7 && xChild8 && xChild9 ){
//     $('.bottom-hor').addClass('active');
//     $('.X'-wins').addClass('active');
//   } else if(  oChild7 && oChild8 && oChild9 ){
//     $('.mid-hor').addClass('active');
//     $('.o-wins').addClass('active');
//   } else if(  xChild1 && xChild4 && xChild7 ){
//     $('.left-vert').addClass('active');
//     $('.X'-wins').addClass('active');
//   } else if(  oChild1 && oChild4 && oChild7 ){
//     $('.left-vert').addClass('active');
//     $('.o-wins').addClass('active');
//   } else if(  xChild2 && xChild5 && xChild8 ){
//     $('.mid-vert').addClass('active');
//     $('.X'-wins').addClass('active');
//   } else if(  oChild2 && oChild5 && oChild8 ){
//     $('.mid-vert').addClass('active');
//     $('.o-wins').addClass('active');
//   } else if(  xChild3 && xChild6 && xChild9 ){
//     $('.right-vert').addClass('active');
//     $('.X'-wins').addClass('active');
//   } else if(  oChild3 && oChild6 && oChild9 ){
//     $('.right-vert').addClass('active');
//     $('.o-wins').addClass('active');
//   } else if(  xChild1 && xChild5 && xChild9 ){
//     $('.ltr-diag').addClass('active');
//     $('.X'-wins').addClass('active');
//   } else if(  oChild1 && oChild5 && oChild9 ){
//     $('.ltr-diag').addClass('active');
//     $('.o-wins').addClass('active');
//   } else if(  xChild3 && xChild5 && xChild7 ){
//     $('.rtl-diag').addClass('active');
//     $('.X'-wins').addClass('active');
//   } else if(  oChild3 && oChild5 && oChild7 ){
//     $('.rtl-diag').addClass('active');
//     $('.o-wins').addClass('active');
//   }
// });
//
// $('.js-wins, .reset').on('click', function(){
//   $('.js-wins').removeClass('active');
//   $('.X').removeClass('active');
//   $('.O').removeClass('active');
//   $('.red-line').removeClass('active');
//   oneClick = 0;
// });
