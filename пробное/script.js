jQuery(".cookie-bar").css("opacity","1");
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 30*24*60*60*1000;
    now.setTime(expireTime);
    if (document.cookie.indexOf("ModalShown=true") < 0) {
        jQuery("#cookie-button").click(function () {
            document.cookie = "ModalShown=true; expires="+now.toGMTString()+";path=/";      
        });
    } 
    else {
        jQuery(".cookie-bar").remove();
    }

 //  cookie hide show
    $('.cookie-bar .cookie-bar-inner #cookie-button').click(function(){
        var _this = jQuery(this);
        jQuery(this).closest(".cookie-bar").slideUp();
        var headerHeight = jQuery('header').innerHeight();
        setTimeout(function(){
            _this.closest(".cookie-bar").remove();
        },300);
    });