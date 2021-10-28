import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEmployees1635387125073 implements MigrationInterface {
    name = 'CreateEmployees1635387125073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."employees_genre_enum" AS ENUM('1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "password" character varying NOT NULL, "name" character varying, "email" character varying, "cpf" character varying, "birthDate" date, "phone" character varying, "active" boolean NOT NULL DEFAULT true, "genre" "public"."employees_genre_enum" NOT NULL DEFAULT '3', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0ac9216832e4dda06946c37cb73" UNIQUE ("cpf"), CONSTRAINT "UQ_cbc362d1c574464a63d3acc3ead" UNIQUE ("phone"), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TYPE "public"."employees_genre_enum"`);
    }

}
