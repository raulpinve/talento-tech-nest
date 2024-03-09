import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";

export class UpdateHouseDto {
    @IsOptional()
    @IsString()
    @Matches(/^[A-Za-z]{4}\d{4}$/, {
        message: "No es un código válido. Debe contener exactamente cuatro letras seguidas de cuatro números."
    })
    readonly code?: string;
    
    @IsOptional()
    @IsString()
    readonly address?: string;
    
    @IsOptional()
    @IsString()
    readonly city?: string; 
    
    @IsOptional()
    @IsString()
    readonly state?: string; 
    
    @IsOptional()
    @IsNumber()
    readonly size?: number;
    
    @IsOptional()
    @IsString()
    readonly type?: string;
    
    @IsOptional()
    @IsString()
    readonly zip_code?: string;
    
    @IsOptional()
    @IsNumber()
    readonly rooms?: number; 
    
    @IsOptional()
    @IsNumber()
    readonly bathrooms?: number;
    
    @IsOptional()
    @IsBoolean()
    readonly parking?: boolean;
    
    @IsOptional()
    @IsNumber()
    readonly price?: number;
    
    @IsOptional()
    @IsString()
    readonly image?: string;
}
