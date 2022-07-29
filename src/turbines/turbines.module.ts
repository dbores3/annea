import { Module } from '@nestjs/common';
import { TurbinesService } from './turbines.service';
import { TurbinesController } from './turbines.controller';

@Module({
  providers: [TurbinesService],
  controllers: [TurbinesController],
  exports: [TurbinesService],
})
export class TurbinesModule {}
