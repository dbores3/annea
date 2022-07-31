import { Injectable,
    Logger,
    NotFoundException,
    UnprocessableEntityException,
 } from '@nestjs/common';
import { Turbines } from './turbines.interface';
import * as fs from "fs";
import * as path from "path";
import * as Papa from "papaparse";


@Injectable()
export class TurbinesService {
    private turbines: Array<Turbines> = [];

    public findAll(): Array<Turbines> {

        return this.turbines;
    }

    /*public findOne(id: number): Turbines {
        const post: Turbines = this.turbines.find(turbine => turbine.turbine_id === id);

        if (!post) {
           throw new NotFoundException('Post not found.')
        }

        return post;
    }*/

    //
    public async readFile() {        
        const csvFilePath = path.resolve('./files/example_indicator4.csv')
        const readCSV = async (filePath) => {
            const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
            return new Promise(resolve => {
                Papa.parse(fileContent, {
                    header: true,
                    dynamicTyping: true,
                    complete: results => {
                        //
                        resolve(results);
                    }
                });
            });
        };
        
        //
        let parsedData = await readCSV(csvFilePath); 
        this.turbines = parsedData['data'];
        //console.log(this.turbines.length);
    }
}
