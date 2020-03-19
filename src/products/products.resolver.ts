import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { ProductType } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { ProductInput } from './input-products.product';

@Resolver('Products')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) { }

    @Query(() => [ProductType])
    async products(): Promise<ProductType[]> {
        return this.productsService.findAll();
    }
    @Mutation(() => ProductType)
    async createItem(@Args('input') product: ProductInput): Promise<ProductInput> {
        return this.productsService.createProduct(product);
    }

    @Mutation(() => ProductType)
    async updateItem(
        @Args('id') id: string,
        @Args('product') product: ProductInput,
    ): Promise<ProductInput> {
        return this.productsService.updateProduct(id, product);
    }

    @Mutation(() => ProductType)
    async deleteItem(@Args('id') id: string): Promise<ProductInput> {
        return this.productsService.deleteProduct(id);
    }

    @Query(() => String)
    async hello() {
        return 'hello';
    }
}
