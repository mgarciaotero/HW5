// File name: make_tiles.js

    // Functions are listed below
    function make_tiles(numTiles, remaining_tiles) {

        // https://api.jquery.com/data/ use custom data fields read
        // from JSON file, data-letter="A" data-value="1" 
        // alert("letter: " + $('div' ).data("letter") );   
        // alert("value: " + $('div').data("value") );

        var letter = "A";
        var value = "1";
        var file = "images/Scrabble_Tile_" + letter + ".jpg";
        //alert(file);

/* MGO  moved main html file
        // https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_html_get
        //$( "span" ).first().text( $( "div" ).data( "test" ).first );
        //$( "span" ).last().text( $( "div" ).data( "test" ).last );
        $( "#str" ).text( " "); // letter
        $( "#one_tile_pts" ).text( "   "); //value
        $( "#numTiles").text(remaining_tiles); // remaining_tiles
*/

        var markup ='\<img class=\"tile\" ';
        markup += ' data-letter=\"' + letter + '\"';
        markup += ' data-value=\"' + value + '\"';
        //markup += ' src=\"images/Scrabble_Tile_A.jpg\"';
        markup += ' src= \"' + file + '\"\>';
        //alert(markup);
        //alert($("img:last-child").html());

        $("#tile_rack").append(markup);

        markup ='\<img class=\"tile\" src=' +
        '\"images/Scrabble_Tile_B.jpg\"\>';
        
        $("#tile_rack").append(markup);
        markup ='\<img class=\"tile\" src=' +
        '\"images/Scrabble_Tile_Z.jpg\"\>';
        $("#tile_rack").append(markup);

    
    }  // end of get tile function

