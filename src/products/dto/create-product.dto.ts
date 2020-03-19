import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class ProductType {
    @Field(() => ID)
    readonly id?: string;
    @Field()
    readonly name?: string;
    @Field(() => Int)
    readonly price?: number;
    @Field()
    readonly description?: string;
    @Field(() => Int)
    readonly quantity?: number;
}