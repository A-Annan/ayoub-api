import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      /.*/,
      // manager_url,
      // teacher_url,
      // student_url,
      // teacher_ui_url_prod,
      // manager_ui_url_prod,
      // student_ui_url_prod,
    ],
  });
  await app.listen(3000);
}
bootstrap();
