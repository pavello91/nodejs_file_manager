import { getName } from './modules/getName.js';

export const config = {
    username: getName(),
    currentPath: process.env['HOME'],
};