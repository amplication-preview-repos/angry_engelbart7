/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CrmWhereUniqueInput } from "./CrmWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CrmUpdateInput } from "./CrmUpdateInput";

@ArgsType()
class UpdateCrmArgs {
  @ApiProperty({
    required: true,
    type: () => CrmWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CrmWhereUniqueInput)
  @Field(() => CrmWhereUniqueInput, { nullable: false })
  where!: CrmWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CrmUpdateInput,
  })
  @ValidateNested()
  @Type(() => CrmUpdateInput)
  @Field(() => CrmUpdateInput, { nullable: false })
  data!: CrmUpdateInput;
}

export { UpdateCrmArgs as UpdateCrmArgs };
