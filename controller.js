import { osOperations } from './modules/osOperations.js';
import { cd, up, ls } from './modules/nwdActions.js';
import { hashOperations } from './modules/hashActions.js';
import { cat, add, rn, rm, cp, mv } from './modules/basicOperations.js';
import { compress, decompress } from './modules/zipActions.js';

export const controller = (value) => {
    switch (true) {
        case 'os' === value.substring(0, 2):
            osOperations(value.substring(2).trim());
            break;
        case 'up' === value.substring(0, 2):
            up();
            break;
        case 'cd ' === value.substring(0, 3):
            cd(value.substring(3));
            break;
        case 'ls' === value.substring(0, 2):
            ls();
            break;
        case 'hash ' === value.substring(0, 5):
            hashOperations(value.substring(5));
            break;
        case 'cat' === value.substring(0, 3):
            cat(value.substring(3));
            break;
        case 'add' === value.substring(0, 3):
            add(value.substring(3));
            break;
        case 'rn' === value.substring(0, 2):
            rn(value.substring(2).trim());
            break;
        case 'rm' === value.substring(0, 2):
            rm(value.substring(2).trim());
            break;
        case 'cp' === value.substring(0, 2):
            cp(value.substring(2).trim());
            break;
        case 'mv' === value.substring(0, 2):
            mv(value.substring(2).trim());
            break;
        case 'compress' === value.substring(0, 8):
            compress(value.substring(8).trim());
            break;
        case 'decompress' === value.substring(0, 10):
            decompress(value.substring(10).trim());
            break;
        default:
            console.error('Invalid input');
    }
};