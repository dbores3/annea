import { Test, TestingModule } from '@nestjs/testing';
import { TurbinesService } from './turbines.service';

describe('TurbinesService', () => {
  let service: TurbinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TurbinesService],
    }).compile();

    service = module.get<TurbinesService>(TurbinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
