import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAdministrator1637535626086 implements MigrationInterface {
    name = 'CreateAdministrator1637535626086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."administrators_genre_enum" AS ENUM('1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "administrators" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "password" character varying NOT NULL, "name" character varying, "email" character varying, "cpf" character varying, "education" character varying, "pis_pasep" character varying, "birth_date" date, "phone" character varying, "active" boolean NOT NULL DEFAULT true, "genre" "public"."administrators_genre_enum" NOT NULL DEFAULT '3', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL DEFAULT 'admin', CONSTRAINT "UQ_78a337691f4e6733bd77fdfaa27" UNIQUE ("cpf"), CONSTRAINT "UQ_d47413a64c8d16a51a382c16f13" UNIQUE ("pis_pasep"), CONSTRAINT "UQ_7b0f1f711db79c41959b821e68f" UNIQUE ("phone"), CONSTRAINT "PK_aaa48522d99c3b6b33fdea7dc2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "type" character varying NOT NULL DEFAULT 'employee'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TABLE "administrators"`);
        await queryRunner.query(`DROP TYPE "public"."administrators_genre_enum"`);
    }

}
