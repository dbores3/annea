import { 
  IsDate, 
  IsNumber, 
  IsOptional
} from 'class-validator';
import { Type } from 'class-transformer';

/**
 * @desc Turbine's DTO, validates the data sent in the request that it will be used in the queries
 * @author David Bores
**/

export class TurbinesDto {
  // Validates number
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  turbine_id: number;

  // Validates number
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  public indicator: number;

  // Validates number
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  public variable: number;

  // Validates date
  @IsDate()
  @IsOptional()
  public timestamp: Date;

  // Validates date
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public startDate: Date;

  // Validates date
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public endDate: Date;

  // Validates number
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  public minIndicator: number;

  // Validates number
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  public maxIndicator: number;

}
