import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('space')
@Controller('spaces')
export class SpaceController {}
