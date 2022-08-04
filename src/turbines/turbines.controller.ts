import {  
    Controller,
    Get,
    Param,
    Query,
    HttpCode,
    HttpStatus
} from '@nestjs/common';
import { TurbinesService } from './turbines.service';
import { TurbinesDto } from './turbines.dto';
import { FileDto } from './file.dto';

@Controller('turbines')
export class TurbinesController {
    constructor(private readonly turbinesService: TurbinesService) {}

    /**
     * @desc Reads the csv file to query & fetches the data
     * @author David Bores
     * @param query 
     * @returns 
    **/
   
    @Get()
    @HttpCode(HttpStatus.OK)
    public queryData(@Query() query: TurbinesDto) {
        return this.turbinesService.queryData(query);
    }

    /**
     * @desc Queries the data accordingly to the selected filters sent by Query parameters
     * @author David Bores
     * @param params 
     * @returns 
    **/

    @Get('read_file/:file')
    @HttpCode(HttpStatus.OK)
    public readFile(@Param() params: FileDto): Promise<string> {
        return this.turbinesService.readFile(params);
    }
}
