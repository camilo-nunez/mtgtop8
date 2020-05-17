const mtg = require('./mtgtop8');

var  formats = ['ST', 'MO', 'LE', 'VI', 'PI', 'EDH']

formats.forEach( format => {
    mtg.fetchMetaId(format).then(meta_arr => {
        meta_arr.forEach( meta_elem => {

            mtg.fetchFormatEvents(format,meta_elem.id).then(events => {
                events.forEach( event => {
                    console.log(format, ';', meta_elem.metagame, ';', meta_elem.id, ';', event.title, ';', event.id, ';', event.date.toDateString())
                });
            });
        });
    });
});
