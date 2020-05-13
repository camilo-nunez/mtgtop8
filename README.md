# mtgtop8

Fetch data from http://mtgtop8.com. Useful to gather events and deck information.

## Usage

``` js
const mtg = require('./mtgtop8');

var  formats = ['ST', 'MO', 'LE', 'VI', 'PI', 'EDH']

mtg.fetchMetaId('ST').then(response => console.log(response));

mtg.fetchFormatEvents('ST').then(response => console.log(response));

mtg.fetchEventInfo('25681').then(response => console.log(response));

mtg.fetchDeck('25681','390867').then(response => console.log(response));
```

## License
MIT