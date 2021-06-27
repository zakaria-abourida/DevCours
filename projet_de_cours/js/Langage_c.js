
// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
// 
// GET YOUR API HERE https://console.developers.google.com/apis/api


// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg



$(document).ready(function () {

    var key = "AIzaSyB0g18qd3CdPLsiRLBcyZS7ldD8ruerbgs";
    var playlistId = 'PLFHvrovU0ghFexq8P3ntuAbI0IjwIEVG_';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
            
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('.test').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
        });
    }

		// CLICK EVENT
    $('.test').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
     
      
        
    });




    
    // $( function() {
    //     $(".test").draggable({ containment: 'window',opacity:'0.2'});
      
    //   });

    
    //   $(window).on("resize",function(){
		
	// 	$(".test").animate({
    //        marginTop :'50px',
           


	// 	});

 
	});
    $( function() {
        $(".cardd").animate({
    
            width: "540px",  
      },2000);
    
      $(".carousel").animate({
    
    left: "0px",  
    },2000);

  

    
    });
    



// });




//     $(window).on("resize", function () {
//         if($( window ).width(1039))
//         {
//             $(".test").animate({
    
//                 width: "80%",
//                    display: "block",
//                   float : "left",
//                    top: "100px",
//                    margin:  "auto",
//                 marginLeft: "50px",
                
                
//             },9000);
//         }
//     else
//     {
//         return;
      
//     }
       
        
//     });


