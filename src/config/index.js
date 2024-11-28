import dotenv from 'dotenv';

dotenv.config();


export const SERVER_NAME = process.env.SERVER_HOST || "Azure Express";
export const SERVER_HOST = process.env.SERVER_HOST || "0.0.0.0";
export const SERVER_PORT = process.env.SERVER_PORT || 3006;

/*
* Настр Azure
* */

export const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME || 'pv3211';
export const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY || null;
export const AZURE_STORAGE_AVATAR_BACKET = process.env.AZURE_STORAGE_AVATAR_BACKET || 'avatar';


/* Настройка папки загрузки */


import path from "path";
import {fileURLToPath} from 'url';

// получаем текущую папку директории

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//настройка пути для закгрузки временых файлов

export const UPLOAD_DIR = path.resolve(__dirname,'../uploads'); // корневая папка uploads