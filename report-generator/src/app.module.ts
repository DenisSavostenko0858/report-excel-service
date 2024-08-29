import { Module } from '@nestjs/common';
import { ReportsService } from './reports/reports.service';
import { ReportsController } from './reports/reports.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [ReportsController],
  providers: [ReportsService, PrismaService],
})
export class AppModule {}
