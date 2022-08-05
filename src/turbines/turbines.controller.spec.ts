import { Test, TestingModule } from '@nestjs/testing';
import { TurbinesController } from './turbines.controller';
import { TurbinesService } from './turbines.service';

describe('TurbinesController', () => {
  let controller: TurbinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurbinesController],
      providers: [TurbinesService],
      exports: [TurbinesService],
    }).compile();

    controller = module.get<TurbinesController>(TurbinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
