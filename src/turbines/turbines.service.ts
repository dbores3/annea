import { Injectable,
    Logger,
    NotFoundException,
    UnprocessableEntityException,
 } from '@nestjs/common';
import { Turbines } from './turbines.interface';
import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";

@Injectable()
export class TurbinesService {
    private turbines: Array<Turbines> = [];

    public findAll(): Array<Turbines> {
        return this.turbines;
    }

    /*public findOne(id: number): Turbines {
        const post: Turbines = this.turbines.find(turbine => turbine.id === id);

        if (!post) {
           throw new NotFoundException('Post not found.')
        }

        return post;
    }*/

    public readFile() {
        const csvFilePath = path.resolve('./files/example_indicator.csv')

        const headers = ['timestamp', 'indicator', 'turbine_id', 'variable', ]

        const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })

        const csvTurbines = parse(fileContent, {
            delimiter: ',',
            columns: headers,
            fromLine: 2,
            cast: (columnValue, context) => {
                //
                if (context.column === 'turbine_id') {
                  return parseInt(columnValue, 10);
                }
          
                return columnValue;
              },
        }, (error, results: Turbines[]) => {
            if (error) {
                console.error(error);
            }
            /*results.map((result) => {
                console.log(result.turbine_id);
            });*/
            console.log("Results", results);
        });
       // return csvTurbines;

      }
}
