(function( $ ){
    $.fn.marqueeTitle = function(options) {
        var settings = {
            'message'	: $(document).attr("title"),
            'time'		: 200
        };
        return this.each(function() {        
            if ( options ) { 
                $.extend( settings, options );
            }
            $(this).data(
                setInterval(function(){
                    $(document).attr("title", settings.message);
                    settings.message = settings.message.substring(1,settings.message.length)+ settings.message.charAt(0); 
                },settings.time)
                );
        });

    };
})( jQuery );