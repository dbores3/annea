import { Test, TestingModule } from '@nestjs/testing';
import { TurbinesController } from './turbines.controller';

describe('TurbinesController', () => {
  let controller: TurbinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurbinesController],
    }).compile();

    controller = module.get<TurbinesController>(TurbinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
