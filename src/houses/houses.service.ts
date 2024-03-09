import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House } from './houses.entity';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';

@Injectable()
export class HousesService {
  constructor(@InjectModel('House') private readonly houseModel: Model<House>){} 

  async create(createHouseDto: CreateHouseDto): Promise<House> {
    const newHouse = new this.houseModel({ createHouseDto });
    return newHouse.save();
  }

  async findAll(): Promise<House[]>{
    return this.houseModel.find().exec()
  }

  findOne(id: string): Promise<House> {
    try {
      return this.houseModel.findById(id);
    } catch (error) {
      throw new NotFoundException('House not found');
    }
  }

  async update(id: string, updateHouseDto: UpdateHouseDto): Promise<House> {
    try {
      const house = await this.houseModel.findByIdAndUpdate(id, updateHouseDto, { new: true, runValidators: true });
      return house;
    } catch (error) {
      const message = error.errors.city.properties.message || error.errors.state.properties.message 
      if(message){
        throw new BadRequestException(message);
      }else{
        throw new NotFoundException('House not found');
      }
    }
  }

  async delete(id: string): Promise<Boolean> {
    try {
      await this.houseModel.findByIdAndDelete(id)
      return true
    } catch (error) {
      throw new NotFoundException('House not found');
    }
  }
}
