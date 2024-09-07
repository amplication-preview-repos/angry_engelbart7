import { Module } from "@nestjs/common";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { CrmModule } from "./crm/crm.module";
import { UserModule } from "./user/user.module";
import { CrmModuleModule } from "./crmmodule/crmmodule.module";
import { OrderItemModuleModule } from "./orderitemmodule/orderitemmodule.module";
import { OrderModuleModule } from "./ordermodule/ordermodule.module";
import { ProductModuleModule } from "./productmodule/productmodule.module";
import { UserModuleModule } from "./usermodule/usermodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    OrderModule,
    ProductModule,
    OrderItemModule,
    CrmModule,
    UserModule,
    CrmModuleModule,
    OrderItemModuleModule,
    OrderModuleModule,
    ProductModuleModule,
    UserModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
