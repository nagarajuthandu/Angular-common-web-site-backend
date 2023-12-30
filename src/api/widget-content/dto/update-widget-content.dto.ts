import { PartialType } from '@nestjs/mapped-types';
import { CreateWidgetContentDto } from './create-widget-content.dto';

export class UpdateWidgetContentDto extends PartialType(CreateWidgetContentDto) {}
