$(document).ready(function() {
    
    /* Intro Stuff */
    $('#inputAreaA').html("Template=[text]");
    $('#inputAreaB').html("add text here");
    
    
    /* Input Button onclick */
    $("#input").click(function() {
        if ($("#inputAreaA")[0].selectionStart == $("#inputAreaA")[0].selectionEnd)
          $("#inputAreaA").select();
        else
          $("#inputAreaB").select();
    });
    /* Output Button onclick */
    $("#output").click(function() {
        $("#outputArea").select();
    });
    /* Comment Button onclick */
    $("#comment").click(function() {
        window.button = "comment";
        $("#convert").click();
    });
    /* Symbols Button onclick */
    $("#symbols").click(function() {
        window.button = "symbols";
        $("#convert").click();
    });
    /* Convert Button onclick */
    $("#convert").click(function() {
        if (window.button == "comment" || window.button == null) {
            var maxLength = 0;
            var template = $('#inputAreaA').val().indexOf("[text]");
            var result = "";
            var textA = $('#inputAreaA').val();
            var textB = $('#inputAreaB').val();
            var textArray = textB.split("\n");
            /* Primitive Interator Just To Be Save */
            for (var i = 0; i < textArray.length; i++)
                maxLength = maxLength < textArray[i].length ? textArray[i].length : maxLength;
            
            /* Begin Conversion */
                /* First Line */
                if (template != -1)
                    result = result.concat(textA.substring(0, template));
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
                if (template != -1)
                    result = result.concat(textA.substring(template + 6, textA.length));
            
            
            /* End Conversion */
            
            /* Display Result */
            $('#outputArea').html(result);
        } else if (window.button == "symbols") {
            var template = $('#inputAreaA').val().indexOf("[text]");
            var result = "";
            var textA = $('#inputAreaA').val();
            var textB = $('#inputAreaB').val();
            var textArray = textB.split("\n");
            
            /* Begin Conversion */
                if (template != -1)
                    result = result.concat(textA.substring(0, template));
                result = result.concat('"');
                /* Primitive Interator Just To Be Save */
                for (var i = 0; i < textArray.length; i++) {
                    for (var j = 0; j < textArray[i].length; j++)
                        switch (textArray[i][j]) {
                            case '\\':
                            case '\"':
                            case '\;':
                            case '"' :
                            case '\'':
                                result = result.concat("\\").concat(textArray[i][j]);
                                break;
                            default:
                                result = result.concat(textArray[i][j]);
                                break;
                        }
                    result = result.concat("\\n");
                }
                result = result.concat('"');
                if (template != -1)
                    result = result.concat(textA.substring(template + 6, textA.length));
            
            /* End Conversion */
            
            /* Display Result */
            $('#outputArea').html(result);
        }
    });
    !function frame() {
        $('#convert').click()
        requestAnimationFrame(frame)
    }()
});
