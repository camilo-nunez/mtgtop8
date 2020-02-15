var mtg = require('./mtgtop8');

var  formats = ['ST', 'MO', 'LE', 'VI', 'PI', 'EDH']

mtg.metaId('ST',function(err, meta_ids) {
	console.log(meta_ids)
});

// Get a list of events
mtg.formatEvents('ST', 52, 1, function(err, events) {
	if (err) return console.error(err);

	// Get player results and decks about a specific event
	mtg.event(events[0].id, function(err, event) {
		if (err) return console.error(err);

		console.log(event);
	});
});