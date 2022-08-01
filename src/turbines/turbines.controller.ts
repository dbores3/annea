import {  
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UseFilters, 
} from '@nestjs/common';
import { Turbines } from './turbines.interface';
import { TurbinesService } from './turbines.service';
import { TurbinesDto } from './turbines.dto';

@Controller('turbines')
export class TurbinesController {
    constructor(private readonly turbinesService: TurbinesService) {}

    @Get()
    public findAll(): Array<Turbines> {
        return this.turbinesService.findAll();
    }

    @Post()
    //Gets the Post variables, validates the data & process the data
    public queryData(@Body() post: TurbinesDto): Array<Turbines> {
        //console.log(post);
        return this.turbinesService.queryData(post);
    }

    @Get('read_file')
    public readFile(){
        return this.turbinesService.readFile();
    }
}
