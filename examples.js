const mtg = require('./mtgtop8');

var  formats = ['ST', 'MO', 'LE', 'VI', 'PI', 'EDH']

formats.forEach( format => {
    mtg.fetchMetaId(format).then(meta_arr => {
        meta_arr.forEach( meta_elem => {

            mtg.fetchFormatEvents(format,meta_elem.id).then(events => {
                events.forEach( event => {
                    package_row = {
                        format: format,
                        metagame: meta_elem.metagame,
                        metagame_id: meta_elem.id,
                        event_title: event.title,
                        event_id: event.id,
                        event_stars: event.stars,
                        event_bigstars: event.bigstars,
                        event_bigstars: event.date
                    }
                    console.log(package_row)
                    // mtg.fetchEventInfo(event.id).then(event_info_arr => {
                    //     //console.log(event_info_arr.decks)
                    //     event_info_arr.decks.forEach( deck => {
                    //         //console.log(deck)
                    //         mtg.fetchDeck(event.id,deck.id).then(response => {
                                
                    //             try{
                    //                 response.cards.forEach( card => { 
                    //                     console.log('----------------------',format, meta_elem.metagame, event.title, envent.date, event_info_arr.player, event_info_arr.result, event_info_arr.title, deck.player, deck.title, deck.result, card.name, card.count   )
                    //                 })
                    //             }catch (err) {
                    //                 // console.error(err)
                    //             }

                    //             // console.log(response.sideboard)
                                
                    //         });
                    //     })
                    // });
                });
            });
        });
    });
});

// {
//     title: 'MTGO Competitive Modern League',
//     format: 'Modern',
//     stars: 0,
//     bigstars: 0,
//     players: 5,
//     date: 2017-12-20T03:00:00.000Z,
//     decks: [
//       {
//         result: '1',
//         title: 'UR Storm',
//         player: 'vivorilla93',
//         id: 311114
//       },
//       { result: '2', title: 'Humans', player: '_yamadakun_', id: 311115 },
//       {
//         result: '3',
//         title: 'Dredge',
//         player: 'BradPitKeeper',
//         id: 311116
//       },
//       { result: '4', title: 'UrzaTron', player: 'Veveil', id: 311117 },
//       {
//         result: '5',
//         title: 'Gruul Land Loss',
//         player: 'jfry',
//         id: 311118
//       }
//     ]
//   }




// mtg.fetchDeck('25681','390867').then(response => console.log(response));