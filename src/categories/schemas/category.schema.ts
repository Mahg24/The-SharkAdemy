import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({
  timestamps: true,
})
export class Category {
  @Prop()
  name: string;
  @Prop()
  tags: string[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
