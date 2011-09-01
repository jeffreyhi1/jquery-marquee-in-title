/**
* @author: Daniel Carrero
* @link: daniel @ kode.cl
* @link: http://blog.kode.cl/plugin-jquery-para-colocar-una-marquesina-en-el-titulo-de-la-pagina/
*/
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