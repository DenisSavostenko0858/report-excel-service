-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
