import { Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Query } from '@nestjs/graphql';
import { ProductType } from './dto/create-product.dto';

@Resolver('Products')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) { }

    @Query(() => [ProductType])
    async products(): Promise<ProductType[]> {
        return this.productsService.findAll();
    }
}
