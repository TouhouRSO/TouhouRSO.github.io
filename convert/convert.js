$(document).ready(function() {
    $("#convert").click(function() {
        var maxLength = 0;
        var result = "";
        var text = $('#inputArea').val();
        var textArray = text.split("\n");
        /* Primitive Interator Just To Be Save */
        for (var i = 0; i < textArray.length; i++)
            maxLength = maxLength < textArray[i].length ? textArray[i].length : maxLength;
        
        // Begin Conversion
            // First Line
            result = result.concat("/**");
            for (var i = 0; i < maxLength; i++) result = result.concat("*");
            result = result.concat("**\n");
        
            // Body
            for (var i = 0; i < textArray.length; i++) {
                result = result.concat(" * ").concat(textArray[i]);
                for (var j = textArray[i].length; j < maxLength; j++)
                    result = result.concat(" ");
                result = result.concat(" *\n");
            }
        
            // Last Line
            result = result.concat(" **");
            for (var i = 0; i < maxLength; i++) result = result.concat("*");
            result = result.concat("**/");            
        
        
        // End Conversion
        
        
        $('#outputArea').html(result);
    });
});
