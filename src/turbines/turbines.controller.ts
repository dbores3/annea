import {  
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseFilters, 
} from '@nestjs/common';
import { Turbines } from './turbines.interface';
import { TurbinesService } from './turbines.service';

@Controller('turbines')
export class TurbinesController {
    constructor(private readonly turbinesService: TurbinesService) {}

    @Get()
    public findAll(): Array<Turbines> {
        return this.turbinesService.findAll();
    }

    /*@Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): Turbines {
        return this.turbinesService.findOne(id);
    }*/

    @Get('read_file')
    public readFile(){
        return this.turbinesService.readFile();
    }
}
