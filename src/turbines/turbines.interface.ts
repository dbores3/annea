import { ApiProperty } from '@nestjs/swagger';

/**
 * @desc Turbine's interface, turbine's data types/structure
 * @author David Bores
**/

export class Turbines {
    @ApiProperty({ type: Number })
    turbine_id: number;
    @ApiProperty({ type: Number })
    indicator: number;
    @ApiProperty({ type: Number })
    variable: number;
    @ApiProperty({ type: String, format: 'date-time' })
    timestamp: Date;
}
