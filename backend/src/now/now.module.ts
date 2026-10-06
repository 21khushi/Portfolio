import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NowEntry, NowSchema } from './now.schema';
import { NowController } from './now.controller';
import { NowService } from './now.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: NowEntry.name, schema: NowSchema }])],
  controllers: [NowController],
  providers: [NowService],
})
export class NowModule {}
