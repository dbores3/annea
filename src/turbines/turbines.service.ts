import { Injectable,
    Logger,
    NotFoundException,
    UnprocessableEntityException,
 } from '@nestjs/common';
import { Turbines } from './turbines.interface';
import * as fs from "fs";
import * as path from "path";
import * as Papa from "papaparse";
import { TurbinesDto } from './turbines.dto';

@Injectable()
export class TurbinesService {
    private turbines: Array<Turbines> = [];

    public findAll(): Array<Turbines> {

        return this.turbines;
    }

    public queryData(post: TurbinesDto): Array<Turbines> {
        const filterData = this.turbines.filter( 
            i => Object.entries(post).every(([k, v]) => i[k] === v)
        );

        //console.log(filterData);
        /*{
            "turbine_id": 40
        }*/
        if(!Object.keys(filterData).length){
           throw new NotFoundException('Information not found.')
        }

        return filterData;
    }

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
