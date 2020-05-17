const mtg = require('./mtgtop8');

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('fetchEventInfo.txt')
  });
  
  lineReader.on('line', function (line) {
    var list_val = line.split(" ; ");
    try {
        mtg.fetchDeck(list_val[0], list_val[1]).then(response => {
            response.cards.forEach( card => { 
                console.log(list_val[0], ';', list_val[1], ';', response.player, ';', response.result, ';', card.count, ';', card.name, ';', 'no-sideboard')
            })
            response.sideboard.forEach( card => { 
                console.log(list_val[0], ';', list_val[1], ';', response.player, ';', response.result, ';', card.count, ';', card.name, ';', 'sideboard')
            })
        });
    } catch (error) {
        
    }

  });
  