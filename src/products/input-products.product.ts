import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class ProductInput {
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly price: number;
    @Field()
    readonly description: string;
    @Field()
    readonly quantity: number;
}