const mtg = require('./mtgtop8');

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('fetchAllEvent.txt')
  });
  
  lineReader.on('line', function (line) {
    var list_val = line.split(" ; ");
    try {
        mtg.fetchEventInfo(list_val[4]).then(event_info_arr => {
            event_info_arr.decks.forEach( deck => {
                console.log(list_val[4], ';', deck.id, ';', deck.result, ';', deck.title, ';', deck.player, ';', event_info_arr.title, ';', event_info_arr.format, ';', event_info_arr.players, ';', event_info_arr.date.toDateString())
            });
        });
    } catch (error) {
        
    }

  });
  