import { config } from './config.js'
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { up } from './modules/nwdActions.js'

console.log(`Welcome to the File Manager, ${config.username}!`);
console.log(`You are currently in ${config.currentPath}`)

const rl = readline.createInterface({ input, output });

console.log(` ${config.username}, please, enter the command!`)

rl.on('line', (input) => {
    if (input.trim() === '.exit') {
        console.log(` Thank you for using File Manager, ${config.username}!`);
        rl.close();
    } else {
        try {
            switch (input) {
                case 'up':
                    up();
                    break;
            }

        } catch (e) {
            console.log('Operation failed');
        }
    }
});

rl.on('SIGINT', () => {
    rl.question(
        'Are you sure you want to exit? ',
        (answer) => {
            if (answer.match(/^y(es)?$/i)) rl.close();
        }
    );
});