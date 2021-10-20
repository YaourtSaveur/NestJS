import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstPageModule } from './first-page/first-page.module';

@Module({
  imports: [FirstPageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
