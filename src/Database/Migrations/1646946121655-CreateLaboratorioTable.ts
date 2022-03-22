import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLaboratorioTable1646946121655 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await queryRunner.createTable(new Table({
      name: 'laboratorio',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'nome',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'endereco',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'status',
          type: 'smallint',
          default: 1,
          comment: 'Use 1 para ativo, 2 para inativo. Dessa forma, pode ser incluido mais status, caso for necessario. Basta documentar.',
          isNullable: false
        },
        {
          name: 'created_at',
          type: 'timestamp',
          isNullable: false
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          isNullable: true
        },
        {
          name: 'deleted_at',
          type: 'timestamp',
          isNullable: true
        }
      ]
    }))
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('laboratorio');
  }
  
}
