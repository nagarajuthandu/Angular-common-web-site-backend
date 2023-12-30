import { IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { Types } from "mongoose";
import { WidgetContent } from "src/api/widget-content/schema/widget-content.schema";
import { Widget } from "src/api/widgets/schema/widgets.schema";

export class CreatePageSettingDto {
    @IsNotEmpty()
    pagename: string;

    @ValidateNested({ each: true })
    @Type(() => Types.ObjectId)
    WidgetContent: WidgetContent[];
}
