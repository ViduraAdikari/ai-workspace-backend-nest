import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const appPort = configService.get('APP_PORT') || 4400;
  const frontendOrigin = configService.get('FRONTEND_ORIGIN');

  app.enableCors({
    origin: [frontendOrigin], // origin: '*',
  });
  await app.listen(appPort);
}
bootstrap();
