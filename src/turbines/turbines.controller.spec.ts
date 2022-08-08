import { Test, TestingModule } from '@nestjs/testing';
import { TurbinesController } from './turbines.controller';
import { TurbinesService } from './turbines.service';
import { FileDto } from './file.dto';
import { TurbinesDto } from './turbines.dto';

describe('TurbinesController', () => {
  let controller: TurbinesController;
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
      controllers: [TurbinesController],
      providers: [TurbinesService, ApiServiceProvider],
      exports: [TurbinesService],
    }).compile();

    controller = module.get<TurbinesController>(TurbinesController);
    service = module.get<TurbinesService>(TurbinesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe("readFile",() => {
    it("should call readFile method", () => {
      const dto = new FileDto();
      expect(controller.readFile(dto)).not.toEqual(null);
    })

    it("should call readFile method", () => {
      const dto = new FileDto();
      dto.file = "example_indicator.csv";
      controller.readFile(dto);
      expect(service.readFile).toHaveBeenCalled();
      expect(service.readFile).toHaveBeenCalledWith(dto);
    })
  })

  describe("queryData",() => {
    it("should call queryData method", () => {
      const dto = new TurbinesDto();
      expect(controller.queryData(dto)).not.toEqual(null);
    })

    it("should call queryData method", () => {
      const dto = new TurbinesDto();
      controller.queryData(dto);
      expect(service.queryData).toHaveBeenCalled();
      expect(service.queryData).toHaveBeenCalledWith(dto);
    })
  })
});
