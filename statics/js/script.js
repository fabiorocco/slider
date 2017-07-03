$(() => {
    const timeInterval = 4000;
    const timeTransition = 2000;
    const timeTransitionBubbled = 500;
    const url = 'https://www.skrzypczyk.fr/slideshow.php';
    let autoMode = true;
    let scrolling = false;
    let downloadedImage = 0;
    let slideshow = $('#slideshow');
    let slideshowWidth = slideshow.width();

     function getImages(url) {
         $.getJSON(url, {
             format: 'json'
         }).done((data) => {
             $.each(data, (key, item) => {
                 let attr = {
                     'id': key,
                     'class': 'img'
                 };
                 let image = $('<div>').attr(attr).appendTo('#rail');
                 $('#'+key).css('background-image', 'url('+ item.url +')');
                 downloadedImage += 1;
                 let text = '<div class="text"><h2>' + item.title + '</h2><br><h3>' + item.desc + '</h3></div>'
                 $(text).appendTo('#'+key);
                 $('#rail').width(downloadedImage * slideshowWidth);
                 image.width(slideshowWidth);
                 let liAttr = {
                     'data-key': key,
                     'class': 'indicator-item active'
                 }
                 let li = $('<li>').attr(liAttr).appendTo('.indicator');
                 li.click(clickBubble);
                 fillBubble(0);
             });
         });
    }

    getImages(url);

    function init() {
        if (autoMode) {
            $('#play').hide();
        } else {
            $('#pause').hide();
        }
    }

    init();


    function clickPlay() {
        autoMode = true;
        $('#pause').show();
        $('#play').hide();
    }

    function clickPause() {
        autoMode = false;
    	$('#pause').hide();
    	$('#play').show();
    }

    function clickBubble() {
        if(!$(this).hasClass('active')) {
            let iterate = 0;
            let index = $(this).data('key');
            let activeIndex = $('.active').data('key');
            if (index > activeIndex) {
                iterate = index - activeIndex;
                nextImage(true, iterate);
            } else {
                iterate = activeIndex - index;
                previousImage(true, iterate);
            }
        }
    }

    $('#pause').click(() => {
        clickPause();
    });

    $('#play').click(() => {
        clickPlay();
    });

    $('#next').click(nextImage);

    $('#previous').click(previousImage);

    function fAutoMode(){
    	if (autoMode) {
    		nextImage();
    	}
    }

    function nextImage(bubble = false, iterate = 0) {
    	if(!scrolling){
    		scrolling = true;
    		$('#rail').animate(
    			{'margin-left': '-' + slideshowWidth + 'px'},
    			((bubble) ? timeTransitionBubbled : timeTransition),
                () => {
        			$('#rail').css('margin-left', '0px');
        			$('#rail .img:last').after(
                        $('#rail .img:first')
                    );
                }
    		).promise().done(() => {
                fillBubble($('#rail .img:first').attr('id'));
                displayText();
                scrolling = false;
                if (--iterate > 0) {
                    nextImage(true, iterate);
                }
            });
    	}
    }

    function previousImage(bubble = false, iterate = 0) {
    	if(!scrolling){
            undisplayText();
    		scrolling = true;
    		$('#rail').css('margin-left', '-' + slideshowWidth + 'px');
    		$('#rail .img:first').before($('#rail .img:last'));
    		$('#rail').animate(
    			{'margin-left':'0px'},
                ((bubble) ? timeTransitionBubbled : timeTransition),
    			() => {

    			}
    		).promise().done(() => {
                fillBubble($('#rail .img:first').attr('id'));
                displayText();
                scrolling = false;
                if (--iterate > 0) {
                    previousImage(true, iterate);
                }
            });
    	}
    }

    function fillBubble(id) {
        $('li.active').removeClass('active');
        $('.indicator-item[data-key="' + id + '"]').addClass('active');
    }

    function undisplayText() {
        $('.text').fadeOut('fast');
    }

    function displayText() {
        $('.text').fadeIn('fast');
    }

    setInterval(fAutoMode, timeInterval);

    setInterval(() => {
    	slideshowWidth = slideshow.width();
    	$('#rail').width(downloadedImage*slideshowWidth);
    	$('.img').width(slideshowWidth);
    }, 1);

    $('#container').mouseenter(
        () => {
            autoMode = false;
            $('.container-actions').css('visibility', 'visible');
        }
    )

    $('#container').mouseleave(
        () => {
            autoMode = $('#pause').is(':visible') == true ? true : false;
            $('.container-actions').css('visibility', 'hidden');
        }
    )

    $('.container-actions').css('visibility', 'hidden');

});
