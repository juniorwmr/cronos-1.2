import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateContracts1635470646325 implements MigrationInterface {
    name = 'CreateContracts1635470646325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."contracts_type_enum" AS ENUM('1', '2')`);
        await queryRunner.query(`CREATE TYPE "public"."contracts_situation_enum" AS ENUM('1', '2', '3', '4')`);
        await queryRunner.query(`CREATE TABLE "contracts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "admission" date NOT NULL, "city" character varying, "type" "public"."contracts_type_enum" NOT NULL DEFAULT '2', "situation" "public"."contracts_situation_enum" NOT NULL DEFAULT '1', "contract" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "employeeId" uuid, CONSTRAINT "PK_2c7b8f3a7b1acdd49497d83d0fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contracts" ADD CONSTRAINT "FK_3681f79a2d6a77debddbfaad4e9" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contracts" DROP CONSTRAINT "FK_3681f79a2d6a77debddbfaad4e9"`);
        await queryRunner.query(`DROP TABLE "contracts"`);
        await queryRunner.query(`DROP TYPE "public"."contracts_situation_enum"`);
        await queryRunner.query(`DROP TYPE "public"."contracts_type_enum"`);
    }

}
