import { 
  IsDate, 
  IsNumber, 
  IsOptional
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * @desc Turbine's DTO, validates the data sent in the request that it will be used in the queries
 * @author David Bores
**/

export class TurbinesDto {
  // Validates number
  @ApiPropertyOptional({ type: Number })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  turbine_id: number;

  // Validates number
  @ApiPropertyOptional({ type: Number })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  public indicator: number;

  // Validates number
  @ApiPropertyOptional({ type: Number })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  public variable: number;

  // Validates date
  @ApiPropertyOptional({ type: String, format: 'date-time' })
  @IsDate()
  @IsOptional()
  public timestamp: Date;

  // Validates date
  @ApiPropertyOptional({ type: String, format: 'date-time' })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public startDate: Date;

  // Validates date
  @ApiPropertyOptional({ type: String, format: 'date-time' })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public endDate: Date;

  // Validates number
  @Type(() => Number)
  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @IsOptional()
  public minIndicator: number;

  // Validates number
  @Type(() => Number)
  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @IsOptional()
  public maxIndicator: number;

}
