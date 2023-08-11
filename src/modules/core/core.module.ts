import { Module } from "swincikjr-nesterr";
import * as path from "path";

@Module({
    controllersPath: path.join(__dirname, 'controllers')
})
export class CoreModule {};