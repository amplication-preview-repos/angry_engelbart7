/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CrmService } from "../crm.service";
import { CrmCreateInput } from "./CrmCreateInput";
import { Crm } from "./Crm";
import { CrmFindManyArgs } from "./CrmFindManyArgs";
import { CrmWhereUniqueInput } from "./CrmWhereUniqueInput";
import { CrmUpdateInput } from "./CrmUpdateInput";

export class CrmControllerBase {
  constructor(protected readonly service: CrmService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Crm })
  async createCrm(@common.Body() data: CrmCreateInput): Promise<Crm> {
    return await this.service.createCrm({
      data: data,
      select: {
        complaint: true,
        createdAt: true,
        customerId: true,
        id: true,
        resolutionStatus: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Crm] })
  @ApiNestedQuery(CrmFindManyArgs)
  async crms(@common.Req() request: Request): Promise<Crm[]> {
    const args = plainToClass(CrmFindManyArgs, request.query);
    return this.service.crms({
      ...args,
      select: {
        complaint: true,
        createdAt: true,
        customerId: true,
        id: true,
        resolutionStatus: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Crm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async crm(@common.Param() params: CrmWhereUniqueInput): Promise<Crm | null> {
    const result = await this.service.crm({
      where: params,
      select: {
        complaint: true,
        createdAt: true,
        customerId: true,
        id: true,
        resolutionStatus: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Crm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCrm(
    @common.Param() params: CrmWhereUniqueInput,
    @common.Body() data: CrmUpdateInput
  ): Promise<Crm | null> {
    try {
      return await this.service.updateCrm({
        where: params,
        data: data,
        select: {
          complaint: true,
          createdAt: true,
          customerId: true,
          id: true,
          resolutionStatus: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Crm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCrm(
    @common.Param() params: CrmWhereUniqueInput
  ): Promise<Crm | null> {
    try {
      return await this.service.deleteCrm({
        where: params,
        select: {
          complaint: true,
          createdAt: true,
          customerId: true,
          id: true,
          resolutionStatus: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
