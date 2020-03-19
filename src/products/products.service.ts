import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductType } from './dto/create-product.dto';
import { ProductInput } from './input-products.product';


@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private productModel: Model<Product>) { }

    async findAll(): Promise<ProductType[]> {
        return await this.productModel.find().exec();
    }

    async findOne(id: string): Promise<ProductType> {
        return await this.productModel.findOne({ _id: id });
    }

    async createProduct(createProductDto: ProductInput): Promise<ProductType> {
        const createProduct = new this.productModel(createProductDto);
        return await createProduct.save();
    }

    async deleteProduct(id: string): Promise<ProductType> {
        return await this.productModel.findByIdAndRemove(id);
    }

    async updateProduct(id: string, product: Product): Promise<ProductType> {
        return await this.productModel.findByIdAndUpdate(id, product, { new: true });
    }
}
