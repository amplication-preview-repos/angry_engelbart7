import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
@ObjectType("OrderCreateInputDtoObject")
class OrderCreateInputDto {
    @Field(() => Date)
    @Type(() => Date)
    orderDate!: Date;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    totalAmount!: number;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    user!: string;
}

export { OrderCreateInputDto as OrderCreateInputDto };