import { Module } from '@nestjs/common';
import { FirstPageController } from './first-page.controller';

@Module({
  controllers: [FirstPageController]
})
export class FirstPageModule {}
