import { Test, TestingModule } from '@nestjs/testing';
import { TurbinesService } from './turbines.service';
import { FileDto } from './file.dto';
import { TurbinesDto } from './turbines.dto';

describe('TurbinesService', () => {
  let service: TurbinesService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: TurbinesService,
      useFactory: () => ({
        readFile: jest.fn(() => []),
        queryData: jest.fn(() => [])
      })
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [TurbinesService, ApiServiceProvider],
    }).compile();

    service = module.get<TurbinesService>(TurbinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("readFile",() => {
    it('should call readFile method with expected params', async () => {
      const readFileSpy = jest.spyOn(service, 'readFile');
      const dto = new FileDto();
      dto.file = "example_indicator.csv";
      service.readFile(dto);
      expect(readFileSpy).toHaveBeenCalledWith(dto);
    });
  });

  describe("queryData",() => {
    it('should call queryData method with expected params', async () => {
      const queryDataSpy = jest.spyOn(service, 'queryData');
      const dto = new TurbinesDto();
      service.queryData(dto);
      expect(queryDataSpy).toHaveBeenCalledWith(dto);
    });
  });
});
