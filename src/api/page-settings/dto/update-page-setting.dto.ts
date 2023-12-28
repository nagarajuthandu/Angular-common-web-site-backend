import { PartialType } from '@nestjs/mapped-types';
import { CreatePageSettingDto } from './create-page-setting.dto';

export class UpdatePageSettingDto extends PartialType(CreatePageSettingDto) {}
