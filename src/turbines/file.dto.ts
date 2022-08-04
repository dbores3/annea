import { 
    IsString,
    IsNotEmpty
} from 'class-validator';

/**
 * @desc File's DTO, validates the data sent in the request
 * @author David Bores
**/

export class FileDto {
  // Validates string
  @IsString()
  @IsNotEmpty()
  file: string;
}
