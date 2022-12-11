import { config } from '../config.js'
import path from 'path';

export const up = () => {
    const newPath = config.currentPath.split(path.sep).slice(0, -1);
    if (newPath.length >= 1) {
        config.currentPath = newPath.join(path.sep);
    }
    console.log(` You are currently in ${config.currentPath}`);
};