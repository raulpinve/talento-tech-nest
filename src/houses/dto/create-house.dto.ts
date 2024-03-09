import { IsBoolean, IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";

export class CreateHouseDto {
    @IsNotEmpty()
    @IsString()
    @Matches(/^[A-Za-z]{4}\d{4}$/, {
        message: "No es un código válido. Debe contener exactamente cuatro letras seguidas de cuatro números."
    })
    readonly code: string;
    @IsNotEmpty()
    @IsString()
    readonly address: string;
    @IsNotEmpty()
    @IsString()
    readonly city: string; 
    @IsNotEmpty()
    @IsString()
    readonly state: string; 
    @IsNotEmpty()
    @IsNumber()
    readonly size: number;
    @IsNotEmpty()
    @IsString()
    readonly type: string;
    @IsNotEmpty()
    @IsString()
    readonly zip_code: string;
    @IsNotEmpty()
    @IsNumber()
    readonly rooms: number; 
    @IsNotEmpty()
    @IsNumber()
    readonly bathrooms: number;
    @IsNotEmpty()
    @IsBoolean()
    readonly parking: boolean;
    @IsNotEmpty()
    @IsNumber()
    readonly price: number;
    @IsNotEmpty()
    @IsString()
    readonly image: string;
}
