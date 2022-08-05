import { 
    IsString,
    IsNotEmpty
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


/**
 * @desc File's DTO, validates the data sent in the request
 * @author David Bores
**/

export class FileDto {
  // Validates string
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  file: string;
}
