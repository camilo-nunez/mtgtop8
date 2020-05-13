const mtg = require('./mtgtop8');

var  formats = ['ST', 'MO', 'LE', 'VI', 'PI', 'EDH']

mtg.fetchMetaId('ST').then(response => console.log(response));

mtg.fetchFormatEvents('ST').then(response => console.log(response));

mtg.fetchEventInfo('25681').then(response => console.log(response));

mtg.fetchDeck('25681','390867').then(response => console.log(response));