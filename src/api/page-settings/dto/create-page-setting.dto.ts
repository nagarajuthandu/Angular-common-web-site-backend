import { IsNotEmpty, ValidateNested } from "class-validator";
import { Widget } from "../../widgets/schema/widgets.schema";
import { Type } from 'class-transformer';
import { Types } from "mongoose";

export class CreatePageSettingDto {
    @IsNotEmpty()
    pagename: string;

    @ValidateNested({ each: true })
    @Type(() => Types.ObjectId)
    widgets: Widget[];
}
