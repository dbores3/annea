import { Module } from '@nestjs/common';
import { TurbinesService } from './turbines.service';
import { TurbinesController } from './turbines.controller';

/**
 * @desc Turbine's module in order to organize all the turbine's components
 * @author David Bores
**/

@Module({
  providers: [TurbinesService],
  controllers: [TurbinesController],
  exports: [TurbinesService],
})
export class TurbinesModule {}
