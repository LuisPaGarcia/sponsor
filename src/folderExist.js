const fs = require('fs');
import { createFolder } from './createFolder';
import { path } from './utils/utils';

function folderExist() {
	if (!fs.existsSync(path)) createFolder();
}

export { folderExist };
