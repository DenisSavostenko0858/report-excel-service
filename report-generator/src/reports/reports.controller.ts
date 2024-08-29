import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService) {}

    @Post()
    async createReport(@Body() body: { serviceName: string; endpoint: string; headers?: any }) {
        const { serviceName, endpoint, headers } = body;
        const reportId = await this.reportsService.createReport(serviceName, endpoint, headers);
        return { id: reportId };
    }

    @Get(':id')
    async getReportStatus(@Param('id') id: string) {
        const reportStatus = await this.reportsService.getReportStatus(parseInt(id));
        return reportStatus;
    }
}
