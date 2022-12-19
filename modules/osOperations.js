import os from 'os';
import { config } from '../config.js';
import { cpus } from './cpus.js';

export const osOperations = (value) => {
    switch (value) {
        case '--EOL':
            console.log(JSON.stringify(os.EOL));
            break;
        case '--cpus':
            cpus();
            break;
        case '--homedir':
            console.log(os.homedir());
            break;
        case '--username':
            console.log(os.userInfo().username);
            break;
        case '--architecture':
            console.log(os.arch());
            break;
        default:
            console.error('Invalid input');
    }
    console.log(`You are currently in ${config.currentPath}`);
};