#!/usr/bin/env node
import { writeFile } from './writefile';
import { funding } from './utils/utils';
var prompt = require('prompt');

const schema = {
	properties: {
		github: {
			description: 'Enter you Gihub user: ',
			type: 'string'
		},
		patreon: {
			description: 'Enter you Patreon user: ',
			type: 'string'
		},
		open_collective: {
			description: 'Enter you Open Collective user: ',
			type: 'string'
		},
		community_bridge: {
			description: 'Enter you Community Bridge user: ',
			type: 'string'
		},
		paypal: {
			description: 'Enter you Paypal user: ',
			type: 'string'
		}
	}
};

prompt.start();
console.log('\nPlease enter your sponsors options\n');
prompt.get(schema, function(err, result) {
    if (err) throw Error('Fatal error');
    
	const content = funding(result);
	writeFile(content);
});
