import { 
    Injectable,
    NotFoundException
 } from '@nestjs/common';
import { Turbines } from './turbines.interface';
import * as fs from "fs";
import * as path from "path";
import * as Papa from "papaparse";
import { TurbinesDto } from './turbines.dto';
import { FileDto } from './file.dto';

@Injectable()
export class TurbinesService {

    private turbines: Array<Turbines> = [];

    /**
     * @desc Filters the data depending on the sent Query parameters & applies each filter
     * @author David Bores
     * @param query 
     * @returns 
    **/

    public queryData(query: TurbinesDto): Array<Turbines> {
        // Filters the data accordingly to the parameters
        const filterData = this.turbines.filter(item => {
            for (let key in query) {
                switch (key) {
                    case "startDate":
                        if (new Date(item["timestamp"]) < query[key]) 
                            return false;
                        break;
                    case "endDate":
                        if (new Date(item["timestamp"]) > query[key])  
                            return false;
                        break;
                    case "minIndicator":
                        if (item["indicator"] < query[key]) 
                            return false;
                        break;
                    case "maxIndicator":
                        if (item["indicator"] > query[key])  
                            return false;
                        break;
                    default:
                        if (item[key] === undefined || item[key] != query[key])
                            return false;
                        break;
                }
            }
            return true;
        });
          
        //Returns error message if it couldn't find any row
        if (!Object.keys(filterData).length){
           throw new NotFoundException('Information not found.')
        }

        return filterData;
    }

    /**
     * @desc Parse the selected file's CSV content & saves it into the turbine's property
     * @author David Bores
     * @param params 
     * @returns 
    **/

    public async readFile(params: FileDto): Promise<string>{ 
        // Gets the selected file to be read       
        const csvFilePath = path.resolve('./files/'+params['file'])

        // Checks if file exists
        if (!fs.existsSync(csvFilePath)) {
            throw new NotFoundException('File not found.')
        }
        
        // Promise that parses the CSV content & dynamically sets the typing
        const readCSV = async (filePath) => {
            const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
            return new Promise(resolve => {
                Papa.parse(fileContent, {
                    header: true,
                    dynamicTyping: true,
                    complete: results => {
                        resolve(results);
                    }
                });
            });
        };
        
        // Awaits for the CSV content
        let parsedData = await readCSV(csvFilePath); 
        // Saves the parsed CSV content into the turbines private property
        this.turbines = parsedData['data'];
        
        return "File read correctly, you can start querying the data.";
    }
}
