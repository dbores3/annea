import {  
    Controller,
    Get,
    Param,
    Query,
    HttpCode,
    HttpStatus,
    UseFilters
} from '@nestjs/common';
import { TurbinesService } from './turbines.service';
import { TurbinesDto } from './turbines.dto';
import { FileDto } from './file.dto';
import { 
    ApiTags, 
    ApiOkResponse,
    ApiNotFoundResponse
} from '@nestjs/swagger';
import { HttpExceptionFilter } from '../filters/http-exception.filter';


@Controller('turbines')
@ApiTags('turbines')
@UseFilters(HttpExceptionFilter)
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
    @ApiOkResponse({ description: 'Turbines queried correctly.'})
    @ApiNotFoundResponse({ description: 'Information not found.' })
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
    @ApiOkResponse({ description: 'File read correctly.'})
    @ApiNotFoundResponse({ description: 'File not found.' })
    public readFile(@Param() params: FileDto): Promise<string> {
        return this.turbinesService.readFile(params);
    }
}
