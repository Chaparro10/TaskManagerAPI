import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {  
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    user: string;
  
    @IsNumber()
    @IsNotEmpty()
    status: number;
}
