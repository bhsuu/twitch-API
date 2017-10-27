$(document).ready(function() {
  var streamArr = [
    "bmkibler",
    "doublelift",
    "trumpSC",
    "freecodecamp",
    "a_seagull",
    "scarra",
    "fakech212",
    "imaqtpie"
    
  ];

  for (var i = 0; i < streamArr.length; i++) {
    var channelURL =
      "https://wind-bow.glitch.me/twitch-api/channels/" + streamArr[i];
    var streamURL =
      "https://wind-bow.glitch.me/twitch-api/streams/" + streamArr[i];
 

        $.get(channelURL).then(function(data){
                  if (data.status == 404) {
          $("#streamer").append("Channel Not Found", "<br/>");
          $("#icon").append("<br/>");
        } else {
          $("#streamer").append(
            '<a href = "' + data.url + '" target =blank >' + data.name + "</a>" +
              "<br/>"
          );
          $("#icon").append(
            '<img style = "width:25px" src= "' + data.logo + '" + ><br/>'
          );
        }   
        })
         $.ajax({
           url: streamURL,
           async:false
         })
           .then(function(data2){
        if (data2.stream == null) {
          $("#status").append("offline" + "<br/>");
          $("#game").append("<br/>");
        } else if (data2.stream.stream_type == "live") {
          $("#status").append("online" + "<br/>");
          $("#game").append(data2.stream.game + "<br/>");
        }
      });
      } //for loop1
}); //document ready

    
/*    function channelPromise() {
      return new Promise(function(resolve, reject) {
        $.ajax({
          url: channelURL
        });
      });
    } //channelPromise
    function streamPromise() {
      return new Promise(function(resolve, reject) {
        $.ajax({
          url: streamURL
        }); //ajax
      });
    } // streamPromise
    var promise = channelPromise();
    var status = streamPromise();

    promise
      .then(function(data) {
        if (data.status == 404) {
          $("#streamer").append(data.message, "<br/>");
          $("#icon").append("<br/>");
        } else {
          var logo = data.logo;
          $("#streamer").append(
            '<a href = "' +
              data.url +
              '" target =blank >' +
              data.name +
              "</a>" +
              "<br/>"
          );
          $("#icon").append(
            '<img style = "width:35px" src= "' + logo + '" + ><br/>'
          );
        }
        return status;
      })
      .then(function(data2) {
        if (data2.stream == null) {
          $("#status").append("offline" + "<br/>");
          $("#game").append("<br/>");
        } else if (data2.stream.stream_type == "live") {
          $("#status").append("online" + "<br/>");
          $("#game").append(data2.stream.game + "<br/>");
        }
      });
   */