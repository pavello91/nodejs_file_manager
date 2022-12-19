import fs from 'fs/promises';
import { config } from '../config.js';
import path from 'path';

export const checkPath = (value) => {
    return new Promise((resolve, reject) => {
        const currentPath = path.join(config.currentPath, value);
        const absolutePath = path.join(value);
        fs.access(currentPath)
            .then(() => {
                resolve(currentPath);
            })
            .catch(() => {
                fs.access(absolutePath)
                    .then(() => {
                        resolve(absolutePath);
                    })
                    .catch(() => console.log('Operation failed'));
            });
    });
};