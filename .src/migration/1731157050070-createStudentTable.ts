import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStudentTable1731157050070 implements MigrationInterface {
    name = 'CreateStudentTable1731157050070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("ID" SERIAL NOT NULL, "studentName" character varying NOT NULL, "joinYear" integer NOT NULL, CONSTRAINT "PK_207140f90ac1fa5ae8e5581b042" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "items" ("ID" SERIAL NOT NULL, "ItemName" character varying NOT NULL, "ItemPrice" integer NOT NULL, CONSTRAINT "PK_c74dbc91449c7cac0cf4492ec70" PRIMARY KEY ("ID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "students"`);
    }

}
