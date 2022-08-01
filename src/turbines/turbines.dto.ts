import { 
    IsDate, 
    IsNumber, 
    IsOptional
} from 'class-validator';

export class TurbinesDto {
  // Validates number
  @IsNumber()
  @IsOptional()
  public turbine_id: number;

  // Validates number
  @IsNumber()
  @IsOptional()
  public indicator: number;

  // Validates number
  @IsNumber()
  @IsOptional()
  public variable: number;

  // Validates date
  @IsDate()
  @IsOptional()
  public timestamp: Date;
}
