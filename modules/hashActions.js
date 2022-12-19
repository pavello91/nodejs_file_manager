import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { config } from '../config.js';
import { checkPath } from './checkPath.js';

export const hash = async(path) => {
    const hash = crypto.createHash('sha256');
    const rStream = fs.createReadStream(path);
    rStream.on('data', (chunk) => hash.update(chunk));
    rStream.on('end', () => {
        console.log(hash.digest('hex'));
        console.log('You are currently in ' + config.currentPath);
    });
};

export const hashOperations = (value) => {
    checkPath(value)
        .then((currentPath) => {
            hash(path.join(currentPath));
        })
        .catch(() => {
            console.log('Operation failed');
            console.log('You are currently in ' + config.currentPath);
        });
};