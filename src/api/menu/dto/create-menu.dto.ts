import { IsNotEmpty} from "class-validator";

export class CreateMenuDto {
    @IsNotEmpty()
    label: string;

    @IsNotEmpty()
    link: string;
}
