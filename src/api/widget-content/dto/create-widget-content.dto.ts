import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";
import { Widget } from "src/api/widgets/schema/widgets.schema";

export class CreateWidgetContentDto {
    @IsNotEmpty()
    @Type(()=> Types.ObjectId)
    widget:Widget

    title:string

    content:Record<string, any>;

    order:number

}
