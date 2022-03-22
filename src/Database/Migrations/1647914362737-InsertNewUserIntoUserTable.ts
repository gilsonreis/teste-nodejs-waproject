import {MigrationInterface, QueryRunner} from "typeorm";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';

export class InsertNewUserIntoUserTable1647914362737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const passwordHash = await bcrypt.hash('qwe123', 10);
        const user_id = uuidv4();
        const sql = `insert into "user" ("id", "name", "email", "password", "created_at") values ('${user_id}', 'Super Administrador', 'admin@admin.com', '${passwordHash}', '2022-03-21 23:01:54')`;
        await queryRunner.query(sql);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete from "user" where email = "admin@admin.com"`)
    }

}
