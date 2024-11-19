import { Module } from '@nestjs/common';

import { WaitlistModule } from './waitlist/waitlist.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true
  }),WaitlistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
