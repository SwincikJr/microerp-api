import * as path from 'path';
import { InititalizeApp } from 'swincikjr-nesterr';

InititalizeApp({
    port: 3000,
    modulesPath: path.join(__dirname, 'src', 'modules')
});
