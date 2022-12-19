import { config } from '../config.js';
import fs from 'fs/promises';
import path from 'path';
import { checkPath } from './checkPath.js';
import { checkIsFile } from './checkFile.js';

export const ls = () => {
    fs.readdir(config.currentPath)
        .then((files) => {
            console.log(files);
            console.log(`You are currently in ${config.currentPath}`);
        })
        .catch(() => console.log('Operation failed'));
};

export const cd = (value) => {
    checkPath(value)
        .then((currentPath) => {
            if (!checkIsFile(currentPath)) {
                config.currentPath = currentPath;
            }
            console.log(`You are currently in ${config.currentPath}`);
        })
        .catch(() => console.log('Operation failed'));
};

export const up = () => {
    const newPath = config.currentPath.split(path.sep).slice(0, -1);
    if (newPath.length >= 1) {
        config.currentPath = newPath.join(path.sep);
    }
    console.log(`You are currently in ${config.currentPath}`);
};