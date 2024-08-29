import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import axios from 'axios';
import * as ExcelJS from 'exceljs';  

@Injectable()
export class ReportsService {
    constructor(private prisma: PrismaService) {}

    async createReport(serviceName: string, endpoint: string, headers: any) {
        const report = await this.prisma.report.create({
            data: { status: 'Создан' },
        });

        this.generateReport(report.id, serviceName, endpoint, headers);
        return report.id;
    }

    private async generateReport(id: number, serviceName: string, endpoint: string, headers: any) {
        try {
            const response = await axios.get(endpoint, { headers });
            const data = response.data.data;

            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Report');

            worksheet.columns = Object.keys(data[0]).map(key => ({ header: key, key }));

            data.forEach(item => worksheet.addRow(item));

            const filePath = `./reports/report_${id}.xlsx`;
            await workbook.xlsx.writeFile(filePath);

            await this.prisma.report.update({
                where: { id },
                data: { status: 'Готов для чтения', url: filePath },
            });
        } catch (error) {
            console.error(error);
            await this.prisma.report.update({
                where: { id },
                data: { status: 'Ошибка' },
            });
        }
    }

    async getReportStatus(id: number) {
        return this.prisma.report.findUnique({ where: { id } });
    }
}
