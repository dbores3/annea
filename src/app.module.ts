import { Module } from '@nestjs/common';
import { TurbinesModule } from './turbines/turbines.module';

@Module({
  imports: [TurbinesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
