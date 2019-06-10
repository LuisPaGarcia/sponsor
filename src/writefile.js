const fs = require('fs');
import { path, filename } from './utils/utils';
import { folderExist } from './folderExist';
function writeFile(content) {
	folderExist();

	fs.writeFile(`${path}/${filename}`, content, function(err) {
		if (err) throw Error('Falta error writing file');
		console.log('\nThe file .github/FUNDING.yml has been added to your repo.\n');
	});
}

export { writeFile };
