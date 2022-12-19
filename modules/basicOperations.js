import path from 'path';
import fs from 'fs';
import { config } from '../config.js';
import { checkPath } from './checkPath.js';
import { checkIsFile } from './checkFile.js';
import { parseString } from './parseString.js';

export const cat = (value) => {
    checkPath(value.trim())
        .then((currentPath) => {
            if (checkIsFile(currentPath)) {
                let data = [];
                const rStream = fs.createReadStream(path.join(currentPath));
                rStream.on('data', (chunk) => {
                    data.push(chunk.toString());
                });
                rStream.on('error', () => {
                    console.log('Operation failed');
                });
                rStream.on('end', () => {
                    console.log(data.join(''));
                    console.log(`You are currently in ${config.currentPath}`);
                });
            }
        })
        .catch(() => console.log('Operation failed'));
};

export const add = async(value) => {
    const filePath = path.join(config.currentPath, value.trim());
    const wStream = fs.createWriteStream(filePath);
    wStream.on('error', () => {
        console.log('Operation failed');
    });
    wStream.on('finish', () => {
        console.log(`Created: ${value}`);
        console.log(`You are currently in ${config.currentPath}`);
    });
    wStream.close();
};

export const rn = (value) => {
    try {
        const parsingString = parseString(value);
        checkPath(parsingString[0]).then((currentPath) => {
            const newFileName = path.join(config.currentPath, parsingString[1]);
            fs.promises.rename(currentPath, newFileName).then(() => {
                console.log(`Renamed: ${parsingString[0]} to ${parsingString[1]}`);
                console.log(`You are currently in ${config.currentPath}`);
            });
        });
    } catch (e) {
        console.log('Operation failed');
    }
};

export const rm = (value) => {
    try {
        checkPath(value.trim()).then((currentPath) => {
            fs.promises.unlink(currentPath).then(() => {
                console.log(`Deleted: ${value}`);
                console.log(`You are currently in ${config.currentPath}`);
            });
        });
    } catch (e) {
        console.log('Operation failed');
    }
};

export const cp = (value) => {
    try {
        const arrayPath = [];
        const parsingString = parseString(value);
        const fileName = path.basename(parsingString[0]);

        arrayPath.push(checkPath(parsingString[0]));
        arrayPath.push(checkPath(parsingString[1]));

        Promise.all(arrayPath)
            .then((allPath) => {
                const correctPath = path.join(allPath[1], fileName);

                const rStream = fs.createReadStream(allPath[0]);
                const wStream = fs.createWriteStream(correctPath);

                rStream.pipe(wStream).on('close', () => {
                    console.log(`Copied: ${fileName} to ${parsingString[1]}`);
                    console.log(`You are currently in ${config.currentPath}`);
                });
            })
            .catch(() => console.log('Operation failed'));
    } catch (e) {
        console.log('Operation failed');
    }
};

export const mv = (value) => {
    try {
        const arrayPath = [];
        const parsingString = parseString(value);
        const fileName = path.basename(parsingString[0]);

        arrayPath.push(checkPath(parsingString[0]));
        arrayPath.push(checkPath(parsingString[1]));

        Promise.all(arrayPath)
            .then((allPath) => {
                const correctPath = path.join(allPath[1], fileName);

                const rStream = fs.createReadStream(allPath[0]);
                const wStream = fs.createWriteStream(correctPath);

                rStream.pipe(wStream).on('close', () => {
                    fs.promises
                        .unlink(allPath[0])
                        .then(() => {
                            console.log(`Movied: ${fileName} to ${parsingString[1]}`);
                            console.log(`You are currently in ${config.currentPath}`);
                        })
                        .catch(() => console.log('Operation failed'));
                });
            })
            .catch(() => console.log('Operation failed'));
    } catch (e) {
        console.log('Operation failed');
    }
};