import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async findAll(): Promise<CategoryDocument[]> {
    const categories = await this.categoryModel.find().exec();
    return categories;
  }

  async findbyId(id: string, populate?): Promise<CategoryDocument> {
    const category = this.categoryModel.findById(id);
    if (populate) {
      category.populate(populate);
    }
    return await category.exec();
  }

  async create(category: Category): Promise<CategoryDocument> {
    return await this.categoryModel.create(category);
  }
}
