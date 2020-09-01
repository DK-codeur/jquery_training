$(document).ready( function() { //tous notre code jqquery ds ça

        //click to hide
    // $('h1').click( function(){

    //     $(this).hide();
    // });

        //dblclick to hide
    // $('.p1').dblclick( function() {

    //     $(this).hide();
    // });

        //click A hide B
    // $('.p2').hide();

    // $('.p1').mouseenter( function() {

    //     $('.p2').show();
    // });

    // $('.p1').mouseleave( function() {

    //     $('.p2').hide();
    // });


        //hover using
    // $('.p2').hide();

    // $('.p1').hover(
    //     function() { $('.p2').show(); },
    //     function() { $('.p2').hide(); }
    // );

        //stay click
    // $('.p2').hide();

    // $('.p1').mousedown( function() {

    //     $('.p2').show();
    // });

    // $('.p1').mouseup( function() {

    //     $('.p2').hide();
    // });

        //keydown keyup using
    // $('#prenoms').keydown( function() {

    //     $(this).css('background-color', 'orange');
    // });

    // $('#prenoms').keyup( function() {

    //     $(this).css('background-color', 'green');
    // });
    
        //keypress
    $('#prenoms').keypress( function(e) {
        var touche = String.fromCharCode(e.which);

        $('#dcaract').text(touche);

    });

        //les formulaire: focus/blur
    // $('#prenoms').focus( function() {

    //     $(this).css('background-color', 'yellow');
    // });

    // $('#prenoms').blur( function() {

    //     $(this).css('background-color', 'purple');
    // });

        //les formulaire: focusin/out
    // $('#fls').focusin( function() {

    //     $(this).css('background-color', 'orange');
    // });

    // $('#fls').focusout( function() {

    //     $(this).css('background-color', 'purple');
    // });

        //les formulaire: change
    // $('#liste').change( function() {

    //     alert('nouvelle option selectionne !');
    // });

        //les formulaire: submit
    // $('#myform').submit( function() {

    //     alert('formulaire envoyé');
    // });

            //bonne syntaxe avec on
    // $('.p2').hide();

    // $('.p1').on('mouseenter', function() {

    //     $('.p2').show();
    // });

    // $('.p1').on('mouseleave', function() {

    //     $('.p2').hide();
    // });

        //recommander
    // $('.p1').on({

    //     mouseenter: function() {
    //         $('.p2').show();
    //     },

    //     mouseleave: function() {
    //         $('.p2').hide();
    //     }
    // });


        //trigger/handler:focus
    // $('#btnT').click(function() {

    //     $('#prenoms').trigger('focus');
    // });

    // $('#btnTh').click(function() {

    //     $('#btnTh').triggerHandler('focus')
    // });
        //off event 'click'
    // $('#btnO').click(function() {
    //     $('#btnT').off('click');
    // });

        //type of event
    // $('#text').on('click mouseenter mouseout mousedown', function(e) {

    //     $('#typeE').text(e.type)
    // });


        //manipulation du DOM
    // let taille = $('h3').css('font-size');

    // $('#test').text('la taille du texte est: '+ taille);

        //text or html
    // $('#test').html('je suis une phrase avec <strong>html</strong>')


        //val() : valeur en direct input
    // $('#nom').keyup(function() {

    //     let valInput = $(this).val();
    //     $('#sp1').text('vous avez saisir : ' + valInput);
    // });   

        //val() : valeur en direct select
    // $('#mylist').change(function() {

    //     let valSelect = $('#mylist').val() || [];
    //     $('#sp2').text('vous avez selectionner : ' + valSelect);
    // });


        //attr() using
    // let att = $('h4').attr('class');
    // $('#valAttr').text('valeur de l\'attribut est : '+ att)

        //multiple attr()
    // $('a').attr({
    //     href: 'file:///F:/VS%20CODE/NaN/PROJET%20BOOTSTRAP/index.html',
    //     target: '_blank'
    // });

        //prop no attr() for dynamic ex: checkbox, selected, value
    $('#c').change(function() {
        let v = $(this);
        $('#sp3').html(
                        'la valeur de l\'attribut : '+ v.attr('checked') +
                        '<br> la valeur de la propriete : '+ v.prop('checked')   
                    );

    });  

        //append() / prepend()
    // $('#b1').click(function() {
    //     $('#p1').append('- texte ajoute apres avec append()');
    // });

    // $('#b2').click(function() {
    //     $('#p2').append('- texte ajoute avant avec prepend()');
    // });


        //remove()
    // $('#btn1').click(function() {
    //     $('div').remove('#div1');
    // });

    // $('#btn2').click(function() {
    //     $('#div2').empty();
    // });

    //     //removeAttr
    // $('#removeAttr').click(function() {
    //     $('#lien').removeAttr('href');
    // });

        //replaceWith()
    // $('#bt1').click(function() {
    //     let rpl = $('.para1').replaceWith('<h3>remplacer par un h3</h3>');
    //     $('#sp4').text('ancien texte: '+ rpl.text());
    // });

        //addClass: ajout / removeClass: supp / toggleClass: modif (conserve+ajoutNew)
    // $('#bt2').click(function() {
    //     $('#monDiv').addClass('myBcolor myAlign mySize');
    // });

    /********************************Animation**************************************************/
            //show(xxx) / hide(xxx)
    $('#btnAnim1').click(function() {
        $('#Tex').show(6000);
    });

    $('#btnAnim2').click(function() {
        $('#Tex').hide(7000);
    });

    $('#btnAnim3').click(function() {
        $('#Tex').toggle(1000);
    });


        //fadeOut(xxx) / fadeIn(xx)
    $('#btnAnim4').click(function() {
        $('#Tex').fadeOut(3000);
    });

    $('#btnAnim5').click(function() {
        $('#Tex').fadeIn(3000);
    });

    $('#btnAnim6').click(function() {
        $('#Tex').fadeToggle(2000);
    });

    $('#btnAnim7').click(function() {
        $('#Tex').fadeTo(1000, 0.1);
    });

        //slide
    $('#btnAnim8').click(function() {
        $('#Tex').slideUp(1000);
    });

    $('#btnAnim9').click(function() {
        $('#Tex').slideDown(1000);
    });

    $('#btnAnim10').click(function() {
        $('#Tex').slideToggle(3000);
    });

        //animate
    $('#btnAnim11').click(function() {
        $('#Tex').animate({width:'-=10%'}, 2000);
    });

    $('#btnAnim12').click(function() {
        $('#Tex').animate({fontSize:'20px'}, 3000);
    });

    $('#btnAnim13').click(function() {
        $('#Tex').animate({left:'100px'}, 2500); //position : relative en css
    });

        //animate full
     $('#btnAnim14').click(function() {
        $('#Tex').animate({width:'-=10%', fontSize:'20px', left:'100px'}, 2000);
    });

        //voir valeur de queue
    // $('#btnAnim15').click(function() {
    //     $('#anim')
    //             .animate({width:'-=10%'}, 5000)
    //             .animate({fontSize:'10px'}, 2000)
    //             .fadeTo(2000, 0.4);
    // });

    // function enAttente(){
    //     let x = $('#anim').queue('fx');
    //     $('#spa1').text(x.length);
    //     setTimeout(enAttente, 10);
    // };
    // enAttente();

        //animer la div
    $('#btnAnim15').click(function() {
        $('#anim')
                .animate({left: '+=200px'}, 2000)
                .animate({top: '+=50px'}, 2000)
                .delay(1000) //for pause
                .queue(function() {
                    $(this).toggleClass('bleu').dequeue(); 
                })
                .delay(2000) //for pause
                .animate({left: '+=200px'}, 2000)
                .animate({top: '+=50px'}, 2000)
    });

        //clearQueue / stop(true/false  ) / finish()
    $('#btnAnim16').click(function() {
        $('#anim').clearQueue();
    })

});    //end jquery code