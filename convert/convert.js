$(document).ready(function() {
    $("#comment").click(function() {
        window.button = "comment";
    });
    $("#symbols").click(function() {
        window.button = "symbols";
    });
    $("#convert").click(function() {
        if (window.button == "comment" || window.button == null) {
            var maxLength = 0;
            var result = "";
            var text = $('#inputArea').val();
            var textArray = text.split("\n");
            /* Primitive Interator Just To Be Save */
            for (var i = 0; i < textArray.length; i++)
                maxLength = maxLength < textArray[i].length ? textArray[i].length : maxLength;
            
            /* Begin Conversion */
            
                /* First Line */
                result = result.concat("/**");
                for (var i = 0; i < maxLength; i++) result = result.concat("*");
                result = result.concat("**\n");
            
                /* Body */
                for (var i = 0; i < textArray.length; i++) {
                    result = result.concat(" * ").concat(textArray[i]);
                    for (var j = textArray[i].length; j < maxLength; j++)
                        result = result.concat(" ");
                    result = result.concat(" *\n");
                }
            
                /* Last Line */
                result = result.concat(" **");
                for (var i = 0; i < maxLength; i++) result = result.concat("*");
                result = result.concat("**/");            
            
            
            /* End Conversion */
            
            /* Display Result */
            $('#outputArea').html(result);
        } else if (window.button == "symbols") {
            var result = "";
            var text = $('#inputArea').val();
            var textArray = text.split("\n");
            
            /* Begin Conversion */
            
                result = result.concat('"');
                /* Primitive Interator Just To Be Save */
                for (var i = 0; i < textArray.length; i++) {
                    for (var j = 0; j < textArray[i].length; j++)
                        switch (textArray[i][j]) {
                            case '\\','\;','\"':
                                result = result.concat("\\").concat(textArray[i][j]);
                                break;
                            default:
                                result = result.concat(textArray[i][j]);
                                break;
                        }
                    result = result.concat("\\n");
                }
                result = result.concat('"');
            
            /* End Conversion */
            
            /* Display Result */
            $('#outputArea').html(result);
        }
    });
});
