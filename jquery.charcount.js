/*
 * 
 * Character Count JQuery Plugin
 * Version 1.0
 * 
 * Copyright (c) Sandi 'tube' Andrian
 * Website: https://github.com/andriansandi/JQuery-Character-Count
 * Twitter: http://twitter.com/andriansandi
 */

jQuery.fn.CharCount = function(params){
    var p = { 
        counterElement: "display_count"
    };
    
    var counter;
    
    if(params){
        jQuery.extend(p, params);
    }
    
    //update the counter on keypress
    this.keypress(function(){
        counter = this.value.length;
        jQuery('#' + p.counterElement).html(counter);
    });
}