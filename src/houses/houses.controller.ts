import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { HousesService } from "./houses.service";
import { CreateHouseDto } from "./dto/create-house.dto";
import { House } from "./houses.entity";
import { UpdateHouseDto } from "./dto/update-house.dto";

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post()
  create(@Body() createHouseDto: CreateHouseDto): Promise<House> {
    return this.housesService.create(createHouseDto);
  }

  @Get()
  findAll(): Promise<House[]> {
    return this.housesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<House> {
    return this.housesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHouseDto: UpdateHouseDto): Promise<House>{
    return this.housesService.update(id, updateHouseDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise <Boolean> {
    try {
      const house = await this.housesService.delete(id);
      if(!house){
        throw new NotFoundException("House not found");
      }
      return true; 
    } catch (error) {
      throw new NotFoundException("House not found");
    }
  }
}
